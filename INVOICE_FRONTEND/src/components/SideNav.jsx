import styled from "styled-components";
import { useLocation } from 'react-router-dom'

function SideNav() {
    const location = useLocation();
    let page = location.pathname.substring(1)
    return (
        <SideNavWrapper>
            <ul>
                <li><a href="/home" className={page=="home"?"active":""}>Invoices</a></li>
                <li><a href="/clients" className={page=="clients"?"active":""}>Clients</a></li>
                <li><a href="/items" className={page=="items"?"active":""}>Items</a></li>
                <li><a href="/payments" className={page=="payments"?"active":""}>Payments</a></li>
            </ul>
        </SideNavWrapper>
    );
}

const SideNavWrapper = styled.section`
   width:200px;
   height:100vh;
   background-color:#3A3A3A;
   position: absolute;
   left:0px;
   top:0px;
   padding-top:60px;
   ul li{
     list-style:none;
     margin:10px 0px;
     a{
        color:#ccc;
        font-size:14px;
     }
     a:hover, a.active{
        color: white
     }
   }
`

export default SideNav
