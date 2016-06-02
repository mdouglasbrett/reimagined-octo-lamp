'use strict';

import React from 'react';
import BagItem from './BagItem/BagItem.jsx';

export default class ShoppingBag extends React.Component {

    render() {
        let BagItemNodes = this.props.data.map(function(item) {
            return (
                <li key={item.productID}>
                    <BagItem data={item}/>
                </li>
            );
        });
        return (
            <section>
                <div>
                    <h3>Shopping Bag</h3>
                </div>
                <ul>
                    {BagItemNodes}
                </ul>
            </section>

        );
    }
};
