import React from 'react';

class AddInventory extends React.Component {
  createPart(event) {
    event.preventDefault();

    const part = {
      name: this.name.value,
      weight: this.weight.value,
      price: this.price.value,
      brand: this.brand.value,
      model: this.model.value,
      image: this.image.value
    }
  }

  render(){
    return(
      <div className="form-container">
        <form>
          <input ref={(input) => this.name = input}type="text" placeholder="Part-Type"/>
          <input type="text" placeholder="Weight"/>
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
