import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import QuickView from "../../components/new-arrivals/quick-view.component";

import { Footer, Header, ProductCard } from "./product.styles";
import { Link } from "react-router-dom";
import { getProductDescriptions } from "../../utils/firebase/firebase.utils";

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
  const [description, setDescription] = useState(null);

  const popup = (i) => {
    i.preventDefault();
    setIndex(item.id);
    setShow(true);
    console.log("index", item.id);
  };

  const close = () => {
    setShow(false);
    setIndex(0);
  };

  useEffect(() => {
    setPopupBtns(document.querySelectorAll(".popup__btn"));

    setQuickViews(document.querySelectorAll(".quick__view"));
  }, []);

  useEffect(() => {
    const getDescription = async () => {
      try {
        // Retrieve the product descriptions from the database
        const productDescriptions = await getProductDescriptions();

        const name = item.name.toLowerCase();

        const matchingDescription = productDescriptions.find((prod) =>
          prod.description.toLowerCase().includes(name)
        );
        if (matchingDescription) {
          setDescription(matchingDescription.description);
        }
      } catch (err) {
        console.log("There was an error fetching the description: " + err);
      }
    };

    getDescription();
  }, [description, item.name]);

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

        {/********** Popup Button **********/}
        <Link to='#' className='popup__btn' onClick={popup}>
          Quick View
        </Link>

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
            category={item.category}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            item={item}
            description={description}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Product;
