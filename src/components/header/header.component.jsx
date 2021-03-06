import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { useHistory } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils.js'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import HeaderMessage from '../header-message/header-message.component'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import AnimatedNav from '../animated-nav/animated-nav.component'
import GlassModal from '../glass-popup/glass-popup.component'

import {
	HeaderTop,
	HeaderContainer,
	Left,
	Right,
	Language,
	SearchContainer,
	Input,
	LogoContainer,
	TitleContainer,
	OptionsContainer,
	OptionLine,
	OptionLink,
	ScrollToTop,
} from './header.styles'

import { FaSearch, FaWindowClose } from 'react-icons/fa'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { ImArrowUp } from 'react-icons/im'
import {
	HamburgerContainer,
	Bars,
} from '../animated-nav/animated-nav.styles.jsx'

const Header = ({ currentUser, hidden }) => {
	const [show, setShow] = useState(false)
	const [searchUrl, setSearchUrl] = useState('')
	const [inputValue, setInputValue] = useState(null)
	const [validPath, setValidPath] = useState(false)
	const [modal, setModal] = useState(false)
	const searchRef = useRef(null)
	const inputRef = useRef(null)
	const mobileNavRef = useRef(null)
	const close = document.querySelector('.close-icon')
	const del = document.querySelector('.delete-icon')
	const history = useHistory()

	window.addEventListener('scroll', () => {
		var scroll = document.querySelector('.scrollTopArrow')

		var header = document.querySelector('.header-container')

		if (window.scrollY > 0) {
			header.classList.add('shadow')
		}
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
			const paths = ['mens', 'womens', 'hats', 'jackets', 'sneakers']
			const path = inputRef.current.value.trim()

			if (paths.includes(path)) {
				history.push(searchUrl)
			} else {
				history.push('/page-not-found')
			}

			inputRef.current.value = ''
		}
	}

	const checkValue = (path) => {
		if (inputRef.current.value == path) setValidPath(true)

		if (validPath === true) {
			history.push(searchUrl)
			inputRef.current.value = ''
		} else history.push('/page-not-found')
	}

	const handleChange = (e) => {
		setSearchUrl('/shop/' + e.target.value)
	}

	const openMenu = () => {
		setShow(!show)
	}

	const showModal = () => {
		setModal(!modal)
	}

	useEffect(() => {
		setTimeout(() => {
			showModal()
		}, 5000)
	}, [])

	return (
		<>
			<ScrollToTop className='scrollTopArrow' onClick={scrollToTop}>
				<ImArrowUp className='arrow' />
			</ScrollToTop>
			<AnimatedNav
				show={show}
				close={openMenu}
				auth={auth}
				currentUser={currentUser}
			/>
			<HeaderTop>
				<HeaderMessage id='message' currentUser={currentUser} />
			</HeaderTop>

			<HeaderContainer className='header-container shadow'>
				<Left className='header-left'>
					<Language className='language'>Search</Language>

					<SearchContainer ref={searchRef} className='search'>
						<FaSearch
							className='search-icon'
							onMouseEnter={() => {
								searchRef.current.classList.add('search-open')
								inputRef.current.style.visibility = 'visible'
								inputRef.current.value = inputValue
								inputRef.current.focus()
							}}
							onTouchStart={() => {
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
							onChange={handleChange}
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

				<Right className='header-right'>
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
							currentUser ? (
								<OptionLink
									as='div'
									className='btn-ctr'
									onClick={() => auth.signOut()}>
									SIGN OUT
									<OptionLine />
								</OptionLink>
							) : (
								<OptionLink className='btn-ctr' to='/sign-in'>
									SIGN IN / SIGN UP
									<OptionLine />
								</OptionLink>
							)
						}

						<CartIcon />
					</OptionsContainer>

					{
						/* Toggle the Shopping Cart Dropdown */
						hidden ? null : <CartDropdown hidden />
					}

					<HamburgerContainer
						className='hamburger'
						onClick={openMenu}>
						<Bars className='bars' />
					</HamburgerContainer>
				</Right>
			</HeaderContainer>

			<GlassModal
				show={modal}
				close={showModal}
				titleBG='WEEKLY SPECIAL'
				title='Enjoy 15% Off All Apparel!!!'
				content="Don't forget to join our newsletter for weekly deals."
			/>
		</>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
