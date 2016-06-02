'use strict';

import React from 'react';
import ProductList from './ProductList.jsx';
import ShoppingBag from './ShoppingBag.jsx';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            bag: []
        };

        this.handleData = (obj) => {
            let items = [];
            items.push(obj)
            this.setState({bag: this.state.bag.concat(items)})
            console.log(this.state.bag);
        }
    }

    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        return (
            <div>
                <div>
                    <ProductList data={this.state.data} getData={this.handleData}/>
                </div>
                <div>
                    <ShoppingBag data={this.state.bag}/>
                </div>
            </div>
        );
    }
}
