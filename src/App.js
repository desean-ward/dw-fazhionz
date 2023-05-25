import React, { useContext, useEffect, lazy, Suspense } from 'react'

import Categories from './components/categories/categories.component'
import Category from './routes/category/category.component'

import Header from './components/header/header.component.jsx'
import Footer from './components/footer/footer.component.jsx'

import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
	db,
	auth,
	createUserDocumentFromAuth,
	updateCart
} from './utils/firebase/firebase.utils'
import { doc, getDoc } from 'firebase/firestore'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

import { UserContext } from './context/user.context'
import { CartContext } from './context/cart.context'

import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion/dist/es/index'

import ScrollToTop from './ScrollToTop.js'
import PageNotFound from './components/page-not-found/page-not-found.component'

import './App.css'

import { CategoriesContainer } from './components/categories/categories.styles'

const Home = lazy(() => import('./routes/home/homepage.component'))
const Shop = lazy(() => import('./routes/shop/shop.component.jsx'))
const ContactUs = lazy(() => import('./routes/contact/contact.component'))
const Authentication = lazy(() => import('./routes/authentication/authentication.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))

const App = ( ) => {
	const { currentUser, setCurrentUser } = useContext(UserContext)
	const { cartItems, setCartItems } = useContext(CartContext)

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
				<AnimatePresence exitBeforeEnter>
					<Suspense fallback={ <h3 className='fallback'>Loading...</h3>}>
						<Routes>
							<Route path='/' element={<Header />}>
								<Route index element={<Home />} />
								<Route
									path='/shop'
									element={<Navigate replace to='/shop/categories' />}
								/>
								<Route path='/shop/categories/*' element={<Shop />} />
								<Route path='/contact-us' element={<ContactUs />} />
								<Route exact path='/checkout' element={<Checkout />} />
								<Route path='/auth' element={<Authentication />} />
								<Route path='*' element={<PageNotFound />} />
							</Route>
						</Routes>
					</Suspense>
				</AnimatePresence>
			<Footer />
		</div>
	)
}

// const mapStateToProps = createStructuredSelector({
// 	currentUser: selectCurrentUser,
// })

// const mapDispatchToProps = (dispatch) => ({
// 	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// })

export default App
