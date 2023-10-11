import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { IconContext } from "react-icons";

import {
  Left,
  Center,
  Right,
  HeaderMessageContainer,
} from "./header-message.styles";

const HeaderMessage = () => {
  const loggedIn = useSelector(selectCurrentUser);
  const [user, setUser] = useState(null);


  useEffect(() => {
    !loggedIn && setUser(null);
    loggedIn && loggedIn.uid && !user && setUser(loggedIn.displayName);
  }, [loggedIn]);

  return (
    <HeaderMessageContainer>
      <IconContext.Provider value={{ color: "" }}>
        <Left>Modern Apparel For Modern Mindz</Left>

        <Center>YOUR 1-STOP FAZHION SHOP!!!</Center>

        <Right>
          {user ? (
            <div>Welcome, {user || "Customer"}!</div>
          ) : (
            <span>Please Sign In Or Sign Up</span>
          )}
        </Right>
      </IconContext.Provider>
    </HeaderMessageContainer>
  );
};

export default HeaderMessage;
