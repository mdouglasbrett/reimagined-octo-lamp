'use strict';

import React from 'react';
import CatalogueListItem from './CatalogueListItem.jsx';


export default class CatalogueList extends React.Component {
    render() {
      
        let CatalogueItemNodes = this.props.data.map(function(item) {
            return (
              <CatalogueListItem
              itemImage={item.productImg}
              itemName={item.productName}
              itemID={item.productID}
              itemPrice={item.productPrice}
              key={item.productID}
              onClick="this.addItem"/>
            );
        });
        return (
            <ul className="catalogue-itemList">
                {CatalogueItemNodes}
            </ul>
        );
    }
}
