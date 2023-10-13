import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { updateCartInDB } from "../../utils/firebase/firebase.utils";

import { motion, AnimatePresence } from "framer-motion";

import {
  Info,
  PopupProduct,
  PopupImage,
  PopupView,
  Description,
  AddSectionLinks,
} from "./product.styles";

import { IoMdClose } from "react-icons/io";

// TODO ---- Implement Wish List ---- //
// import { AiOutlineHeart } from "react-icons/ai";
// import { AiFillHeart } from "react-icons/ai";
// import CartIcon from "../../components/cart-icon/cart-icon.component";
// import { MotionConfig } from "framer-motion";

import { Link } from "react-router-dom";
import { setViewProduct } from "../../redux/shop/shop.actions";
import CustomButton from "../custom-button/custom-button.component";

import * as notify from "../toast/toast.component";

const QuickView = ({
  show,
  close,
  index,
  imageUrl,
  title,
  price,
  category,
  name,
  item,
  description,
}) => {
  const [popupViews, setPopupViews] = useState([]);
  const [popupProducts, setPopupProducts] = useState([]);
  const [closeBtns, setCloseBtns] = useState([]);
  const [isShowing, setIsShowing] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);

  const nowPrice = price - price * 0.15;

  const addToBag = async (e) => {
    e.preventDefault();

    try {
      dispatch(addItem(item));
      await updateCartInDB(currentUser, cartItems);

      notify.itemAdded({
        imgUrl: imageUrl,
        name: item.name,
        text: "has been added to your bag!",
      });
    } catch (error) {
      notify.error({ text: "Error adding item to cart" });
      console.log("Error adding item to cart: " + error);
    }
  };

  function handleClose() {
    setIsShowing(false);
    const fadeIn = document.querySelector(".popup__view");

    // Return close property to parent
    setTimeout(() => {
      fadeIn.classList.remove("show");
      setIsShowing(true);
      index = null;
      close();
    }, 700);
  }

  // Save the selected product to state and navigates to the product page
  const viewProduct = () => {
    dispatch(setViewProduct({ item: item, description: description }));
    navigate(`/shop/categories/${category}/${item.name}`);
  };

  useEffect(() => {
    if (show) {
      const fadeIn = document.querySelector(".popup__view");
      fadeIn.classList.add("show");

      return;
    }
  }, [show]);

  // Get the window with for mobile animation
  const windowWidth = window.innerWidth;

  const variants = {
    hidden: { scale: 0, transition: { delay: 0.4, ease: "easeInOut" } },
    visible: { scale: 1 },
    exit: { scale: 0 },
    exitBeforeEnter: true,
  };

  const closeBtnFade = {
    hidden: { opacity: 0, visibility: "hidden" },
    visible: {
      opacity: 1,
      visibility: "visible",
      transition: { duration: 0.3, delay: 1 },
    },
    exit: { opacity: 0 },
  };

  const slideOut = {
    hidden: {
      width: "0em",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      width: "30em",
      opacity: 1,
      display: "flex",
      transition: { duration: 0.3, delay: 0.4, ease: "easeInOut" },
    },
    exit: { opacity: 0 },
  };

  const slideDown = {
    hidden: {
      // height: 0,
      y: "-50%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      // height: "30em",
      y: "0%",
      opacity: 1,
      transition: { duration: 0.3, delay: 0.4, ease: "easeInOut" },
    },
    exit: { opacity: 0 },
  };

  return ReactDom.createPortal(
    <>
      {show ? (
        <PopupView className='popup__view'>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              variants={variants}
              initial='hidden'
              animate={isShowing ? "visible" : "hidden"}
              exit='exit'
              transition={{ duration: 0.3 }}
            >
              <PopupProduct className='popup__product'>
                {/********** Close Button **********/}
                <motion.div
                  variants={closeBtnFade}
                  initial='hidden'
                  animate={isShowing ? "visible" : "hidden"}
                  exit='exit'
                  transition={{ duration: 0.3 }}
                >
                  <IoMdClose
                    className='close__btn'
                    onClick={() => handleClose()}
                  />
                </motion.div>

                {/********** Product Image **********/}
                <PopupImage className='popup__img'>
                  <img src={imageUrl} alt='' />
                </PopupImage>

                {/********** Product Info **********/}
                <Info
                  className='info'
                  variants={windowWidth < 800 ? slideDown : slideOut}
                  initial='hidden'
                  animate={isShowing ? "visible" : "hidden"}
                >
                  <h3>
                    {name}
                    <br />
                    <span id={title}>{title}</span>
                  </h3>

                  <Description>
                    <p>{description}</p>
                  </Description>

                  <span className='wasPrice'>${price}.00</span>
                  <span className='price'>${nowPrice.toFixed(2)}</span>

                  <AddSectionLinks className='links'>
                    <CustomButton
                      style={{ width: "90%" }}
                      onClick={addToBag}
                      onTouchEnd={addToBag}
                    >
                      ADD TO BAG
                    </CustomButton>
                    <CustomButton
                      style={{ width: "90%" }}
                      onClick={() => viewProduct()}
                      buttonType='inverted'
                    >
                      View Item
                    </CustomButton>
                  </AddSectionLinks>
                </Info>
              </PopupProduct>
            </motion.div>
          </AnimatePresence>
        </PopupView>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};

export default QuickView;
