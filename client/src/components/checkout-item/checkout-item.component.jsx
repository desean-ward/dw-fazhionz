/************************************************************************
 
Individual items listed on the check out page.

*************************************************************************/
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MdOutlineDeleteForever } from "react-icons/md";
import { BiPlus, BiMinus } from "react-icons/bi";

import {
  clearItemFromCart,
  addItem,
  removeItem,
  updateItem,
} from "../../redux/cart/cart.actions";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { updateCartInDB } from "../../utils/firebase/firebase.utils";

import { motion } from "framer-motion";

import {
  ItemContainer,
  InfoContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  RemoveBtn,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(true);
  const { name, imageUrl, price, quantity } = cartItem;
  const newPrice = price - price * 0.15;
  const itemTotal = Number(newPrice) * quantity;
  const newItemTotal = itemTotal.toFixed(2);

  const inputRef = useRef(quantity);

  const variants = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 },
    exit: { opacity: 0, scale: 0 },
  };

  const handleDecrement = async (cartItem) => {
    if (cartItem.quantity === 1) {
      handleDeleteFromCart(cartItem);
    } else dispatch(removeItem(cartItem));
  };

  const handleQtyClick = (e) => {
    e.target.select();
  };

  /* Adds or Removes an item and updates the quantity */
  const handleQtyChange = (e) => {
    if (e.target.value.length !== 0) {
      cartItem.quantity = parseInt(e.target.value);

      dispatch(updateItem(cartItem));
    } else {
      if (inputRef.current.value === "0") {
        cartItem.quantity = 0;
        setIsVisible(false);

        const removeItem = () => {
          if (cartItem) {
            dispatch(removeItem(cartItem));
          }
        };

        setTimeout(removeItem, 400);
      }
    }
  };
  
  /* Removes the entire item from cart IF the quantity is '0' */
  const handleOnBlur = () => {
    if (inputRef.current.value === "0" || inputRef.current.value === "") {
      cartItem.quantity = 1;
      setIsVisible(false);

      const deleteItem = async () => {
        if (cartItem) {
          dispatch(clearItemFromCart(cartItem));
        }
      };

      setTimeout(deleteItem, 400);
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) inputRef.current.blur();
  };

  /* Deletes the entire item quantity from the cart */
  const handleDeleteFromCart = (cartItem) => {
    setIsVisible(false);

    const deleteItem = () => {
      if (cartItem) {
        dispatch(clearItemFromCart(cartItem));
      } else {
        console.log("NO ITEM TO DELETE");
      }
    };

    setTimeout(deleteItem, 400);
  };

  // Update cart in database
  useEffect(() => {
    updateCartInDB(currentUser, cartItems);
  }, [cartItems]);

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <ItemContainer className='checkout-item'>
        <InfoContainer>
          <ImageContainer>
            <img src={imageUrl} alt='' />
          </ImageContainer>
          <Name className='name sect'>{name}</Name>

          <Quantity className='quantity sect'>
            <div className='arrow' onClick={() => handleDecrement(cartItem)}>
              <BiMinus />
            </div>
            <input
              type='input'
              id='value'
              className='value'
              ref={inputRef}
              onChange={handleQtyChange}
              onClick={handleQtyClick}
              onKeyUp={handleKeyUp}
              onBlur={handleOnBlur}
              value={cartItem.quantity}
            />
            <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
              <BiPlus />
            </div>
          </Quantity>

          <Price className='price sect'>${newItemTotal}</Price>

          <RemoveBtn
            className='remove-button sect'
            onClick={() => handleDeleteFromCart(cartItem)}
          >
            {<MdOutlineDeleteForever className='trash-icon' />}
          </RemoveBtn>
        </InfoContainer>
      </ItemContainer>
    </motion.div>
  );
};

export default CheckoutItem;
