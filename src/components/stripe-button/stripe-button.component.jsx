import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';
import { updateCartInDB } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/user.context';

import GlassModal from '../../components/glass-popup/glass-popup.component'


import StripeCheckout from 'react-stripe-checkout';
import { getCurrentUrl } from 'swup/lib/helpers';
import { setCurrentUser } from '../../redux/user/user.actions';

const StripeCheckoutButton = ({ price, total }) => {
    const [ modal, setModal ] = useState(false)
    const { cartItems, setCartItems } = useContext(CartContext)
    const { currentUser } = useContext(UserContext)

    const priceForStripe = price;
    const newPrice = priceForStripe - (priceForStripe * .15)
    const publishableKey = 'pk_test_51Jl420GpXB6crEodfLGfmxP1CkW5aOjJAeMX3O6yzoiezf1kvNRKYUVyd2LOg3hQt9ZOoIiO09iPiXq6h7NKXvsm00DEEIPHDV';

    const onToken = token => {
        showModal()
        
            // cartItems.map(cartItem => 
            //     removeItem(cartItem)
            // );
            setCartItems([])
            updateCartInDB(currentUser, cartItems)
    }

    const showModal = () => {
		setModal(!modal)

		//if (modal) setIsSubmit(false)
	}

    return (
        <>
            <StripeCheckout
                label='Pay Now' 
                name='D.W Fazhionz'
                billingAddress 
                shippingAddress 
                image='https://img.icons8.com/ios-filled/50/000000/jacket.png' 
                description={`Your total is $${price.toFixed(2)}`} 
                amount={total} 
                panelLabel='Pay Now' 
                token={onToken} 
                stripeKey={publishableKey}
            />

            <GlassModal
                    show={modal}
                    close={showModal}
                    titleBG='D.W. Fazhionz'
                    title="Payment Successful!"
                    content='Please shop with us again.'
            />
        </>
    )
}

// const mapDispatchToProps = dispatch => ({
//     removeItem: cartItems => dispatch(clearItemFromCart(cartItems)),
// });

// export default connect(null, mapDispatchToProps)(StripeCheckoutButton);

export default StripeCheckoutButton