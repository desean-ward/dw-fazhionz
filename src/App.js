import React, { useContext, useEffect } from 'react'

import Home from './routes/home/homepage.component'
import Shop from './routes/shop/shop.component.jsx'
import ContactUs from './routes/contact/contact.component'
import Authentication from './routes/authentication/authentication.component'
import Checkout from './routes/checkout/checkout.component'

import Categories from './components/categories/categories.component'
import Category from './routes/category/category.component'

import Header from './components/header/header.component.jsx'
import Footer from './components/footer/footer.component.jsx'

import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
	db,
	auth,
	createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils'
import { doc, getDoc } from 'firebase/firestore'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

import { UserContext } from './context/user.context'

import { AnimatePresence } from 'framer-motion/dist/es/index'

import ScrollToTop from './ScrollToTop.js'
import PageNotFound from './components/page-not-found/page-not-found.component'

import './App.css'

import { CategoriesContainer } from './components/categories/categories.styles'

const App = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext)

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(
			async (userAuth) => {
				if (userAuth) {
					const userRef = await createUserDocumentFromAuth(userAuth)

				const docRef = doc(db, 'users', userAuth.uid)

				await getDoc(docRef).then((doc) => {
					setCurrentUser(doc.data())
				})

					/* userRef.onSnapshot((snapShot) => {
						setCurrentUser({
							currentUser: {
								id: snapShot.id,
								...snapShot.data(),
							},
						})
					}) */
					/* alert('GOT EM!!!!: ' + JSON.stringify(userAuth.uid)) */
				}


				//setCurrentUser(userAuth)
			}
		)
		

		return unsubscribeFromAuth
	}, [])

	return (
		<div>
			<ScrollToTop />
			<Header />
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/shop'
						element={<Navigate replace to='/shop/categories' />}
					/>
					<Route path='/shop/categories/*' element={<Shop />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route exact path='/checkout' element={<Checkout />} />
					<Route path='/auth' element={<Authentication />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default App
