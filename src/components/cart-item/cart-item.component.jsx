import React from 'react';
import './cart-item.styles.scss';

const CartItem = ( { item: {name, imageUrl, price, quantity} } ) => (
    <div className="cart-item">
        <img src = {imageUrl} alt="item"/>
        <div className="item-details">
            <div className="name"> {name} </div>
            <span className="price"> {`${quantity} X $${price}`} </span>
        </div>
    </div>
)

export default CartItem;