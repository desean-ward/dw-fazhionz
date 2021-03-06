/************************************************************************
 
The cart items are the individual items listed in the cart/bag dropdown.

*************************************************************************/

import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    const itemTotal = Number(price) * Number(quantity);

    return (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
            <span className="right">Subtotal: ${itemTotal}</span>
        </div>
    </div>
    )
}

export default CartItem;