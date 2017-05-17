import React, { Component } from 'react';
import AddInventory from './components/AddInventory';
import Part from './components/Part';
import {computerParts} from './sample-parts';
import './cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: computerParts
    }
  }

  addPart(key) {
    const parts = {...this.state.parts};
    console.log(parts);
  }

  render() {
    return (
      <div className="site-container">
      {this.addPart()}
      <ul className="parts-list">
        {Object
        .keys(this.state.parts)
        .map(key => <Part key={key} index={key} details={this.state.parts[key]} />)}
      </ul>
      <AddInventory />
    </div>
    );
  }
}

export default Cart;
