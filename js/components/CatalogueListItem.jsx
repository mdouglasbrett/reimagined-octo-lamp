'use strict';

import React from 'react';

export default class CatalogueListItem extends React.Component {

     addItem() {
         this.props.onItemAddedToBag({added: true});
     }

     render() {
         return (
             <li className="catalogue-item">
                 <div>
                     <img src={this.props.itemImage} alt={this.props.itemName}/>
                     <p className="item-name">{this.props.itemName}                          (ID: {this.props.itemID})</p>
                     <p className="item-price">{this.props.itemPrice}</p>
                     <button onClick={this.addItem}>Add</button>
                 </div>
             </li>
         );
     }
 }
