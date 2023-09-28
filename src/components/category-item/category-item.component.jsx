import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectDescriptions } from "../../redux/shop/shop.selectors";

import CustomButton from "../custom-button/custom-button.component";

// import { addItem } from "../../redux/cart/cart.actions";

//* ---- Keep commented out / For AI Descriptions ---- *//
// import { productDescription } from '../../utils/openai/openai.utils'
//import { addProductDescriptions } from '../../utils/firebase/firebase.utils'

import QuickView from "../../components/new-arrivals/quick-view.component";

import {
  CategoryItemContainer,
  ImageContainer,
  Image,
  ButtonContainer,
  FooterContainer,
} from "./category-item.styles";
// import { getCartItems } from "../../utils/firebase/firebase.utils";

// import { motion, AnimatePresence } from "framer-motion";

//**** The individual item/product for each category ****//
const CategoryItem = ({ title, item, id }) => {
  /********** VARIABLES **********/
  const { name, price, imageUrl } = item;
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [popupBtns, setPopupBtns] = useState([]);
  const [quickView, setQuickViews] = useState([]);
  const [products, setProducts] = useState([]);
  const [description, setDescription] = useState(
    "Product Description Coming Soon..."
  );
  const productDescriptions = useSelector(selectDescriptions);

  // Retrieve the product descriptions from the database
  // const productDescriptions = useSelector(selectDescriptions);
  // console.log("THE DESCS:", productDescriptions);

  const imgContainerRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);

  /********** FUNCTIONS **********/
  const renderCard = () => {
    imgContainerRef.current.classList.remove("loading");
    imgRef.current.style.visibility = "visible";
    btnRef.current.style.visibility = "visible";
    nameRef.current.classList.remove("loading");
    priceRef.current.classList.remove("loading");
  };

  const popup = (i) => {
    setIndex(i);
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  useEffect(() => {
    const startRenderCard = () => {
      setIsLoading(true);

      if (!item) {
        return;
      }
      setIsLoading(false);
      renderCard();
    };

    startRenderCard();
  }, [isLoading]);

  useEffect(() => {
    setPopupBtns(document.querySelectorAll(".popup__btn"));

    setQuickViews(document.querySelectorAll(".quick__view"));
  }, []);

  useEffect(() => {
    // Load the product descriptions
    const getDescription = () => {
      if (productDescriptions) {
        try {
          const name = item.name.toLowerCase();

          const matchingDescription = productDescriptions.find((prod) =>
            prod.description.toLowerCase().includes(name)
          );
          if (matchingDescription) {
            setDescription(matchingDescription.description);
          }
        } catch (err) {
          if (!err.message.includes("undefined"))
            console.log("There was an error fetching the description: " + err);
        }
      }
    };

    getDescription();
  }, []);

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
    exitBeforeEnter: true,
  };

  return (
    /********** CATEGORY ITEM  **********/
    <CategoryItemContainer>
      {/********** IMAGE **********/}
      <ImageContainer ref={imgContainerRef} className='loading img-container'>
        <Image ref={imgRef} className='image' />
        <img src={imageUrl} className='image' alt='Image' />
      </ImageContainer>
      {/***************************/}

      {/********** FOOTER **********/}
      <FooterContainer>
        <span ref={nameRef} className='name loading'>
          {name}
        </span>
        <span ref={priceRef} className='price loading'>
          Price: ${price}
        </span>
      </FooterContainer>
      {/**************************/}

      {/*********** BUTTON **********/}
      <ButtonContainer ref={btnRef} className='popup__btn btn-container'>
        <CustomButton onClick={popup} inverted={true.toString()}>
          Quick View
        </CustomButton>
      </ButtonContainer>
      {/*************************/}

      {/*********** POP-UP QUICK VIEW ************/}
      <QuickView
        index={index}
        className='quick__view'
        show={show}
        close={close}
        item={item}
        title={title}
        price={item.price}
        imageUrl={item.imageUrl}
        name={item.name}
        id={item.id}
        description={description}
      />
      {/*****************************************/}
    </CategoryItemContainer>
  );
};

// const mapDispatchToProps = (dispatch) => ({
// 	addItem: (item) => dispatch(addItem(item)),
// })

// export default connect(null, mapDispatchToProps)(CategoryItem)

export default CategoryItem;
