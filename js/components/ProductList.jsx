'use strict';

import React from 'react';
import ProductItem from './ProductItem/ProductItem.jsx';

export default class ProductList extends React.Component {

    constructor() {
        super()
        this.buttonHandler = (obj) => {
            this.props.getData(obj);
        }
    }

    render() {

        let data = this.props.data;
        let buttonClick = this.buttonHandler
        let CatalogueItemNodes = data.map(function(item) {
            return (
                <li key={item.productID}>
                    <ProductItem data={item} onButtonClicked={buttonClick}/>
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
