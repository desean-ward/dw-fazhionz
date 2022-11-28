import React, { useState, useEffect } from "react";
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

import CustomButton from "../custom-button/custom-button.component";

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
	const [ isOpen, setIsOpen ] = useState(null);
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
	}, [checkCart])

	return (
		<DropdownContainer isOpen={isOpen} hasItems={hasItems}>
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
							dispatch(toggleCartHidden());
						}}
					>
						GO TO CHECKOUT
					</CustomButton>
				</ButtonContainer>
		</DropdownContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
