import styled from "styled-components";
import { useState } from "react";
import Navigation from "../components/Navigation";
import { Form, Label } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


function ClientNew(){
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    fetch(process.env.REACT_APP_API_URL + "/clients/post-client", {
      method: 'POST',
      headers: new Headers({
                'Content-Type': 'application/json', 
        }),
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(() => {
      navigate('/clients')
    })
    .catch((error) => {
        console.error(error);
    });
  }
    
    return(
        <Navigation>
           <InnerForm>
           <h4>New Client</h4>
           <Form onSubmit={handleSubmit(onSubmit)}>
           <div className="row">
               <div className="row-left">
                    <p>Client number</p>
                    <input type='text' {...register("number", { required: true })} />
                    {errors.number &&
                        <Label basic color='red' pointing>
                            Please enter a value
                        </Label>
                    }
               </div>
               <div className="row-right">
                    <p>Client name</p>
                    <input type='text' {...register("name", { required: true })} />
                    {errors.number &&
                        <Label basic color='red' pointing>
                            Please enter a value
                        </Label>
                    }
               </div>
           </div>
               <br/>
               <div className="row">
                    <div className="row-left">
                      <button type="submit" className="ui primary button">Save</button> 
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