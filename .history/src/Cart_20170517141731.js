import React, { Component } from 'react';
import AddInventory from './components/AddInventory';
import Part from './components/Part';
import {computerParts} from './sample-parts';
import './cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.addPart = this.addPart.bind(this);
    this.state = {
      parts: computerParts
    }
  }

  addPart(part) {
    const parts = {...this.state.parts};
    const timeStamp = Date.now();

    parts[`part-${timeStamp}`] = part;
    this.setState({parts});
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
