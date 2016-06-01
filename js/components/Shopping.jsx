'use strict';

import React from 'react';
import CatalogueList from './CatalogueList.jsx';
import ShoppingBag from './ShoppingBag.jsx';

export default class Shopping extends React.Component {

    constructor() {
      super();
      this.state = {data: [], bagItems: []};
    }
    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                console.log(data);
                this.setState({data: data});
                console.log(this.state);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    addItemToBag(item) {
        console.log(item);
    }

    render() {
        return (
            <div className="shopping">
                <h1>My Shopping Bag</h1>
                    <CatalogueList data={this.state.data} />
                    <ShoppingBag data={this.state.data} />
            </div>
        )
    }
  };
