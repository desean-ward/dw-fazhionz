import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import HeaderMessage from '../header-message/header-message.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderTop, HeaderContainer, Left, Right, Language,
	SearchContainer,
	Input, LogoContainer, TitleContainer, OptionsContainer, OptionLine, OptionLink, HamburgerContainer, ScrollToTop } from './header.styles';

import { FaSearch, FaWindowClose } from 'react-icons/fa'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { ImArrowUp } from 'react-icons/im'


/* Destructure the currentUser property */
const Header = ({ currentUser, hidden }) => {
    const [inputValue, setInputValue] = useState(null)
	const searchRef = useRef(null)
    const inputRef = useRef(null)
	const close = document.querySelector('.close-icon')
	const del = document.querySelector('.delete-icon')

    window.addEventListener('scroll', () => {
		var scroll = document.querySelector('.scrollTopArrow')

		scroll.classList.toggle('active', window.scrollY > 0)

		 scroll.classList.toggle('animateArrow', window.scrollY == 0)
	})

	const scrollToTop = () => {
		var arrow = document.querySelector('.scrollTopArrow')

		 arrow.classList.add('animateArrow')

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
    
    const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			inputRef.current.value = ''
		}
	}

    return (
        <>
            <ScrollToTop className='scrollTopArrow'    onClick={scrollToTop}>
                <ImArrowUp className='arrow' />
			</ScrollToTop>
            <HeaderTop>
                <HeaderMessage id="message" currentUser={currentUser} /> 
            </HeaderTop>

        <HeaderContainer>
        <Left>
        <Language>Search Products</Language>

        <SearchContainer ref={searchRef} className='search'>
            <FaSearch
                className='search-icon'
                onMouseEnter={() => {
                    searchRef.current.classList.add('search-open')
                    inputRef.current.style.visibility = 'visible'
                    inputRef.current.value = inputValue
                    inputRef.current.focus()
                }}
            />

            <Input
                ref={inputRef}
                type='text'
                className='search-input'
                placeholder="Ex: 'mens', 'sneakers'..."
                onKeyDown={handleKeyDown}
            />

            <RiDeleteBack2Line
                className='delete-icon'
                onClick={() => {
                    inputRef.current.value = ''
                    inputRef.current.focus()
                }}
            />

            <FaWindowClose
                id='close-icon'
                className='close-icon'
                onClick={() => {
                    searchRef.current.classList.remove(
                        'search-open'
                    )
                    setInputValue(inputRef.current.value)
                    inputRef.current.value = ''
                    inputRef.current.style.visibility = 'hidden'
                }}
            />
        </SearchContainer>

           {/* <TitleContainer to="/">DWF</TitleContainer> */}
        </Left>
    
        <Right>
            <OptionsContainer>
                <OptionLink className='btn-ctr' to='/'>
                    HOME
                    <OptionLine />
                </OptionLink>

                <OptionLink className='btn-ctr' to='/shop'>
                    SHOP
                    <OptionLine />
                </OptionLink>
            
                <OptionLink className='btn-ctr' to='/contact'>
                    CONTACT
                    <OptionLine />
                </OptionLink>
            
            {
                /* Conditionally renders a 'div' if currentUser is an object,
                or a 'Link' if it's false */
                currentUser ? 
                <OptionLink as='div' className='btn-ctr' onClick={ () => auth.signOut() }>
                    SIGN OUT
                    <OptionLine />
                </OptionLink>
                :
                <OptionLink className='btn-ctr' to='/sign-in'>
                    SIGN IN / SIGN UP
                    <OptionLine />
                </OptionLink>
            }

                <CartIcon />
            </OptionsContainer>

            {
                /* Toggle the Shopping Cart Dropdown */
                hidden ? null :
                <CartDropdown hidden />
            }
        </Right>
        </HeaderContainer>
        </>
    )
 }

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);