import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import {
  selectDescriptions,
} from "../../redux/shop/shop.selectors";

import { setViewProduct } from "../../redux/shop/shop.actions";

import CustomButton from "../custom-button/custom-button.component";

import {
  CategoryItemContainer,
  ImageContainer,
  Image,
  ButtonContainer,
  FooterContainer,
} from "./category-item.styles";



//**** The individual item/product for each category ****//
const CategoryItem = ({ title, item, id }) => {
  /********** VARIABLES **********/
  const { name, price, imageUrl } = item;
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState(
    "Product Description Coming Soon..."
  );
  const productDescriptions = useSelector(selectDescriptions);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  // Save the selected product to state and navigates to the product page
  const viewProduct = () => {
    dispatch(setViewProduct({ item: item, description: description }));
    navigate(`/shop/categories/${title}/${item.name}`);
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


  // Gets the product descriptions on page render
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
  }, [item.name]);


  return (
    /********** CATEGORY ITEM  **********/
    <CategoryItemContainer>
      {/********** IMAGE **********/}
      <ImageContainer ref={imgContainerRef} className='loading img-container'>
        <Image ref={imgRef} className='image' />
        <img src={imageUrl} className='image' alt='' />
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
        <CustomButton onClick={() => viewProduct()} inverted={true.toString()}>
          View Item
        </CustomButton>
      </ButtonContainer>
      {/*************************/}

    </CategoryItemContainer>
  );
};

export default CategoryItem;
