import React from 'react';
import './part.css';


export default class Part extends React.Component {
  render() {
    const {details, index} = this.props
    const isAvailable = details.quantity > 0;

    return(
      <li className="part-container">
        <h2 className="name part-details">{details.name}</h2>
        <p className="price part-details">{`Price: ${details.price}`}</p>
        <p className="weight part-details">{`Weight: ${details.weight}`}</p>
        <p className="brand part-details">{`Brand: ${details.brand}`}</p>
        <p className="model part-details">{`Model: ${details.model}`}</p>
        <p className="quantity part-details">{`Quantity: ${details.quantity}`}</p>
        <img src={details.image} alt=""/>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(index)}>Add to Order</button>
      </li>
    )
  }
}
