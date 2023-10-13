import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header/header.component.jsx";
import Footer from "./components/footer/footer.component.jsx";

import { Routes, Route, Navigate } from "react-router-dom";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCartItems,
  getCurrentUser,
} from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCartHidden, selectCartItems } from "./redux/cart/cart.selectors";

import { AnimatePresence } from "framer-motion/dist/es/index";

import ScrollToTop from "./ScrollToTop.js";
import PageNotFound from "./components/page-not-found/page-not-found.component";

import { PropagateLoader } from "react-spinners";

import "./App.css";
import Product from "./routes/product/product.component";
import {
  addItem,
  toggleCartHidden,
  updateItem,
} from "./redux/cart/cart.actions";

const Home = lazy(() => import("./routes/home/homepage.component"));
const Shop = lazy(() => import("./routes/shop/shop.component.jsx"));
const ContactUs = lazy(() => import("./routes/contact/contact.component"));
const Authentication = lazy(() =>
  import("./routes/authentication/authentication.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));

const App = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartHidden = useSelector(selectCartHidden);

  useEffect(() => {
    /**
     * Listen for changes in user authentication state and perform necessary actions.
     * @param {firebase.User} user - The authenticated user object.
     * @returns {unsubscribe} - Function to unsubscribe from the listener.
     */
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }

      if (user && user.uid) {
        const theUser = await getCurrentUser(user.uid);
        dispatch(setCurrentUser(theUser));
      } else dispatch(setCurrentUser(null));


      // Retrieve user cart items from database
      const userItems = await getCartItems(user);

      // If userItems exist, check if they are already in the cart
      userItems
        ? typeof cartItems !== "undefined" && cartItems.length
          ? userItems.forEach((item) => {
              !cartItems.find((cartItem) => cartItem.id === item.id)
                ? dispatch(addItem(item))
                : dispatch(updateItem(item));
            })
            // If cart is empty, add all userItems to cart
          : userItems.forEach((item) => {
              dispatch(addItem(item));
              console.log("ITEM", item);
            })
        : console.log("NO USER ITEMS");
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    if (cartHidden === true) dispatch(toggleCartHidden());
  }, [dispatch]);

  return (
    <div>
      <ScrollToTop />

      <AnimatePresence exitBeforeEnter>
        <Suspense
          fallback={
            <div className='fallback'>
              <h3>Loading</h3> <br />
              <PropagateLoader
                className='fallback'
                color='black'
                loading={true}
                size={15}
              />
            </div>
          }
        >
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<Home />} />
              <Route
                path='/shop'
                element={<Navigate replace to='/shop/categories' />}
              />
              <Route path='/shop/categories/*' element={<Shop />} />
              <Route
                path='/shop/categories/:category/:id'
                element={<Product />}
              />
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
  );
};

export default App;
