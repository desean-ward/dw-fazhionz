import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer } from "./cart-icon.styles";

const CartIcon = () => {
  const total = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count maroon'>{total}</span>
    </CartIconContainer>
  );
};

export default CartIcon;
