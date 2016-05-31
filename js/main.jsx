'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let Shopping = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({data: data});

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
    <div className="shopping">
      <h1>My Shopping Bag</h1>
      <ItemList data={this.state.data} />
      <ShoppingBag />
    </div>
      )
  }
});

let Item = React.createClass({
  render: function() {
    return (
    <li className="item">
      <img src={this.props.productImage} alt={this.props.productName} />
    </li>
    );
  }
})

let ItemList = React.createClass({
  render: function() {
  let itemNodes = this.props.data.map(function(item) {
  return (
    <Item productImage={item.productImg} itemName={item.productName} key={item.productID} />
  );
  });
  return (
  <ul className="itemList">
    {itemNodes}
  </ul>
  );
  }
});

let ShoppingBag = React.createClass({
  render: function() {
  return (
  <ul>
  <li>One</li>
  </ul>
  );
  }
});

ReactDOM.render(
<Shopping url="/products.json" />, document.getElementById('content')
);
