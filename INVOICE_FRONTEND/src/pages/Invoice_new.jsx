import React from 'react'
import styled from "styled-components";
import { useState } from "react";
import Navigation from "../components/Navigation";
import {  Button, Header, Icon, Form, Modal } from 'semantic-ui-react'
import ItemDetails from "../components/ItemDetails";
import ViewInvoice from '../components/View_invoice';

function InvoiceNew(){
    const [open, setOpen] = React.useState(false)
    
    return(
        <Navigation>
           <InnerForm>
           <h4>New Invoice</h4>
           <Form>
           <div className="row">
               <div className="row-left">
                    <p>Seller</p>
                    <input type='text' placeholder='Manila Keza' />
                    <div className="row">
                      <div className="row-left">
                        <p>Bank</p>
                        <input type='text' placeholder='Manila Keza' />
                      </div>
                      <div className="row-right">
                        <p>Bank account</p>
                        <input type='text' placeholder='Manila Keza' />
                      </div>
                    </div>
               </div>
               <div className="row-right">
                    <p>Client</p>
                    <input type='text' placeholder='Manila Keza' />
                    <div className="row">
                      <div className="row-left">
                        <p>Invoice Date</p>
                        <input type='text' placeholder='Manila Keza' />
                      </div>
                      <div className="row-right">
                        <p>Due date</p>
                        <input type='text' placeholder='Manila Keza' />
                      </div>
                    </div>
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
                     <ItemDetails/>
                     <ItemDetails/>
                  </tbody>
               </table>
               <br/>
               <div className="row mx-3">
                  <button class="ui primary button">New Item <i aria-hidden="true" class="right add icon"></i></button>
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
                      <button class="ui primary button">Save</button> <button onClick={() => setOpen(true)} class="ui primary button">View</button>
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
                    <Button class="ui primary button">Download</Button><Button class="ui primary button">Print</Button>
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