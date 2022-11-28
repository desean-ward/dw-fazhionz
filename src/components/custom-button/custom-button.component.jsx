import React from 'react';

import './custom-button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

/* Pull the 'children' from passed props, and destructure 'otherProps' */
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button type="button"
    /* Add the class 'google-sign-in' if isGoogleSignIn is true */ 
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        { children }
    </button>
);

export default CustomButton;