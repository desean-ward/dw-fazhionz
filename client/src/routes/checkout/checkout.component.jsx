import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkout-form";
import { nanoid } from "nanoid";

import { loadStripe } from "@stripe/stripe-js";

import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import AnimatedPage from "../../components/animated-page/animated-page.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CartItemsContainer,
  TotalContainer,
  CheckoutMessageContainer,
  CheckoutFormContainer,
  NoItemsContainer,
} from "./checkout.styles";
// import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [newTotal, setNewTotal] = useState(0);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  // Retrieve Stripe publishable key from server
  useEffect(() => {
    let url;

    process.env.NODE_ENV === "development"
      ? (url = "http://localhost:5252/config")
      : (url = "/config");

    fetch(url).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
      stripePromise && console.log("Stripe Promise: ");
    });
  }, []);

  // Create PaymentIntent as soon as the page loads
  useEffect(() => {
    let url;

    process.env.NODE_ENV === "development"
      ? (url = "http://localhost:5252/create-payment-intent")
      : (url = "https://dw-fazhionz.vercel.app/create-payment-intent");

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        total: total * 100,
      }),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
      clientSecret && console.log("Client Secret: ");
    });
  }, [total]);

  // TODO ---- SAVE FOR LATER FOR POSSIBLE DIFFERENT STRIPE INTEGRATION---- //
  // const handleCheckout = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch("/create-checkout-session", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         items: cartItems,
  //       }),
  //     });

  //     if (res.ok) return res.json();
  //     window.location = res.url;
  //   } catch (error) {
  //     console.log("ERROR: ", error);
  //   }
  // };

  // Updates total when cart items change
  useEffect(() => {
    setNewTotal(total - total * 0.15);
  }, [cartItems, total]);

  return (
    <AnimatedPage>
      <CheckoutPageContainer className='checkout-page'>
        <div className='flex flex-col'>
          <CheckoutHeaderContainer className='checkout-header maroon'>
            <div className='header-block'>
              <span className='hidden'>Product</span>
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
                <CheckoutItem key={nanoid()} cartItem={cartItem} />
              ))}
            </CartItemsContainer>
          ) : null}

          <TotalContainer className='total pt-4 w-full'>
            <span className=' border-2 bg-green-900'>
              <h3>TOTAL: ${newTotal.toFixed(2)}</h3>
            </span>
          </TotalContainer>

          <CheckoutMessageContainer className='checkoutMessage maroon'>
            <p>
              ** Please use the following test card information only! **
              <br />
              4242 4242 4242 4242 &nbsp; &nbsp; Exp: 12/28 &nbsp; &nbsp; CVV:
              123
            </p>
          </CheckoutMessageContainer>
        </div>
        <CheckoutFormContainer>
          {newTotal > 0 ? (
            <>
              {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm />
                </Elements>
              )}
            </>
          ) : (
            <NoItemsContainer>
              <h1 className='text-3xl align-center text-center text-gray-500'>
                No Items In Bag
              </h1>
            </NoItemsContainer>
          )}
        </CheckoutFormContainer>
      </CheckoutPageContainer>
    </AnimatedPage>
  );
};

export default Checkout;
