import styled from "styled-components";
import tw from "twin.macro";

import ProductsSection from "./products-section.component";

export const Products = styled(ProductsSection)``;

export const Container = styled.div`
  position: relative;
  margin-bottom: 60vh;
  z-index: 50;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 2em;
  justify-content: start;
  background-color: transparent;
  padding-bottom: 20rem;

  @media only screen and (max-width: 770px) and (orientation: portrait) {
    top: 0;
    height: 100%;
  }
`;

/********** Product Card **********/
export const Header = styled.div`
  //background-color: grey;
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
  //background: #1d212b;
  background-color: rgba(128, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid darkgrey;
  //width: 100%;
  //height: fit-content;
  border-radius: 10px;
  padding: 0.5em;

  ::before {
    content: "";
    //background: rgba(255, 255, 255, 0.1);
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
      //font-size: 14px;
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
  background-color: rgba(000, 000, 000, 0.7);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  padding: 15vh 10vw;
  place-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.7, 0.4, 0.66, 1.71);
  overflow-y: hidden;

  &.show {
    opacity: 1;
    visibility: visible;
  }

  @media only screen and (max-width: 800px) and (orientation: portrait) {
    padding: 0 10vw;
  }

  /********************  Media Queries  ********************/
  // @media (max-width: 950px) {
  // 	@media (max-height: 450px) {r
  // 		padding-top: 120px;
  // 	}
  // }

  // @media screen and (max-width: 800px) {
  // 	@media (max-height: 400px) {
  // 		padding-top: 80px;
  // 	}
  // }
`;

export const PopupProduct = styled.div`
  position: relative;
  z-index: 120000;
  height: 100vh;
  width: 60vw;
  left: 3vw;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: " img info ";

  .close__btn {
    background-color: white;
    color: #555;
    z-index: 1000;
    position: absolute;
    align-self: end;
    top: -60px;
    right: 12.5vw;
    font-size: 30px;
    color: #1d212b;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 2px 1px 5px #1d212b;

    :hover {
      background-color: maroon;
    }
  }

  /************** Media Queries **************/
  @media only screen and (max-width: 800px) and (orientation: portrait) {
    grid-template-columns: 80vw;
    grid-template-rows: 1fr 2fr;
    grid-template-areas:
      " img "
      " info ";
    //top: 5vh;
    width: 100vw;
    justify-content: center;

    .popup__img {
      left: 5%;
      top: 20vh;
      width: 90%;
      height: 50%;
      margin: 0 auto;
    }

    .info {
      top: 0;
      width: 100%;
      height: 70%;

      h3 {
        margin-top: 1.5em;
      }
    }

    .close__btn {
      top: 60px;
    }
  }

  @media (min-width: 801px) and (orientation: portrait) {
    width: 100vw;
    height: 60vh;
    margin: auto 0;
  }

  @media (max-height: 800px) and (orientation: landscape) {
    top: 7px;
    width: 75vw;

    .links {
      //justify-content: end;
    }
  }
`;

export const Modal = styled.div``;

export const PopupImage = styled.div`
  grid-area: img;
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: absolute;
  z-index: 15;
  width: 100%;
  height: 70%;
  top: 5%;
  background: #1d212b;
  left: 12%;
  border-radius: 10px;
  box-shadow: 6px 6px 6px #1d212b;

  img {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    object-fit: cover;
    right: 0px;
    border-radius: 10px;
  }

  // @media (min-width: 900px) {
  // 	//top: 10%;
  // }

  // @media (max-width: 950px) {
  // 	margin-top: -20px;
  // 	@media (max-height: 450px) {
  // 		margin-top: 35px;
  // 	}
  // }

  // @media (max-width: 800px) {
  // 	left: 0;
  // 	top: 0;
  // 	height: 50%;
  // 	border-bottom-left-radius: 0;
  // 	border-bottom-right-radius: 0;
  // 	box-shadow: none;

  // 	img {
  // 		width: 70%;
  // 		justify-self: center;
  // 		left: auto;
  // 		right: auto;
  // 	}

  // 	@media (max-height: 400px) {
  // 		top: -50px;
  // 		height: 50vh;
  // 	}
  // }

  //@media (max-width: 450px) { margin-top: 10px; }
`;

export const Info = styled.div`
  grid-area: info;
  position: absolute;
  z-index: 10;
  background: white;
  display: flex;
  width: 75%;
  height: 80%;
  flex-direction: column;
  padding: 5% 20px;
  border-radius: 10px;
  box-shadow: 2px 8px 8px #1d212b;
  //font-size: clamp(16px, 1.25vw, 24px);

  h3 {
    //font-size: clamp(24px, 3.5vw, 40px);
    line-height: 1;
    margin: 0 0 20px 1.5em;
  }

  span {
    //font-size: clamp(16px, 1.5vw, 24px);
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
      //font-size: clamp(24px, 2vw, 32px);
      font-weight: 500;
      margin: 0 0 4em 10%;
      font-size: large;
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
  height: 400px;
  overflow: auto;
  scrollbar-width: thin;
`;

export const AddSectionLinks = styled.div`
  position: relative;
  z-index: 200;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  a {
    &.add__cart__btn {
      color: white;
      background: maroon;
      width: 200px;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1px;
      padding: 10px 15px;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      :hover {
        background-color: white;
        outline: 1px solid maroon;
        color: maroon;
      }
    }

    &.add__wish {
      position: relative;
      width: fit-content;
      color: maroon;
      text-decoration: none;
      font-weight: 600;
      text-align: center;
      margin: 0 auto;

      :hover {
        color: #343841;
      }
    }
  }
`;
