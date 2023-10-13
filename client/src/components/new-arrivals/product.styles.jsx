import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

import ProductsSection from "./products-section.component";

export const Products = styled(ProductsSection)``;

export const Container = styled.div`
  ${tw`
    relative
    w-screen
    grid gap-[2em]
    z-50
    bg-transparent
    pb-[20rem] px-8
    mb-[60vh]
  `}

  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
`;

/********** Product Card **********/
export const Header = styled.div`
  position: sticky;
  background-color: maroon;
  color: white;
  text-align: left;
  padding: 0.5em 0.75em 0;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const ProductCard = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(128, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid darkgrey;
  border-radius: 10px;
  padding: 0.5em;

  ::before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
  }

  img {
    &.product-img {
      z-index: 0;
      max-width: 75%;
      height: 275px;
      border: 1px solid rgba(255, 255, 255, 1);
      border-radius: 10%;
      margin: 20px auto;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        background: white;
        filter: blur(10px);
        margin: -15px;
        overflow: hidden;
      }
    }
  }

  h2 {
    &.name {
      z-index: 5;
      color: white;
      text-align: center;
      padding-top: 20px;
      //font-size: 20px;
      letter-spacing: 1px;
    }
  }

  span {
    &.price {
      z-index: 2;
      margin-top: 0;
      margin-bottom: 20px;
      color: white;
      width: 100%;
      text-align: center;
      //font-size: 30px;
      font-weight: 300;
    }
  }

  a {
    &.popup__btn {
      z-index: 2;
      color: maroon;
      background-color: white;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1px;
      width: fit-content;
      padding: 10px 15px;
      border-radius: 10px;
      margin: 0 auto 20px auto;

      &:hover {
        cursor: pointer;
        background-color: grey;
        color: white;
      }
    }
  }
`;

export const Footer = styled.div`
  background-color: maroon;
  color: white;
  text-align: right;
  padding: 0.5em 0.75em 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

/********** Product Quick View Popup / Modal **********/
export const PopupView = styled.div`
  z-index: 1000;
  background-color: rgba(000, 000, 000, 0.8);
  backdrop-filter: blur(8px);
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  place-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.7, 0.4, 0.66, 1.71);
  overflow-y: hidden;

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;

export const PopupProduct = styled.div`
  top: 0;
  left: 0;
  z-index: 1000;

  ${tw`
    w-screen h-screen
    flex flex-wrap md:flex-nowrap
    justify-center items-center 
    p-4
    
  `}

  .close__btn {
    background-color: white;
    color: #555;
    z-index: 1000;

    font-size: 30px;
    color: #1d212b;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 2px 1px 5px #1d212b;

    ${tw`
      relative 
      left-0 md:left-[89vw] lg:left-[41vw]
      top-0 md:top-[-28vh] lg:top-[-30vh]

    `}

    :hover {
      background-color: maroon;
    }

    @media (width >= 400px) and (width <= 480px) {
      ${tw`
      top-[-3em]
      left-[40vw]
      
    `}
    }
  }
`;

export const Modal = styled.div``;

export const PopupImage = styled.div`
  grid-area: img;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 330px;

  background: #1d212b;
  border-radius: 10px;
  box-shadow: 6px 6px 6px #1d212b;

  ${tw`
    relative
    z-10
    h-[225px] md:h-[550px]
    top-6  md:top-0
    left-0
    
   
  `}

  img {
    z-index: 100;
    width: 100%;
    height: 100%;
    object-fit: cover;
    right: 0px;
    border-radius: 10px;
  }

  @media (width >= 400px) and (width <= 480px) {
    ${tw`
      top-[5.5em]
      left-[-1em]
    `}
  }
`;

export const Info = styled(motion.div)`
  grid-area: info;
  background: white;
  display: flex;

  flex-direction: column;
  padding: 2em 20px;
  border-radius: 10px;
  box-shadow: 2px 8px 8px #1d212b;

  ${tw`
    relative 
    md:right-8 lg:right-4
    h-[30em] md:h-[30em]
  `}

  h3 {
    line-height: 1;
    margin: 0 0 20px 1.5em;
  }

  span {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: smaller;

    &.wasPrice {
      text-decoration: line-through;
      line-height: 0.8;
      color: maroon;
      margin: 20px 0 0 10%;
    }

    &.price {
      font-weight: 500;
      margin: 0 0 2em 10%;
      ${tw`text-2xl`}
    }
  }

  p {
    position: relative;
    padding: 5px 10px;
    line-height: 1.5;
    border-left: 1px solid #1d212b;
    margin: 0 10% 0px 10%;
    padding-left: 10px;
  }
`;

export const Description = styled.div`
  height: 300px;
  overflow: auto;
  scrollbar-width: thin;
`;

export const AddSectionLinks = styled.div`
  position: relative;
  z-index: 200;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  gap: 1em;

  a {
    &.add__cart__btn {
      color: white;
      background: maroon;
      width: 100%;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1px;
      padding: 10px 15px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      :hover {
        background-color: white;
        outline: 1px solid maroon;
        color: maroon;
      }
    }

    &.view__details {
      color: maroon;
      background: white;
      outline: 1px solid maroon;
      width: 100%;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1px;
      padding: 10px 15px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      :hover {
        background-color: maroon;
        outline: none;
        color: white;
      }
    }
  }
`;
