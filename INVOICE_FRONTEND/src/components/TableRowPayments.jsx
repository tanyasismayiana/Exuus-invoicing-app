import styled from "styled-components";

function TableRowPayments(props) {
  return (
     <tr>
        <td><div class="ui checkbox"><input type="checkbox" class="hidden" readonly="" tabindex="0"/><label>{props.payments.id}</label></div></td>
        <td>{props.payments.Amount}</td>
        <td width={200}><a href="#" className="update">Update</a> <a href="#" className="delete">Delete</a> </td>
     </tr>
  );
}

export default TableRowPayments;
