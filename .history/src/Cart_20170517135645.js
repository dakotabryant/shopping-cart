import React, { Component } from 'react';
import AddInventory from './components/addInventory';
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
  render() {
    return (
      <div className="site-container">

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
