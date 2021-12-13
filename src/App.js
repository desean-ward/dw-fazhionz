import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import ContactPage from "./pages/contact/contact.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component";

import HeaderMessage from "./components/header-message/header-message.component";
import Header from "./components/header/header.component.jsx";
import Footer from "./components/footer/footer.component.jsx";

import './App.css';
//import GlobalStyle from "./global.styles";
import "./pages/homepage/homepage.styles.scss";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import ScrollToTop from "./ScrollToTop.js";

class App extends React.Component {
  /* Setup unsubscribe method */
  unsubscribeFromAuth = null;

  /* #Whenever a user logs in with Goggle, or email and password, we want to store it in App.js to pass it to the components*/
  /* User will remain logged in, until signed out */
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  /* Close the subscription to prevent memory leaks */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* Place the Header outside of the Switch
            Adds currentUser property to the header to determine 
            if a user is signed in or out (an object or null) */}

        <ScrollToTop />
        <HeaderMessage />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
