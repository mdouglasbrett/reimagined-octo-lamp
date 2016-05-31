'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let Shopping = React.createClass({
  render: function() {
    return (
    <div className="shoppingBag">
              <h1>My Shopping Bag</h1>
              <ItemList />
              <ShoppingBag />
            </div>;)
  }
});

ReactDOM.render(
<Shopping />, document.getElementById('content')
);
