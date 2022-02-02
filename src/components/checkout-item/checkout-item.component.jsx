/************************************************************************
 
Individual items listed on the check out page.

*************************************************************************/

import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { MdOutlineDeleteForever } from 'react-icons/md';
import { BiPlus, BiMinus } from 'react-icons/bi';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import { ItemContainer, InfoContainer, ImageContainer, Name, Quantity, Price, RemoveBtn} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const itemTotal = price * quantity;

    const [qty, setQty ] = useState(quantity);
    const inputRef = useRef(quantity)
    let updatedQty = quantity;

    const handleQtyClick = (e) => {
        e.target.select();
    }
  
    const handleQtyChange = (e) => {
        

        if (e.target.value.length !== -1) {
            
            console.log("LENGTH: " + e.target.value.length);

            updatedQty = parseInt(e.target.value - 1);
            
            console.log("QUANTITY: " + updatedQty);
            
            cartItem.quantity = updatedQty;
            
            addItem(cartItem);
            
        } else {
            if(inputRef.current.value == "") {
                cartItem.quantity = 0;
                removeItem(cartItem);
            }
        }
    }

    const handleOnBlur = () => {
        
        if(itemTotal == 0) {
            console.log("ITEM TOTAL: " + itemTotal)
            clearItem(cartItem);
        }
    }

    const handleKeyUp = (e) => {
        if (itemTotal === 0) {
            inputRef.current.value = "";
        }

        if (e.keyCode === 13) inputRef.current.blur();
        
    }

    return(
        <ItemContainer className="checkout-item">
            <ImageContainer className="image-container">
                <img src={imageUrl} alt="item" />
            </ImageContainer>

            <InfoContainer>
                <Name className="name">{name}</Name>
                
                <Quantity className="quantity">
                    <div className="arrow" onClick={() => removeItem(cartItem)}><BiMinus /></div>
                    <input type="input"
                    id="value" 
                    className="value" 
                    ref={inputRef}
                    onChange={handleQtyChange} 
                    onClick={handleQtyClick} 
                    onKeyUp={handleKeyUp}
                    onBlur={handleOnBlur}
                    value={updatedQty} />
                    <div className="arrow" onClick={() => addItem(cartItem)}><BiPlus /></div>
                </Quantity>

                <Price className="price">${itemTotal}</Price>

                <RemoveBtn className="remove-button"  onClick={() => clearItem(cartItem)}>{<MdOutlineDeleteForever className="trash-icon" />}</RemoveBtn>
            </InfoContainer>
        </ItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),

    removeItem: item => dispatch(removeItem(item)),

    clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);