'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList.jsx';
import ShoppingBag from './components/ShoppingBag.jsx';

ReactDOM.render(
    <ProductList url="/products.json" />, document.getElementById('catalogue'));
ReactDOM.render(
  <ShoppingBag />, document.getElementById('shoppingBag'));
