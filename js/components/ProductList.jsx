'use strict';

import React from 'react';
import ProductItem from './ProductItem/ProductItem.jsx';


export default class ProductList extends React.Component {

  constructor() {
    super();
    this.state = {data: []};
  }

  componentDidMount() {
      $.ajax({
          url: this.props.url,
          dataType: 'json',
          cache: false,
          success: function(data) {
              // console.log(data);
              this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
          }.bind(this)
      });
  }
    render() {

        let CatalogueItemNodes = this.state.data.map(function(item) {
            return (
              <li key={item.productID}>
              <ProductItem data={item}/>
              </li>
            );
        });

        return (
            <ul className="catalogue-itemList">
                {CatalogueItemNodes}
            </ul>
        );
    }
}
