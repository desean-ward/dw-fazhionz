import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import {
	useLocation,
	useNavigate,
	useParams,
  } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";

import CartItem from "../cart-item/cart-item.component";
import { CartContext } from '../../context/cart.context'

import CustomButton from "../custom-button/custom-button.component";

import { useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from "react-intersection-observer";

import { DropdownContainer, CartItems,  EmptyMessage, ButtonContainer } from "./cart-dropdown.styles";

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
	  let location = useLocation();
	  let navigate = useNavigate();
	  let params = useParams();
	  return (
		<Component
		  {...props}
		  router={{ location, navigate, params }}
		/>
	  );
	}
  
	return ComponentWithRouterProp;
  }
  

const CartDropdown = ({ cartItems, dispatch }) => {
	const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        } else {
            controls.start("exit");
        }
    }, [controls, inView]);

	const [ isOpen, setIsOpen ] = useState(null);
	const { isCartOpen, setIsCartOpen } = useContext(CartContext)
	const [ hasItems, setHasItems ] = useState(false);
	const navigate = useNavigate()

	const checkOpen = () => {
		setIsOpen(true);
	}
	
	const checkCart = () => {
		return cartItems.length 
		? setHasItems(true) 
		: setHasItems(false)
	}

	useEffect(() => {
		checkOpen();
		checkCart();
	}, [checkOpen])

	const variants = {
		hidden: { opacity: 0, height: 0 },
		visible: { opacity: 1, height: 325 },
		exit: { opacity: 0, height: 0 },
		exitBeforeEnter: true
	}
 
	return (
		<AnimatePresence exitBeforeEnter>
			<DropdownContainer 
				ref={ref}
				isOpen={isOpen} 
				hasItems={hasItems}
				variants={variants}
				initial='hidden'
				animate='visible'
				exit='exit'
				transition={{ duration: 0.3 }}
			>
					<CartItems>
						{cartItems.length && hasItems ? (
							cartItems.map((cartItem) => (
								<CartItem 
									key={cartItem.id}
									item={cartItem}
									className="cart-item"
								/>
							))
						) : (
							<EmptyMessage>
								Your bag is empty
							</EmptyMessage>
						)}
							
						
					</CartItems>
					
					<ButtonContainer isOpen={isOpen} hasItems={hasItems} >
						<CustomButton
							id="dropdown-button"
							onClick={() => {
								navigate("/checkout");
								setIsCartOpen(!isCartOpen);
								dispatch(toggleCartHidden());
							}}
						>
							GO TO CHECKOUT
						</CustomButton>
					</ButtonContainer>
			</DropdownContainer>
		</AnimatePresence>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
