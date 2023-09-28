import React, { useRef, useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";

// import { connect } from "react-redux";
//import { addItem, clearCart } from '../../redux/cart/cart.actions';
// import { createStructuredSelector } from "reselect";

import {
  db,
  onAuthStateChangedListener,
} from "../../utils/firebase/firebase.utils";
import { doc, getDoc } from "firebase/firestore";

// import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { IconContext } from "react-icons";

import {
  Left,
  Center,
  Right,
  HeaderMessageContainer,
} from "./header-message.styles";

const HeaderMessage = (/* { addItem, clearCart } */) => {
  const initialState = "Customer";
  const [name, setName] = useState(initialState);
  const [nameUpdated, setNameUpdated] = useState(false);
  const { addItemToCart } = useContext(CartContext);

  const loggedIn = useSelector(selectCurrentUser);
  

  return (
    <HeaderMessageContainer>
      <IconContext.Provider value={{ color: "" }}>
        <Left>Modern Apparel For Modern Mindz</Left>

        <Center>YOUR 1-STOP FAZHION SHOP!!!</Center>

        <Right>
          {loggedIn ? (
            <div>Welcome, {loggedIn.displayName || 'Customer'}!</div>
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
