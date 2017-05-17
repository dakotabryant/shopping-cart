import React, { Component } from 'react';
import AddInventory from './components/AddInventory';
import Part from './components/Part';
import Order from './components/Order';
import base from './base';

import {computerParts} from './sample-parts';
import './cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.addPart = this.addPart.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.state = {
      parts: computerParts,
      order: {}
    }
  }
  addPart(part) {
    const parts = {...this.state.parts};
    const timeStamp = Date.now();

    parts[`part-${timeStamp}`] = part;
    this.setState({parts});
  }
  addToOrder(key) {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.state.parts[key].quantity--;
    this.setState({order})
  }
  render() {
    return (
      <div className="site-container">
      <ul className="parts-list">
        {Object
        .keys(this.state.parts)
        .map(key => <Part key={key} index={key} details={this.state.parts[key]} addToOrder={this.addToOrder} />)}
      </ul>
      <Order parts={this.state.parts} order={this.state.order}/>
      <AddInventory addPart={this.addPart} />
    </div>
    );
  }
}

export default Cart;
