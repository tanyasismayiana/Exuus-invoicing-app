import styled from "styled-components";

function TableRowClients(props) {
  return (
     <tr>
        <td><div className="ui checkbox"><input type="checkbox" className="hidden"/><label>{props.invoice.number}</label></div></td>
        <td>{props.invoice.client}</td>
        <td>{props.invoice.amount}</td>
        <td>{props.invoice.date}</td>
        <td>{props.invoice.status}</td>
        <td width={200}><a href="#" className="update">Update</a> <a href="#" className="delete">Delete</a> </td>
     </tr>
  );
}

export default TableRowClients;
