import React, { useState, useEffect, useRef, Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

import {
  auth,
  signOutUser,
  updateCartInDB,
} from "../../utils/firebase/firebase.utils.js";

import { clearCart, toggleCartHidden } from "../../redux/cart/cart.actions.js";
import {
  selectCartHidden,
  selectCartItems,
} from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";

// import HeaderMessage from "../header-message/header-message.component";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";
import AnimatedNav from "../animated-nav/animated-nav.component.jsx";
import GlassModal from "../glass-popup/glass-popup.component.jsx";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  // HeaderTop,
  HeaderContainer,
  Left,
  Right,
  Language,
  SearchContainer,
  Input,
  OptionsContainer,
  OptionLine,
  OptionLink,
  ScrollToTop,
} from "./header.styles.jsx";

import { FaSearch, FaWindowClose } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import { ImArrowUp } from "react-icons/im";
import {
  HamburgerContainer,
  Bars,
} from "../animated-nav/animated-nav.styles.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  
  const controls = useAnimation();
  const location = useLocation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 325, position: "relative" },
    exit: { opacity: 0, height: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  const [show, setShow] = useState(false);
  const [searchUrl, setSearchUrl] = useState("");
  const [inputValue, setInputValue] = useState(null);
  // const [validPath, setValidPath] = useState(false);
  const [modal, setModal] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let currentUser = useSelector(selectCurrentUser);
  const cartHidden = useSelector(selectCartHidden);
  const cartItems = useSelector(selectCartItems);

  window.addEventListener("scroll", () => {
    const scroll = document.querySelector(".scrollTopArrow");
    const header = document.querySelector(".header-container");
    const links = document.querySelectorAll(".nav-link");

    if (window.scrollY > 0) {
      setIsScrolling(true);
      header.style.backgroundColor = "black";
    } else {
      setIsScrolling(false);
      header.classList.remove("shadow");
      header.style.backgroundColor = "transparent";
    }
    scroll.classList.toggle("active", window.scrollY > 0);

    scroll.classList.toggle("animateArrow", window.scrollY === 0);
  });

  const scrollToTop = () => {
    var arrow = document.querySelector(".scrollTopArrow");

    arrow.classList.add("animateArrow");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (e) => {
    // TODO - Refactor this code for full search functionality
    const paths = ["mens", "womens", "hats", "jackets", "sneakers"];
    const path = inputRef.current.value.toLowerCase().trim();

    if (e.keyCode === 13) {
      if (paths.includes(path)) {
        navigate(searchUrl);
      } else {
        navigate("/page-not-found");
      }

      inputRef.current.value = "";
    }
  };

  // TODO - Refactor this code for full search functionality
  // const checkValue = (path) => {
  //   if (inputRef.current.value === path) setValidPath(true);

  //   if (validPath === true) {
  //     navigate(searchUrl);
  //   } else return;
  // };

  const handleChange = (e) => {
    setSearchUrl("/shop/categories/" + e.target.value.toLowerCase());
  };

  const handleSignOut = async () => {
    if (cartItems || cartItems.length) {
      console.log("CART ITEMS TO DB: " + cartItems);
      await updateCartInDB(currentUser, cartItems);
    }

    try {
      if (cartHidden === true) dispatch(toggleCartHidden());
      await signOutUser();
      dispatch(clearCart());
      navigate("/");
    } catch (err) {
      console.log("SIGN OUT ERROR: " + err);
    }
  };

  const openMenu = () => {
    setShow(!show);
  };

  const showModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    return setTimeout(() => {
      // showModal();
    }, 10000);
  }, []);

  useGSAP(() => {
    gsap.from(".header-container", {
      top: "4rem",
      opacity: 0,
      duration: 1,
      delay: 9,
    });
  }, []);

  return (
    <Fragment>
      <ScrollToTop className='scrollTopArrow' onClick={scrollToTop}>
        <ImArrowUp className='arrow' />
      </ScrollToTop>
      <AnimatedNav
        show={show}
        close={openMenu}
        auth={auth}
        currentUser={currentUser}
      />

      <HeaderContainer className='header-container' path={location.pathname}>
        <Left className='header-left'>
          <Language path={location.pathname}>Search</Language>

          <SearchContainer ref={searchRef} className='search'>
            <FaSearch
              className='search-icon'
              size={14}
              onMouseEnter={() => {
                searchRef.current.classList.add("search-open");
                inputRef.current.style.visibility = "visible";
                inputRef.current.value = inputValue;
                inputRef.current.focus();
              }}
              onTouchStart={() => {
                searchRef.current.classList.add("search-open");
                inputRef.current.style.visibility = "visible";
                inputRef.current.value = inputValue;
                inputRef.current.focus();
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
              size={20}
              onClick={() => {
                inputRef.current.value = "";
                inputRef.current.focus();
              }}
            />

            <FaWindowClose
              id='close-icon'
              className='close-icon'
              size={20}
              onClick={() => {
                searchRef.current.classList.remove("search-open");
                setInputValue(inputRef.current.value);
                inputRef.current.value = "";
                inputRef.current.style.visibility = "hidden";
              }}
            />
          </SearchContainer>
        </Left>

        <Right className='header-right'>
          <OptionsContainer id="nav-links" path={location.pathname} scrolling={isScrolling}>
            <OptionLink className='btn-ctr nav-link' to='/'>
              HOME
              <OptionLine />
            </OptionLink>

            <OptionLink className='btn-ctr nav-link' to='/shop'>
              SHOP
              <OptionLine />
            </OptionLink>

            <OptionLink className='btn-ctr nav-link' to='/contact-us'>
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
                  onClick={handleSignOut}
                >
                  SIGN OUT
                  <OptionLine />
                </OptionLink>
              ) : (
                <OptionLink className='btn-ctr' to='/auth'>
                  SIGN IN / SIGN UP
                  <OptionLine />
                </OptionLink>
              )
            }
          </OptionsContainer>

          <CartIcon path={location.pathname} scrolling={isScrolling} />

          {/* Toggle the Shopping Cart Dropdown */}
          <CartDropdown />

          <HamburgerContainer className='hamburger' onClick={openMenu}>
            <IoMenuSharp size={42} />
          </HamburgerContainer>
        </Right>
      </HeaderContainer>

      <Outlet />

      <GlassModal
        show={modal}
        close={showModal}
        titleBG='WEEKLY SPECIAL'
        title='Enjoy 15% Off All Apparel!!!'
        content="Don't forget to join our newsletter for weekly deals."
      />
    </Fragment>
  );
};

export default Header;
