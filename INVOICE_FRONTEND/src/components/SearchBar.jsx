import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Divider, Form, Label } from "semantic-ui-react";
import { Children, useState } from "react";
import { Input } from 'semantic-ui-react'

function SearchBar() {
  return (
    <SearchWrapper>
      <Input
    icon={{ name: 'search', circular: true, link: true }}
    placeholder='Search...'
  />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  margin: 10px 70px;
  input{
    width: 250px;
  }
`;

export default SearchBar;
