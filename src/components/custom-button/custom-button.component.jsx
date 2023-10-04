import React from "react";

import "./custom-button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  buyNow: 'buyNow'
};

// /* Pull the 'children' from passed props, and destructure 'otherProps' */
// const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
//     <button type="button"
//     /* Add the class 'google-sign-in' if isGoogleSignIn is true */
//     className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
//         { children }
//     </button>
// );

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
