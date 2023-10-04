import React, { useContext, useState, useEffect } from "react";

import { useSelector } from "react-redux";
// import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
// import { CartContext } from '../../context/cart.context'
import { UserContext } from "../../context/user.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import AnimatedPage from "../../components/animated-page/animated-page.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CartItemsContainer,
  TotalContainer,
  CheckoutMessageContainer,
  ButtonContainer,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  let total = 0;
  const { currentUser } = useContext(UserContext);
  const [newTotal, setNewTotal] = useState(0);

  useEffect(() => {
    console.log("INSIDE CHECKOUT TOTAL" + JSON.stringify(cartItems));

    const totalTheCart = () =>
      cartItems.map((item) => {
        return (total += item.quantity * item.price);
      });

    totalTheCart();

    setNewTotal(total - total * 0.15);

    console.log("UPDATED CHECKOUT TOTAL: " + newTotal);
  }, [cartItems, total]);

  return (
    <AnimatedPage>
      <CheckoutPageContainer className='checkout-page'>
        <CheckoutHeaderContainer className='checkout-header maroon'>
          <div className='header-block'>
            <span>Product</span>
          </div>

          <div className='header-block description'>
            <span>Description</span>
          </div>

          <div className='header-block'>
            <span>Quantity</span>
          </div>

          <div className='header-block'>
            <span>Subtotal</span>
          </div>

          <div className='header-block'>
            <span>Remove</span>
          </div>
        </CheckoutHeaderContainer>

        {cartItems ? (
          <CartItemsContainer className='cart-items'>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </CartItemsContainer>
        ) : null}

        <TotalContainer className='total'>
          <span>
            <h3>TOTAL: ${newTotal.toFixed(2)}</h3>
          </span>
        </TotalContainer>

        <CheckoutMessageContainer className='checkoutMessage maroon'>
          <p>
            ** Please use the following test card information for payment! **
            <br />
            <br />
            4242 4242 4242 4242
            <br />
            Exp: 12/26
            <br />
            CVV: 123
          </p>
        </CheckoutMessageContainer>
        <ButtonContainer className='button'>
          {newTotal > 0 ? (
            <StripeCheckoutButton
              price={newTotal}
              cartItems={cartItems}
              total={newTotal * 100}
            />
          ) : null}
        </ButtonContainer>
      </CheckoutPageContainer>
    </AnimatedPage>
  );
};

export default Checkout;
