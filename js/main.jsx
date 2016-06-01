'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Shopping from './components/Shopping.jsx';

ReactDOM.render(
    <Shopping url="/products.json"/>, document.getElementById('content'));
