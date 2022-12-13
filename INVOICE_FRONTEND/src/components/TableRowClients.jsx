import styled from "styled-components";

function TableRowClients(props) {
  return (
     <tr>
        <td><div className="ui checkbox"><input type="checkbox" className="hidden" /><label>{props.client.id}</label></div></td>
        <td>{props.client.name}</td>
        <td width={200}><a href="#" className="update">Update</a> <a href="#" className="delete">Delete</a> </td>
     </tr>
  );
}

export default TableRowClients;
