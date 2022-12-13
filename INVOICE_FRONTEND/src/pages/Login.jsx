import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Route, useNavigate } from 'react-router-dom'
import { Divider, Form, Label } from 'semantic-ui-react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setItem } from "../utils/Storage";


function Login(){
    const [error, setError] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home')
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(process.env.REACT_APP_API_URL + "/users/login", {
            method: 'POST',
            headers: new Headers({
                      'Content-Type': 'application/json', 
              }),
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            if(responseData.token){
                setItem("user", responseData);
                navigate('/home')
            }
        })
        .catch((error) => {
              console.error(error.message);
        });
    }

    return(
        <OutterWrapper>
            <FormWrapper>
               <img src={logo} alt="logo"/>
               <div className="login-wrapper">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                   
                    <h5>LOGIN</h5>
                    <p>Email</p>
                    <input {...register('email',{required:'this is requered'})} type='text' placeholder='Ex: manila@mail.com' />
                    {errors.email &&
                        <Label basic color='red' pointing>
                            Please enter a value
                        </Label>
                    }
                    <Form.Field>
                    <p>Password</p>
                    <div class="ui icon input"><input {...register('password',{required:'this is requered'})} type="password" placeholder="Password"/><i aria-hidden="true" class="eye slash icon"></i></div>
                    {errors.password &&
                        <Label basic color='red' pointing>
                            Please enter a value
                        </Label>
                    }
                    </Form.Field>
                    <div className="btn-login-wrapper"><button type="submit" class="ui primary button"> Login </button></div>
                    <p className="p-center"><a href="/register">Sign up</a> if you dont have an account</p>
                  </Form>
               </div>
            </FormWrapper>
        </OutterWrapper>
    )
}

const OutterWrapper = styled.section`
  height: 100vh;
  width: 100%;
  margin: auto; 
  display:flex;
  justify-content: center;
  align-items: center;   
`

const FormWrapper = styled.div`
    text-align:center;
    img{
        width:150px;
        height:50px;
    }
    div.login-wrapper{
        background-color: white;
        width:400px;
        height: auto;
        border-radius:10px; 
        text-align: left;
        padding: 20px;
        p{
            margin:15px 0px 3px 0px;
        }
        .btn-login-wrapper{
            width:100%;
            text-align: center;
            margin-top:20px
        }
        .p-center{
            text-align: center
        }
    }
`

export default Login