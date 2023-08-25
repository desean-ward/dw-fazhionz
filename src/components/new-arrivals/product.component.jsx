import React, { useEffect, useState, useRef } from "react";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { motion, AnimatePresence } from "framer-motion";

import QuickView from "../../components/new-arrivals/quick-view.component";

import {
  Container,
  Footer,
  Header,
  Info,
  PopupProduct,
  PopupImage,
  PopupView,
  ProductCard,
  Description,
  AddSectionLinks,
} from "./product.styles";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

//import NEW_ARRIVALS from './new-arrivals.data.js'

const Product = ({
  imageUrl,
  name,
  price,
  category,
  addItem,
  item,
  dispatch,
}) => {
  const [show, setShow] = useState(false);
  const [popupBtns, setPopupBtns] = useState([]);
  const [index, setIndex] = useState(0);
  const [quickView, setQuickViews] = useState([]);

  let currentIndex = null;

  const popup = (i) => {
    i.preventDefault();
    setIndex(i);
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  useEffect(() => {
    setPopupBtns(document.querySelectorAll(".popup__btn"));

    setQuickViews(document.querySelectorAll(".quick__view"));
  }, []);

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
    exitBeforeEnter: true,
  };

  return (
    <>
      {/**********  Card  **********/}
      <ProductCard className='product__card'>
        {/********** Header  **********/}
        <Header>
          <h3>New Arrival</h3>
        </Header>

        {/********** Product Name *********
				<h3 className='name'>{ name }</h3>*/}

        {/********** Product Image **********/}
        <img src={item.imageUrl} alt='Product' className='product-img' />

        {/********** Product Price *********
				<span className='price'>${ price }</span>*/}

        {/********** Popup Button **********/}
        <a href='#' className='popup__btn' onClick={popup}>
          Quick View
        </a>

        {/********** Footer  **********/}
        <Footer>
          <h3>Get 15% Off</h3>
        </Footer>
      </ProductCard>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          transition={{ duration: 0.3 }}
        >
          <QuickView
            index={index}
            className='quick__view'
            show={show}
            close={close}
            //category={item.category}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            item={item}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Product;
