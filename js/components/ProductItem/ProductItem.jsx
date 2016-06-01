'use strict';

import React from 'react';

export default class ProductItem extends React.Component {

  constructor() {
    super();
    this.state = {added: false};
    this.addItem = (e) => {
      this.setState({
        added: !this.state.added
      });
    }
  }




     render() {
         return (
                 <div>
                     <img src={this.props.data.productImg} alt={this.props.data.productName}/>
                     <p className="item-name">{this.props.data.productName}                          (ID: {this.props.data.productID})</p>
                     <p className="item-price">{this.props.data.productPrice}</p>
                     <button onClick={this.addItem} >{this.state.added ? 'Remove': 'Add'}</button>
                 </div>
         );
     }
 }
