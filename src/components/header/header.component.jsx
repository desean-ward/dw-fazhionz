import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';



import './header.styles.scss';



/* Destructure the currentUser property */
const Header = ({ currentUser, hidden }) => (
   
    <div className = 'header'> 
        <Link className='logo-container' to="/">
        <img src="https://img.icons8.com/ios-filled/50/000000/jacket.png" alt="Logo" />
        </Link>

        <Link className="title" to="/"><h1>D.W. FAZHIONZ</h1></Link>
        
        <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>

        <Link className='option' to='/shop'>CONTACT</Link>
        
        {
            /* Conditionally renders a 'div' if currentUser is an object,
            or a 'Link' if it's false */
            currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
            </div>
            :
            <Link className='option' to='/sign-in'>SIGN IN</Link>
        }

        <CartIcon />
        </div>

        {
            /* Toggle the Shopping Cart Dropdown */
            hidden ? null :
            <CartDropdown hidden/>
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);