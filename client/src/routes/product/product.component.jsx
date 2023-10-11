import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  BreadcrumbContainer,
  BuyButtonsContainer,
  ChatWishShare,
  ImageContainer,
  ImagePricingSection,
  ProductColor,
  ProductColorContainer,
  ProductDetailsSection,
  ProductPageContainer,
  ProductsContainer,
  RatingSection,
  Section,
  SelectSizeContainer,
  SimilarProductsSection,
  SizeButton,
  SizeButtonsContainers,
  StatsContainer,
  StyledLink,
  Thumbnail,
  ThumnbnailSection,
} from "./product.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  selectCategoriesMap,
  selectProduct,
} from "../../redux/shop/shop.selectors";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../../components/custom-button/custom-button.component";
import { BsChatRightText, BsDot, BsShare } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import StarRating from "../../components/star-rating/star-rating.component";
import { FaStar } from "react-icons/fa";
import CategoryItem from "../../components/category-item/category-item.component";
import { updateCartInDB } from "../../utils/firebase/firebase.utils";

import AnimationPage from "../../components/animated-page/animated-page.component";

import * as notify from "../../components/toast/toast.component";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();
  const product = useSelector(selectProduct);
  const price = product.item.price;
  const nowPrice = price - price * 0.15;
  const cartItems = useSelector(selectCartItems);
  const categoriesMap = useSelector(selectCategoriesMap);
  const currentUser = useSelector(selectCurrentUser);
  const [products, setProducts] = useState(categoriesMap[category]);

  const formatCategory = () => {
    const firstLtr = category.charAt(0).toUpperCase();
    const remaining = category.slice(1);
    return firstLtr + remaining;
  };

  const setActiveButton = (e) => {
    const sizeBtns = document.querySelectorAll(".size");

    sizeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");
    console.log("SIZE: ", e.target.id);
  };

  // Buy Now
  const buyNow = (item) => {
    try {
      dispatch(addItem(item));
      navigate("/checkout");

      notify.itemAdded({
        imgUrl: product.item.imageUrl,
        name: product.item.name,
        text: "has beenadded to cart",
      });
    } catch (error) {
      notify.error({
        text: `An error occurred when adding ${product.item.name}. Please try again.`,
      });
      console.log("[PRODUCT PAGE ADD ERROR]", error);
    }
  };

  // Add to bag
  const addToBag = (item) => {
    try {
      dispatch(addItem(item));

      notify.itemAdded({
        imgUrl: product.item.imageUrl,
        name: product.item.name,
        text: "has beenadded to cart",
      });
    } catch (error) {
      notify.error({
        text: `An error occurred when adding ${product.item.name}. Please try again.`,
      });
      console.log("[PRODUCT PAGE ADD ERROR]", error);
    }
  };

  // Save cart to database
  useEffect(() => {
    try {
      updateCartInDB(currentUser, cartItems);
    } catch (error) {
      console.log(error);
    }
  }, [cartItems]);

  // Format the category for breadcrumb
  useEffect(() => {
    formatCategory();
  }, [category]);

  return (
    <AnimationPage>
      <ProductPageContainer>
        <BreadcrumbContainer>
          <StyledLink to='/' className='hover:text-black'>
            <span>Home / </span>
          </StyledLink>{" "}
          <StyledLink to='/shop/categories' className='hover:text-black'>
            <span>Categories / </span>
          </StyledLink>{" "}
          <StyledLink to={`/shop/categories/${category}`}>
            {formatCategory()} /
          </StyledLink>{" "}
          {product.item.name}
        </BreadcrumbContainer>

        <ImagePricingSection>
          <Section className='left'>
            <ThumnbnailSection>
              <Thumbnail className='h-[5em] w-[5em] bg-gray-400 border-2 grayscale'>
                <img
                  src={product.item.imageUrl}
                  width='75'
                  alt=''
                  className='grayscale'
                />
              </Thumbnail>
              <Thumbnail className='h-[5em] w-[5em] bg-gray-400 border-2'>
                <img src={product.item.imageUrl} width='75' alt='' />
              </Thumbnail>
              <Thumbnail className='h-[5em] w-[5em] bg-gray-400 border-2'>
                <img src={product.item.imageUrl} width='75' alt='' />
              </Thumbnail>
              <Thumbnail className='h-[5em] w-[5em] bg-gray-400 border-2'>
                <img src={product.item.imageUrl} width='75' alt='' />
              </Thumbnail>
              <Thumbnail className='h-[5em] w-[5em] bg-gray-400 border-2'>
                <img src={product.item.imageUrl} width='75' alt='' />
              </Thumbnail>
            </ThumnbnailSection>
            <ImageContainer>
              <img src={product.item.imageUrl} alt='' />

              {/* ---- Star Rating ---- */}
              <RatingSection>
                <section>
                  <StarRating />
                </section>
              </RatingSection>
            </ImageContainer>
          </Section>

          <Section className='right'>
            <h1 className='text-4xl'>{product.item.name}</h1>

            <StatsContainer>
              <span className='text-sm'>10K+ Sold</span>

              <BsDot size={28} />

              <span className=''>
                <FaStar color='#F9BE64' />
                <FaStar color='#F9BE64' />
                <FaStar color='#F9BE64' />
                <FaStar color='#F9BE64' />
                <FaStar color='grey' />
                <span className='ml-2'>4.0</span>
              </span>

              <BsDot size={28} />

              <span className='text-sm'>7349 Reviews</span>
            </StatsContainer>

            <h2>${nowPrice.toFixed(2)}</h2>
            <h4>
              <span className='wasPrice'>${price}.00</span>{" "}
              <span className='percentOff'>15% Off</span>
            </h4>

            <ProductColorContainer>
              <ProductColor>
                <img src={product.item.imageUrl} width='100' alt='' />
              </ProductColor>
              <ProductColor>
                <img src={product.item.imageUrl} width='100' alt='' />
              </ProductColor>
            </ProductColorContainer>

            <SelectSizeContainer>
              <h4 className='text-md'>Select Size</h4>

              <SizeButtonsContainers>
                <SizeButton className='size' id='SM' onClick={setActiveButton}>
                  S
                </SizeButton>
                <SizeButton className='size' id='M' onClick={setActiveButton}>
                  M
                </SizeButton>
                <SizeButton className='size' id='L' onClick={setActiveButton}>
                  L
                </SizeButton>
                <SizeButton className='size' id='XL' onClick={setActiveButton}>
                  XL
                </SizeButton>
                <SizeButton className='size' id='2XL' onClick={setActiveButton}>
                  2XL
                </SizeButton>
              </SizeButtonsContainers>
            </SelectSizeContainer>

            <BuyButtonsContainer>
              <CustomButton
                onClick={() => buyNow(product.item)}
                buttonType='inverted'
              >
                Buy Now!
              </CustomButton>
              <CustomButton onClick={() => addToBag(product.item)}>
                Add To Bag
              </CustomButton>
            </BuyButtonsContainer>

            <ChatWishShare>
              <span>
                <BsChatRightText />
                Chat
              </span>
              <span>
                <AiOutlineHeart />
                Wishlist
              </span>
              <span>
                <BsShare />
                Share
              </span>
            </ChatWishShare>
          </Section>
        </ImagePricingSection>

        {/* -------- PRODUCT DETAILS SECTION -------- */}
        <ProductDetailsSection>
          <Section>
            <h2>Product Details</h2>
            <p id='productDescription'>{product.description}</p>
          </Section>
        </ProductDetailsSection>

        {/* -------- SIMILAR ITEMS SECTION -------- */}
        <SimilarProductsSection>
          <Section>
            <div>
              <h2>Similar Items</h2>
            </div>

            <ProductsContainer>
              {products
                .filter((_, idx) => idx < 4)
                .map((prod) =>
                  product.item.id !== prod.id ? (
                    <CategoryItem
                      key={prod.id}
                      item={prod}
                      title={category}
                      id={prod.id}
                    />
                  ) : null
                )}
            </ProductsContainer>
          </Section>
        </SimilarProductsSection>
      </ProductPageContainer>
    </AnimationPage>
  );
};

export default Product;
