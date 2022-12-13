import styled from "styled-components";

function TableRowItem(props) {

   const deleteItem = (id) => {
      fetch(process.env.REACT_APP_API_URL + "/items/delete-item", {
        method: 'DELETE',
        headers: new Headers({
                  'Content-Type': 'application/json', 
          }),
        body: JSON.stringify(id)
      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
          console.error(error);
      });
   }


  return (
     <tr>
        <td><div className="ui checkbox"><input type="checkbox" className="hidden"/><label>{props.items.id}</label></div></td>
        <td>{props.items.name}</td>
        <td>{props.items.cost}</td>
        <td width={200}><a href="#" className="update">Update</a> <a href="#" className="delete" onClick={()=>deleteItem(props.items.id)}>Delete</a> </td>
     </tr>
  );
}

export default TableRowItem;
