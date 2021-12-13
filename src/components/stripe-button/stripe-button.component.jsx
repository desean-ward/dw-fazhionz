import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';


import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price, cartItems, removeItem }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jl420GpXB6crEodfLGfmxP1CkW5aOjJAeMX3O6yzoiezf1kvNRKYUVyd2LOg3hQt9ZOoIiO09iPiXq6h7NKXvsm00DEEIPHDV';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');

        {
            cartItems.map(cartItem => 
                removeItem(cartItem)
            );
        }
    }

    return (
        <StripeCheckout
            label='Pay Now' 
            name='D.W Fazhionz'
            billingAddress 
            shippingAddress 
            image='https://img.icons8.com/ios-filled/50/000000/jacket.png' 
            description={`Your total is $${price}`} 
            amount={priceForStripe} 
            panelLabel='Pay Now' 
            token={onToken} 
            stripeKey={publishableKey}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: cartItems => dispatch(clearItemFromCart(cartItems)),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);