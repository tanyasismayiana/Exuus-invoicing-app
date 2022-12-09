import styled from "styled-components";
import { useState } from "react";
import Navigation from "../components/Navigation";
import { Divider, Form, Label } from 'semantic-ui-react'
import { useState } from "react";
import { useForm } from "react-hook-form";

function ClientNew(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(errors);
  const onSubmit = data => console.log(data);
    
    return(
        <Navigation>
           <InnerForm>
           <h4>New Client</h4>
           <Form>
           <div className="row">
               <div className="row-left">
                    <p>Seller</p>
                    <input {...register('seller',{required:'this is requered'})} type='text' placeholder='Manila Keza' />
                    
               </div>
               <div className="row-right">
                    <p>Client</p>
                    <input {...register('seller',{required:'this is requered'})} type='text' placeholder='Manila Keza' />
                   
               </div>
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
                      <button class="ui primary button">Save</button> <button class="ui primary button">View</button>
                    </div>
                </div>
           </Form>
           
           </InnerForm>
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
  .mx-3{
    padding:0px 10px 0px 10px;
  }
`
export default ClientNew