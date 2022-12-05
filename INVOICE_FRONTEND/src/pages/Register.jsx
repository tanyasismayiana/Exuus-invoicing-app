import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Divider, Form, Label } from 'semantic-ui-react'
import { useState } from "react";

function Register(){
    const [error, setError] = useState(false);

    return(
        <OutterWrapper>
            <FormWrapper>
               <img src={logo} alt="logo"/>
               <div className="login-wrapper">
                  <Form>
                    <h5>REGISTER</h5>
                    <Form.Field>
                        <p>Names: </p>
                        <input type='text' placeholder='Ex: Manila Keza' />

                        {error &&
                            <Label basic color='red' pointing>
                                Please enter a value
                            </Label>
                        }
                   </Form.Field>
                   <Form.Field>
                        <p>Email: </p>
                        <input type='text' placeholder='Ex: manila@mail.com' />

                        {error &&
                            <Label basic color='red' pointing>
                                Please enter a value
                            </Label>
                        }
                   </Form.Field>
                   
                   <Form.Field>
                        <p>Password</p>
                        <div class="ui icon input"><input type="password" placeholder="Password"/><i aria-hidden="true" class="eye slash icon"></i></div>
                        {error &&
                            <Label basic color='red' pointing>
                                Please enter a value
                            </Label>
                        }
                    </Form.Field>
                    <Form.Field>
                        <p>Confirm password</p>
                        <div class="ui icon input"><input type="password" placeholder="Password"/><i aria-hidden="true" class="eye slash icon"></i></div>
                        {error &&
                            <Label basic color='red' pointing>
                                Please enter a value
                            </Label>
                        }
                    </Form.Field>
                    <div className="btn-login-wrapper"><button class="ui primary button"> Signup </button></div>
                    <p className="p-center"><a href="/Login">Login</a> if you dont have an account</p>
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

export default Register