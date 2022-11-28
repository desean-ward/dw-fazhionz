import React, { useContext } from 'react'

import Home from './routes/home/homepage.component'
import Shop from './routes/shop/shop.component.jsx'
import ContactUs from './routes/contact/contact.component'
import Authentication from './routes/authentication/authentication.component'
import Checkout from './routes/checkout/checkout.component'

import Header from './components/header/header.component.jsx'
import Footer from './components/footer/footer.component.jsx'

import './App.css'
import './routes/home/homepage.styles.scss'

import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth, createUserProfileDocument } from './utils/firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

import { AnimatePresence } from 'framer-motion/dist/es/index'

import ScrollToTop from './ScrollToTop.js'
import PageNotFound from './components/page-not-found/page-not-found.component'

class App extends React.Component {
	/* Setup unsubscribe method */
	unsubscribeFromAuth = null

	componentDidMount() {
		const { setCurrentUser } = this.props

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					})
				})
			}

			setCurrentUser(userAuth)
		})
	}

	/* Close the subscription to prevent memory leaks */
	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
		return (
			<div>
				<ScrollToTop />
				<Header />
				<AnimatePresence exitBeforeEnter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/shop' element={<Shop />} />
						<Route path='/contact-us' element={<ContactUs />} />
						<Route
							exact
							path='/checkout'
							element={<Checkout />}
						/>
						<Route
						path='/auth'
						element={<Authentication />}
						/> 
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</AnimatePresence>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
