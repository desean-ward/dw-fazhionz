import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer } from "./cart-icon.styles";
import { useEffect } from "react";

const CartIcon = (
  {
    /* toggleCartHidden, itemCount */
  }
) => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [totalQty, setTotalQty] = useState(0);
  let total = 0;

  //alert("this is the current user: " + JSON.stringify(currentUser.cart))
  useEffect(() => {
    if (cartItems && cartItems.length) {
      const itemCount = () =>
        cartItems.map((item) => {
          total = total + item.quantity;
          setTotalQty(total);
        });

      itemCount();
    }
  }, [cartItems]);

  useEffect(() => {
    console.log("TOTAL: " + cartItems.length);
  }, [cartItems]);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count maroon'>{totalQty}</span>
    </CartIconContainer>
  );
};

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// /* Selector - Accumulate the item count */
// const mapStateToProps = createStructuredSelector({
//     itemCount: selectCartItemsCount
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

export default CartIcon;
