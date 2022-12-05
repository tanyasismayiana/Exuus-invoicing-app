import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Divider, Form, Label } from "semantic-ui-react";
import { Children, useState } from "react";
import { Input } from 'semantic-ui-react'

function Profile() {
  return (
    <ProfileWrapper>
        <p> <i aria-hidden="true" class="caret down icon"></i> Manila Keza</p>    
        <p> <i aria-hidden="true" class="caret down icon"></i> Settings</p>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  margin: 20px 30px;
  width: 250px;
  display:flex;
  justify-content:space-between;
`;

export default Profile;
