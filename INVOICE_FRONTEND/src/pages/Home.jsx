import styled from "styled-components";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import TableRow from "../components/TableRow";
import { Route, useNavigate } from 'react-router-dom'

function Home(){
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/create-invoice')
    }

    const fetchItems = () => {
      fetch(process.env.REACT_APP_API_URL + "/invoices")
      .then(res => res.json())
      .then((items) => {
        console.log(items)
        setLoading(false);
        setData(items.invoices)}
      ).catch(error => {
        console.log(error);
      })}

    useEffect(() => {
      fetchItems()
    }, []);

    return(
        
        <Navigation>
            <TableHeader>
               <div className="top-wrapper">
                   <h4>Invoices</h4>
                   <button onClick={handleClick} className="ui primary button">New Invoices <i aria-hidden="true" className="right add icon"></i></button>
               </div>
               <table>
                  <thead>
                    <tr>
                        <td>Invoice Number</td>
                        <td>Client</td>
                        <td>Amount (Rwf)</td>
                        <td>Date</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ?
                    <tr><td colSpan={3}><div className="ui active centered inline loader"></div></td></tr>
                      :
                      <>
                        {data.length > 0 ?
                        <>
                        {data.map((item, i)=>{
                            return(
                              <TableRow invoice = {item}/>
                            )
                        })}
                        </>
                        :
                        <tr><td colSpan={3}>No Data</td></tr>
                        }
                      </>
                    }
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
    border-bottom: 1px solid #f1f1f1;
    padding:8px;
  }
  table tbody tr:hover td{
    border-bottom: 1px solid #f1f1f1;
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
export default Home