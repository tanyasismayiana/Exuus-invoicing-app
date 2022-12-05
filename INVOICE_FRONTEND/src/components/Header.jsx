import styled from "styled-components";
import logo from "../assets/images/logo.png";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

function Header() {
  return (
     <HeaderWrapper>
        <img src={logo} alt="logo"/>
        <SearchBar/>
        <div className="right">
          <Profile/>
        </div>
     </HeaderWrapper>
        
  );
}

const HeaderWrapper = styled.section`
   width:100%;
   height:60px;
   background-color:#D9D9D9;
   position:absolute;
   top:0px;
   left:0px;
   z-index:10;
   display:flex;
   justify-content: space-between;
   img{
    width:110px;
    height:40px;
    margin: 10px 0px 0px 20px;
   }
`

export default Header
