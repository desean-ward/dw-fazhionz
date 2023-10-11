/************************************************************************
 
The cart items are the individual items listed in the cart/bag dropdown.

*************************************************************************/

import React from 'react';

import { CartItemContainer, ItemDetails } from './cart-item.styles'


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    const newPrice = Number(price - (price * .15).toFixed(2))
    const itemTotal = Number(newPrice) * Number(quantity);

    return (
    <CartItemContainer>
        <img src={imageUrl} alt="item" />
        <ItemDetails>
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${newPrice.toFixed(2)}</span>
            <span className="right">Subtotal: ${itemTotal.toFixed(2)}</span>
        </ItemDetails>
    </CartItemContainer>
    )
}

export default CartItem;