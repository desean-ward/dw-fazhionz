import React from "react";

import "./custom-button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  buyNow: 'buyNow'
};

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
