import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import {computerParts} from './sample-parts.js';
import './index.css';

ReactDOM.render(
  <Cart computerParts={computerParts} />,
  document.getElementById('root')
);
