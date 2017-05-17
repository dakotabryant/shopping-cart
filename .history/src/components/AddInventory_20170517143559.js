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
          <input ref={(input) => this.name = input} type="text" placeholder="Part-Type"/>
          <input ref={(input) => this.weight = input} type="text" placeholder="Weight"/>
          <input ref={(input) => this.model = input} type="text" placeholder="Model"/>
          <input ref={(input) => this.price = input} type="text" placeholder="Price"/>
          <input ref={(input) => this.brand = input} type="text" placeholder="Brand"/>
          <input ref={(input) => this.image = input} type="text" placeholder="Image"/>

        </form>
      </div>
      <button>  </button>
    )
  }
}
export default AddInventory;
