import React from 'react';

class AddInventory extends React.Component {
  render(){
    return(
      <div className="form-container">
        <form>
          <input type="text" placeholder="Part-Type"/>
          <input type="text" placeholder="weight"/>
          <input type="text" placeholder="Model"/>
          <input type="text" placeholder="Price"/>
          <input type="text" placeholder="Brand"/>
          <input type="text" placeholder="Image"/>
        </form>
      </div>
    )
  }
}
export default AddInventory;
