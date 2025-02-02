import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { IoBag } from "react-icons/io5";
import { CartIconContainer } from "./cart-icon.styles";

const CartIcon = () => {
  const total = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
    <IoBag className="shopping-icon" size={28} />
      <span className='item-count maroon'>{total}</span>
    </CartIconContainer>
  );
};

export default CartIcon;
