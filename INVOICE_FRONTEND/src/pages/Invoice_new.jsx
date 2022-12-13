import React from 'react'
import styled from "styled-components";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import {  Button, Input, Form, Modal } from 'semantic-ui-react'
import ItemDetails from "../components/ItemDetails";
import ViewInvoice from '../components/View_invoice';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


function InvoiceNew(){

  const [open, setOpen] = useState(false)
  const [clients, setClients] = useState([])
  const [numberOfItems, setNumberOfItems] = useState(1)

  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    fetch(process.env.REACT_APP_API_URL + "/invoices/post-invoice", {
      method: 'POST',
      headers: new Headers({
                'Content-Type': 'application/json', 
        }),
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(() => {
      navigate('/invoices')
    })
    .catch((error) => {
        console.error(error);
    });
  }

  const fetchClients = () => {
    fetch(process.env.REACT_APP_API_URL + "/clients")
    .then(res => res.json())
    .then((items) => {
      setClients(items.clients)}
    ).catch(error => {
      console.log(error);
    })}

  useEffect(() => {
    fetchClients();
  }, []);

  let createItems = (number) => {
    var elements = [];
    for(let i = 0; i < number; i++){
        elements.push(<ItemDetails key={i}/>);
    }
    return elements;
  }
  

  return(
        <Navigation>
           <InnerForm>
           <h4>New Invoice</h4>
           <Form onSubmit={handleSubmit(onSubmit)}>
           <div className="row">
                  
                    <div className="row">
                      <div className='row-third'>
                        <p>Client</p>
                         <select name='' {...register("client", { required: true })}>
                                <option>Choose client...</option>
                          {clients.map((client,i)=>{
                                return(
                                 <option key={i} value={client.id}>{client.name}</option>
                              )
                            })}
                         </select>
                       
                      </div>
                      <div className='row-third'>
                        <p>Invoice Date</p>
                        <input  type='date' {...register("invoiceDate", { required: true })} />
                      </div>
                      <div className='row-third'>
                        <p>Due date</p>
                        <input  type='date' {...register("dueDate", { required: true })} />
                      </div>
                    </div>
            
           </div>
           <div className='row'>
                         <div className='row-left'>
                            <p>Bank account</p>
                            <input  type='text' {...register("number", { required: true })} />
                         </div>
                         <div className='row-left'>
                          <p>Bank</p>
                          <input  type='text' {...register("number", { required: true })} />
                         </div>
                    </div>
           <table>
                  <thead>
                    <tr>
                        <td>Items</td>
                        <td>Quantity</td>
                        <td>Unit cost (RWF)</td>
                        <td>Total (RWF)</td>
                    </tr>
                  </thead>
                  <tbody>
                      {createItems(numberOfItems)}
                  </tbody>
               </table>
               <br/>
               <div className="row mx-3">
                  <button type='button' onClick={()=>setNumberOfItems(numberOfItems+1)} className="ui primary button">New Item <i aria-hidden="true" className="right add icon"></i></button>
                  <p>Total: 6,000.00</p>
               </div>

               <div className="row">
                   <div className="row-left">
                       <p>Notes</p>
                       <textarea placeholder="More details" rows="3"></textarea>
                   </div>
                  
               </div>
               <br/>
               <div className="row">
                    <div className="row-left">
                      <button type='submit' className="ui primary button">Save</button> <button onClick={() => setOpen(true)} className="ui primary button">View</button>
                    </div>
                </div>
           </Form>
           </InnerForm>
           
           <Modal
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                >
                <Modal.Content>
                    <ViewInvoice/>
                </Modal.Content>
                <HangingBtnsWrapper>
                    <Button className="ui primary button">Download</Button><Button className="ui primary button">Print</Button>
                </HangingBtnsWrapper>
            </Modal>

        </Navigation>
    )
}

const InnerForm = styled.section`
  background-color: #fff;
  padding:15px;
  margin-right:20px;
  .row{
    width:100%;
    display: flex;
    justify-content: space-between;
  }
  .row-left{
    width:49%;
  }
  .row-right{
    width:49%;
  }
  .row-third{
    width:33%;
  }
  p{
    margin:15px 0px 0px 0px;
  }
  table{
    width:100%;
    margin-top:20px;
  }
  table thead tr td{
    background-color:#848484;
    padding:8px;
    color:white;
  }
  table tbody tr td{
    padding:8px;
  }
  table tbody tr:hover td{
    border-bottom: 1px solid #ccc;
    padding:8px;
    background-color:#DCDFE1;
  }
  .mx-3{
    padding:0px 10px 0px 10px;
  }
`
const HangingBtnsWrapper = styled.div`
    position:absolute;
    bottom:-50px;
    backdround-color:white;
`
export default InvoiceNew