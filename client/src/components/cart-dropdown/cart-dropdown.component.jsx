import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  selectCartItems,
  selectCartTotal,
  selectCartHidden,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";

import CustomButton from "../custom-button/custom-button.component";

import { useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  DropdownContainer,
  CartItems,
  EmptyMessage,
  ButtonContainer,
  Total,
} from "./cart-dropdown.styles";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const CartDropdown = ({ open }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const isOpen = useSelector(selectCartHidden);
  const [hasItems, setHasItems] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const discounted = (cartTotal - cartTotal * 0.15).toFixed(2);


  const checkCart = () => {
    return cartItems.length ? setHasItems(true) : setHasItems(false);
  };

  useEffect(() => {
    checkCart();
  }, [isOpen]);

  const variants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
    visible: { opacity: 1, height: 450, transition: { duration: 0.5 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.5 } },
  };

  const showButton = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.6 } },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <DropdownContainer
        ref={ref}
        isOpen={isOpen}
        hasItems={hasItems}
        variants={variants}
        initial='hidden'
        animate={isOpen ? "visible" : "hidden"}
        // transition={{ duration: 0.3 }}
      >
        <CartItems>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                item={cartItem}
                className='cart-item'
              />
            ))
          ) : (
            <EmptyMessage>Your bag is empty</EmptyMessage>
          )}
        </CartItems>
        <hr />
        <Total hasItems={hasItems}>
          <span className='total'>Total: ${discounted}</span>
        </Total>

        <ButtonContainer
          isOpen={isOpen}
          hasItems={hasItems}
          variants={showButton}
          initial='hidden'
          animate={isOpen ? "visible" : "hidden"}
        >
          <CustomButton
            id='dropdown-button'
            onClick={() => {
              navigate("/checkout");
              // setIsCartOpen(!isCartOpen);
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

export default withRouter(CartDropdown);
