/************************************************************************
 
Individual items listed on the check out page.

*************************************************************************/

import React, { useState, useContext, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MdOutlineDeleteForever } from "react-icons/md";
import { BiPlus, BiMinus } from "react-icons/bi";

import {
  clearItemFromCart,
  addItem,
  removeItem,
  clearCart,
} from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
// import { CartContext } from '../../context/cart.context'

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
import { updateCartInDB } from "../../utils/firebase/firebase.utils";
import { getCurrentUrl } from "swup/lib/helpers";
import { UserContext } from "../../context/user.context";

const CheckoutItem = ({ cartItem }) => {
  // const { cartItems, setCartItems } = useContext(CartContext)
  // const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext)
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { currentUser } = useContext(UserContext);

  const [isVisible, setIsVisible] = useState(true);
  const { name, imageUrl, price, quantity } = cartItem;
  const newPrice = price - price * 0.15;
  const itemTotal = Number(newPrice) * quantity;
  const newItemTotal = itemTotal.toFixed(2);

  const [qty, setQty] = useState(quantity);
  const inputRef = useRef(quantity);
  let updatedQty = quantity;

  const variants = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 },
    exit: { opacity: 0, scale: 0 },
  };

  const handleQtyClick = (e) => {
    e.target.select();
  };

  /* Adds or Removes an item and updates the quantity */
  const handleQtyChange = (e) => {
    console.log("QUANTITY:", e.target.value);
    if (e.target.value.length !== 0) {
      setQty(parseInt(e.target.value));
      cartItem.quantity = qty;

      dispatch(addItem(cartItem));
    } else {
      if (inputRef.current.value === "0" || inputRef.current.value === "") {
        cartItem.quantity = 0;
        setIsVisible(false);

        const removeItem = () => {
          if (cartItem) {
            dispatch(removeItem(cartItem));
            // setCartItems([]);
          }
        };

        const myTimeout = setTimeout(removeItem, 400);
      }

      updateCartInDB(currentUser, cartItems);
    }
  };

  //   const clearTheCart = () => {
  //     setCartItems([]);
  //   };

  /* Removes the entire item from cart IF the quantity is '0' */
  const handleOnBlur = () => {
    if (inputRef.current.value === "0" || inputRef.current.value === "") {
      cartItem.quantity = 1;
      setIsVisible(false);

      const deleteItem = async () => {
        if (cartItem) {
          dispatch(clearItemFromCart(cartItem));
          //setCartItems(...cartItem, {quantity: 0})
        }

        await updateCartInDB(currentUser, cartItems);
      };

      const myTimeout = setTimeout(deleteItem, 400);
    }
  };

  const handleKeyUp = (e) => {
    // if (itemTotal === 0) {
    //     inputRef.current.value = "";
    // }

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

      updateCartInDB(currentUser, cartItems);
    };

    const myTimeout = setTimeout(deleteItem, 400);

    //updateCartInDB(currentUser, cartItems)
  };

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
        <ImageContainer className='image-container                                                                                                                                                                                                                        '>
          <img src={imageUrl} alt='item' />
        </ImageContainer>

        <InfoContainer>
          <Name className='name sect'>{name}</Name>

          <Quantity className='quantity sect'>
            <div
              className='arrow'
              onClick={() => dispatch(removeItem(cartItem))}
            >
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

// const mapDispatchToProps = dispatch => ({
//     addItem: item => dispatch(addItem(item)),
//     removeItem: item => dispatch(removeItem(item)),
//     clearItem: item => dispatch(clearItemFromCart(item))
// });

// export default connect(null, mapDispatchToProps)(CheckoutItem);

export default CheckoutItem;
