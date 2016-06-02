'use strict';

import React from 'react';

export default class ProductItem extends React.Component {

    constructor() {
        super();
        this.state = {
            added: false
        };

        this.addItem = (e) => {
            if (this.state.added == true) {
                this.setState({added: false});
                this.props.onButtonClicked(null);
            } else {
                this.setState({added: true});
                this.props.onButtonClicked(this.props.data);

            }
            console.log(this.props.data);

        }
    }

    render() {
        return (
            <div>
                <img src={this.props.data.productImg} alt={this.props.data.productName}/>
                <p className="item-name">{this.props.data.productName}
                    (ID: {this.props.data.productID})</p>
                <p className="item-price">{this.props.data.productPrice}</p>
                <button onClick={this.addItem}>{this.state.added
                        ? 'Remove'
                        : 'Add'}</button>
            </div>
        );
    }
}
