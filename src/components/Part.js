import React from 'react';
import './part.css';


export default class Part extends React.Component {
  render() {
    const {details} = this.props
    return(
      <li className="part-container">
        <h2 className="name part-details">{details.name}</h2>
        <p className="price part-details">{`Price: ${details.price}`}</p>
        <p className="weight part-details">{`Weight: ${details.weight}`}</p>
        <p className="brand part-details">{`Brand: ${details.brand}`}</p>
        <p className="model part-details">{`Model: ${details.model}`}</p>
        <img src={details.image} alt=""/>
      </li>
    )
  }
}
