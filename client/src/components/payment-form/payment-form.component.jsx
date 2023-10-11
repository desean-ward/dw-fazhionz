import React, { useState } from "react";

import { useSelector } from "react-redux";

import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.actions";

import {
  PaymentElement,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CustomButton from "../custom-button/custom-button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  let amount = useSelector(selectCartTotal);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    amount -= amount * 0.15;
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    // Get the client secret key
    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    setIsProcessingPayment(false);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    if (paymentResult.error) {
      console.log(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h3>Credit Card Payment:</h3>
        <CardElement />
        <CustomButton disabled={isProcessingPayment} buttonType='inverted'>
          Pay Now
        </CustomButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
