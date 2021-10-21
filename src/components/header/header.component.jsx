import React, { useState } from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';



import { HeaderContainer, Left, Right, LogoContainer, TitleContainer, OptionsContainer, OptionLink, HamburgerContainer } from './header.styles';



/* Destructure the currentUser property */
const Header = ({ currentUser, hidden }) => {

    return (
        
        <HeaderContainer> 
        <Left>
            <LogoContainer to="/">
            <img src="https://img.icons8.com/ios-filled/50/000000/jacket.png" alt="Logo" />
            </LogoContainer>

            <TitleContainer to="/">D.W. FAZHIONZ</TitleContainer>
        </Left>
    
        <Right>
            <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>

            <OptionLink to='/contact'>CONTACT</OptionLink>
            
            {
                /* Conditionally renders a 'div' if currentUser is an object,
                or a 'Link' if it's false */
                currentUser ? 
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink to='/sign-in'>SIGN IN</OptionLink>
            }
            
            <CartIcon />

            </OptionsContainer>

            {
                /* Toggle the Shopping Cart Dropdown */
                hidden ? null :
                <CartDropdown hidden/>
            }
        </Right>
                
        </HeaderContainer>
    )
 }

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);