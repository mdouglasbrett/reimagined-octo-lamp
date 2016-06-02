'use strict';

import React from 'react';

export default class BagItem extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.data.productImg} alt={this.props.data.productName}/>
                <p className="item-name">{this.props.data.productName}
                    (ID: {this.props.data.productID})</p>
                <p className="item-price">{this.props.data.productPrice}</p>
            </div>

        );
    }
}
