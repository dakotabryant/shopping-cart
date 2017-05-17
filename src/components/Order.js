import React from 'react';

export default class Order extends React.Component {
  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this)
  }
  renderOrder(key) {
    const part = this.props.parts[key];
    const count = this.props.order[key];
    return (
      <li key={key}>
        <span>{count} {part.brand} {part.model} {part.name}</span>
        <span className="price"> ${count * part.price}</span>
      </li>
    )
  }
  render() {
    const orderIds = Object.keys(this.props.order);

    return(
      <div className="order-container">
        <h2>Your Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
        </ul>
      </div>
    )
  }
}
