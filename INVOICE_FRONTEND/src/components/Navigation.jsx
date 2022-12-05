import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Divider, Form, Label } from 'semantic-ui-react'
import { Children, useState } from "react";
import Header from "./Header";
import SideNav from "./SideNav";

function Navigation(props){
    return(
        <NavWrapper>
            <Header/>
            <SideNav/>
            <MainSection>
                {props.children}
            </MainSection>
        </NavWrapper>
    )
}

const NavWrapper = styled.section`
  height:100vh;
  padding:80px 0px 20px 220px;  
`

const MainSection = styled.section`
  width:100%;
`

export default Navigation