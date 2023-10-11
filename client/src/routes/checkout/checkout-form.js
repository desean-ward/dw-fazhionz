import { useState } from "react";
import { PaymentElement, AddressElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { clearCart } from "../../redux/cart/cart.actions";
import { updateCartInDB } from "../../utils/firebase/firebase.utils";

import GlassModal from "../../components/glass-popup/glass-popup.component";
import "./checkout-form.css";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [modal, setModal] = useState(false);

  const handlePaymentSucess = () => {
    showModal();
  };

  const showModal = () => {
    if (modal === true) {
      dispatch(clearCart());
      updateCartInDB(currentUser, cartItems);
      navigate("/");
    }

    setModal(!modal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      body: {
        total: 2000,
      },
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/checkout`,
      },
      redirect: "if_required",
    });

    if (
      (error && error.type === "card_error") ||
      (error && error.type === "validation_error")
    ) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      handlePaymentSucess();
      setMessage("Payment successful! ");
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <>
      <form id='payment-form' onSubmit={handleSubmit}>
        <AddressElement id='address-element' options={{ mode: "shipping" }} />
        <PaymentElement id='payment-element' />
        <button disabled={isProcessing || !stripe || !elements} id='submit'>
          <span id='button-text'>
            {isProcessing ? "Processing ... " : "Pay now"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id='payment-message'>{message}</div>}
      </form>
      <GlassModal
        show={modal}
        close={showModal}
        titleBG='D.W. Fazhionz'
        title='Payment Successful!'
        content='Please shop with us again.'
      />
    </>
  );
}
