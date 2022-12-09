import styled from "styled-components";
import { useState } from "react";
import Navigation from "../components/Navigation";
import { Divider, Form, Label } from 'semantic-ui-react'

function ItemsNew(){
    
    return(
        <Navigation>
           <InnerForm>
           <h4>New Items</h4>
           <Form>
           <div className="row">
               <div className="row-left">
                    <p>Item number</p>
                    <input type='text' placeholder='Manila Keza' />
                    
               </div>
               <div className="row-right">
                    <p>Item name</p>
                    <input type='text' placeholder='Manila Keza' />
                   
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
export default ItemsNew