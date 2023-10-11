import React, { useRef, useEffect, useState } from "react";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { gsap } from "gsap";

import {
  MobileNavLink,
  Menu,
  Navigation,
  Wrapper,
} from "./animated-nav.styles";

const AnimatedNav = ({ show, close, cartItems, auth, currentUser }) => {
  const [hasItems, setHasItems] = useState(false);

  const wrapperRef = useRef(null);
  const navRef = useRef(null);
  const closeRef = useRef(null);
  const titleRef = useRef(null);

  const t1 = gsap.timeline({ defaults: { duration: 0.4, ease: "expo.inOut" } });

  useEffect(() => {
    if (show) openMenu();
  }, [show]);

  const openMenu = () => {
    try {
      if (t1.reversed()) {
        t1.play();
      } else {
        t1.to(wrapperRef.current, { visibility: "visible", zIndex: 200 })
          .to(".nav", { left: 0 })
          .to(".nav", { height: "100vh" }, "-=.1")
          .to(
            ".link",
            {
              opacity: 1,
              PointerEvents: "all",
              stagger: {
                each: 0.1,
              },
            },
            "-=.3"
          )
          .to(
            closeRef.current,
            { zIndex: 1, opacity: 1, PointerEvents: "all" },
            "-=.8"
          )
          .to(titleRef.current, { opacity: 1 }, "-=1");
      }
    } catch (err) {
      console.log("ERROR: " + err);
    }
  };

  const closeMenu = () => {
    if (auth) auth.signOut();
    t1.reverse();
    close();
  };

  const checkCart = () => {
    return cartItems.length ? setHasItems(true) : setHasItems(false);
  };

  useEffect(() => {
    checkCart();
  }, [checkCart]);

  return (
    <Wrapper ref={wrapperRef} className='wrapper'>
      <Navigation ref={navRef} className='nav'>
        <div ref={closeRef} className='close' onClick={closeMenu}></div>
        <h2 ref={titleRef}>D.W. Fazhionz</h2>
        <Menu className='menu'>
          <li className='item'>
            <MobileNavLink className='link' to='/' onClick={closeMenu}>
              Home
            </MobileNavLink>
          </li>
          <li className='item'>
            <MobileNavLink className='link' to='/shop' onClick={closeMenu}>
              Shop
            </MobileNavLink>
          </li>
          <li className='item'>
            <MobileNavLink className='link' to='contact-us' onClick={closeMenu}>
              Contact Us
            </MobileNavLink>
          </li>
          <li className='item'>
            {currentUser ? (
              <MobileNavLink className='link' to='auth' onClick={closeMenu}>
                Sign Out
              </MobileNavLink>
            ) : (
              <MobileNavLink className='link' to='auth' onClick={closeMenu}>
                Sign In/Sign Up
              </MobileNavLink>
            )}
          </li>
        </Menu>

        <img className='nav' src='../../images/mobile-nav-bg.jpg' alt='' />
      </Navigation>
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(AnimatedNav);
