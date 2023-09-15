import React, { useRef, useEffect, useState, useContext } from "react";

import { connect } from "react-redux";
//import { addItem, clearCart } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { db, auth } from "../../utils/firebase/firebase.utils";
import { doc, getDoc } from "firebase/firestore";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { IconContext } from "react-icons";

import {
  Left,
  Center,
  Right,
  HeaderMessageContainer,
} from "./header-message.styles";

const HeaderMessage = (/* { addItem, clearCart } */) => {
  const initialState = "Hello";
  const [name, setName] = useState(initialState);
  const [nameUpdated, setNameUpdated] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { addItemToCart } = useContext(CartContext);

  const getCurrentUser = async () => {
    if (!currentUser) return;

    const { cartItems, displayName } = currentUser;

    // if( cartItems && cartItems.length ) {
    // 	console.log("Got the cart")
    // 	cartItems.forEach((item) => {
    // 		addItemToCart(item)
    // 	})
    // }

    setName(displayName);
  };

  useEffect(() => {
    function updateName() {
      getCurrentUser();
    }

    return updateName();
  }, [currentUser]);

  return (
    <HeaderMessageContainer>
      <IconContext.Provider value={{ color: "" }}>
        <Left>Modern Apparel For Modern Mindz</Left>

        <Center>YOUR 1-STOP FAZHION SHOP!!!</Center>

        <Right>
          {currentUser ? (
            <div>Welcome, {name}!</div>
          ) : (
            <span>Please Sign In Or Sign Up</span>
          )}
        </Right>
      </IconContext.Provider>
    </HeaderMessageContainer>
  );
};

// const mapDispatchToProps = dispatch => ({
// 	addItem: (item) => dispatch(addItem(item)),
// 	clearCart: () => dispatch(clearCart())
// })

// export default connect(null, mapDispatchToProps)(HeaderMessage)

export default HeaderMessage;
