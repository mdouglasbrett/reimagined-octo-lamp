'use strict';

import React from 'react';

export default class ShoppingBagItem extends React.Component {

    handleRemoveButton() {
        console.log('I clicked this!');
    }

    render() {
        return (
            <li className="shoppingBag-item">
                <div>
                    <p className="item-name">{this.props.itemName}
                        (ID: {this.props.itemID})</p>
                    <p className="item-price">{this.props.itemPrice}</p>
                    <button onClick={this.handleRemoveButton}>Remove</button>
                </div>
            </li>
        );
    }
};
