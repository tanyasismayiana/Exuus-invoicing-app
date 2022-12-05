import styled from "styled-components";

function TableRow(props) {
  return (
     <tr>
        <td><div class="ui checkbox"><input type="checkbox" class="hidden" readonly="" tabindex="0"/><label>{props.client.id}</label></div></td>
        <td>{props.client.name}</td>
        <td width={200}><a href="#" className="update">Update</a> <a href="#" className="delete">Delete</a> </td>
     </tr>
  );
}

export default TableRow;
