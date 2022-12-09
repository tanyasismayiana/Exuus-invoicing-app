import styled from "styled-components";
import { useState } from "react";
import Navigation from "../components/Navigation";
import TableRowItem from "../components/TableRowItem";
import { Route, useNavigate } from 'react-router-dom'


function Items(){
    const [error, setError] = useState(false);
    const data = [{
        id:1,
        number: 98099,
        name: "Tanyasis Mayiana",
        
    },
    { 
        id:3,
        number: 98099,
        name: "Tanyasis Mayiana",
        
    },
    {
        id:6,
        number: 98099,
        name: "Tanyasis Mayiana",
        
    },
    { 
        id:8,
        number: 98099,
        name: "Tanyasis Mayiana",
        
    }]
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/create-items')
    }
    return(
        <Navigation>
            <TableHeader>
               <div className="top-wrapper">
                   <h4>Items</h4>
                   <button onClick={handleClick} class="ui primary button">New Item <i aria-hidden="true" class=" right add icon"></i></button>
               </div>
               <table>
                  <thead>
                    <tr>
                        <td>Item Number</td>
                        <td>Item name</td>
                        <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, i)=>{
                        return(
                          <TableRowItem items = {item}/>
                        )
                    })}
                  </tbody>
               </table>
            </TableHeader>
        </Navigation>
    )
}

const TableHeader = styled.section`
  margin-right: 20px;
  padding:15px; 
  background-color: white; 
  .top-wrapper{
    display:flex;
    justify-content: space-between;
    margin-bottom:7px;
  }
  table{
    width:100%;
  }
  table thead tr td{
    background-color:#848484;
    padding:8px;
    color:white;
  }
  table tbody tr td{
    border-bottom: 1px solid #ccc;
    padding:8px;
  }
  table tbody tr:hover td{
    border-bottom: 1px solid #ccc;
    padding:8px;
    background-color:#DCDFE1;
  }
  td a.update{
    color: green;
    border:1px solid #ccc;
    padding:2px 5px;
    margin-right:10px;
  }
  td a.delete{
    color: red;
    border:1px solid #ccc;
    padding:2px 5px;
  }
`
export default Items