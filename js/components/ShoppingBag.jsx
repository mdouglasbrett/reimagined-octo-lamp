'use strict';

import React from 'react';
import ShoppingBagItem from './ShoppingBagItem.jsx';

export default class ShoppingBag extends React.Component {

    render() {
        return (
            <div>
                <h3>Shopping Bag</h3>
                <ul className="shoppingBag-itemList"></ul>
            </div>
        );
    }
};
