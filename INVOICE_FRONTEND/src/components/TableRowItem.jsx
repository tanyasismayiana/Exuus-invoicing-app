import styled from "styled-components";

function TableRowItem(props) {
  return (
     <tr>
        <td><div class="ui checkbox"><input type="checkbox" class="hidden" readonly="" tabindex="0"/><label>{props.items.id}</label></div></td>
        <td>{props.items.name}</td>
        <td width={200}><a href="#" className="update">Update</a> <a href="#" className="delete">Delete</a> </td>
     </tr>
  );
}

export default TableRowItem;
