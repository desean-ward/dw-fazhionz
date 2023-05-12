import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import AnimatedPage from '../../components/animated-page/animated-page.component'

import { CheckoutPageContainer, CheckoutHeaderContainer, CartItemsContainer, TotalContainer, CheckoutMessageContainer, ButtonContainer } from './checkout.styles';

const Checkout = ({ cartItems, total }) => {
    const newTotal = total - (total * .15)
    const formattedTotal = newTotal.toFixed(2)

    return (
        <AnimatedPage>
            <CheckoutPageContainer className='checkout-page'>
                <CheckoutHeaderContainer className="checkout-header maroon">
                    <div className="header-block">
                        <span>Product</span>
                    </div>

                    <div className="header-block description">
                        <span>Description</span>
                    </div>

                    <div className="header-block">
                        <span>Quantity</span>
                    </div>

                    <div className="header-block">
                        <span>Subtotal</span>
                    </div>

                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </CheckoutHeaderContainer>

                    <CartItemsContainer className="cart-items">
                        {
                        
                            cartItems.map(cartItem => (
                                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                            ))
                        
                        }
                    </CartItemsContainer>

                <TotalContainer className="total">
                    <span><h3>TOTAL: ${formattedTotal}</h3></span>
                </TotalContainer>

                <CheckoutMessageContainer className="checkoutMessage maroon">
                    <p>
                    **  Please use the following test card information for payment!  **
                        <br /><br />
                        4242 4242 4242 4242<br />
                        Exp: 12/26<br />
                        CVV: 123
                    </p>
                </CheckoutMessageContainer>
                <ButtonContainer className="button">
                    {
                        total > 0
                        ? (<StripeCheckoutButton price={total} cartItems={cartItems} total={total} />) 
                        : ( null )
                    }
                </ButtonContainer>
            </CheckoutPageContainer>
        </AnimatedPage>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);