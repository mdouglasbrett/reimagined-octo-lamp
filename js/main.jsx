'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
    <App url="/products.json"/>, document.getElementById('catalogue'));
