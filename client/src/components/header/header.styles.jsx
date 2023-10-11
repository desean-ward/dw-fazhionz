import tw, { styled } from "twin.macro";
import { css } from "styled-components";
import { Link } from "react-router-dom";

const getMaxHeight = (isOpen) => {
  console.log(isOpen);
  return isOpen ? "550px" : "0px";
};

export const HeaderTop = styled.div``;

export const HeaderContainer = styled.div`
  position: sticky;

  transition: transform 0.5s ease;

  ${tw`
    sticky top-0
    z-[100]
    py-2 lg:py-4 px-16
    w-full
    flex justify-between items-center
    bg-white
  `}

  &.shadow {
    box-shadow: 0 30px 50px -20px rgb(50 50 93 / 25%),
      0 30px 60px -30px rgb(0 0 0 / 30%);

    filter: drop-shadow(0 0.25em 0.5em gray);
  }

  /* MEDIA QUERIES */
  @media (max-width: 1000px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-content: center;
    /* padding: 0 3.5rem; */

    .header-left {
      justify-content: center;
    }
  }

  @media (max-width: 720px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    .cart-icon {
      /* margin-right: 24px; */
    }
  }

  @media (max-width: 640px) {
    /* padding: 0 0.5rem; */
  }
`;

export const Left = tw.div`
  flex items-center justify-start gap-2

  
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const TitleContainer = styled(Link)`
  display: flex;
  align-content: center;
  left: 50px;
  font-weight: 600;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-left: 0px;
  z-index: 1;
`;

export const Language = styled.span`
  display: flex;
  align-items: start;
  color: #212529;

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 2.5em;
  width: 2.5em;
  transition: 500ms width ease-in-out, 500ms padding ease-in-out,
    500ms border-radius ease-in-out;

  ${tw`
	cursor-pointer
	shadow shadow-gray-700
	p-3
	rounded-full

  `}

  //**  open state  **//
  &.search-open {
    ${tw`
		w-[22em] lg:w-[34em]
		rounded-md
	`}

    .search-icon {
      animation: fade-out 0.5s ease-out;
      animation-fill-mode: forwards;
    }

    .close-icon {
      z-index: 1;

      :hover {
        color: maroon;
      }
    }

    /* KEYFRAMES */
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fade-out {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @media only screen and (max-width: 600px) {
      /* width: 18rem; */
    }

    @media only screen and (max-width: 400px) {
      /* width: 15rem; */
    }
  }

  &.show {
    display: inline-block;
  }

  .search-icon {
    position: absolute;
    cursor: pointer;

    animation: fade-in 1s ease-out;
    animation-fill-mode: forwards;
  }

  .delete-icon {
    position: relative;
    /* left: 12px; */
    z-index: -2;
    cursor: pointer;

    ${tw`lg:left-3`}
  }

  .close-icon {
    position: sticky;
    z-index: -1;
    left: 100%;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  position: relative;
  width: 80%;
  border: none;
  outline: none;
  background-color: transparent;
  visibility: hidden;

  &:not(:placeholder-shown) ~ .delete-icon {
    z-index: 1;
  }
`;

export const OptionsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const OptionsContainerStyles = css`
  position: relative;
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionLine = styled.div``;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}

  :hover {
    color: maroon;
  }

  ::after {
    content: "";
    display: flex;
    flex: 1 1;
    position: absolute;
    z-index: 100;
    width: 80%;
    left: 10%;
    margin: 5px auto;
    height: 0.175rem;
    background-color: maroon;
  }

  &.btn-ctr::after {
    transform: scale(0, 1);
    transition: transform 0.3s ease;
  }

  &.btn-ctr:hover::after {
    transform: scale(1, 1);
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const HamburgerContainer = styled.div`
  position: relative;
  width: 30px;
  display: grid;
  place-content: center;
  background: #fff;
  cursor: pointer;
`;
export const Bars = styled.div`
  width: 30px;
  height: 4px;
  background: #000;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 4px;
    background: #000;
  }

  &::before {
    margin-top: 9px;
  }

  &::after {
    margin-top: 18px;
  }
`;

export const ScrollToTop = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  align-content: end;
  top: 0;
  right: 2.5em;
  height: 50px;
  width: 50px;
  color: white;
  background-color: maroon;
  border: 1px solid white;
  box-shadow: 4px 2px 4px black;
  border-radius: 10%;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  transition: top 0.5s ease;

  &.active {
    visibility: visible;
    opacity: 1;
    top: 92.5vh;

    @media only screen and (max-height: 800px) {
      top: 85vh;
    }

    @media only screen and (orientation: portrait) {
      top: 92.5vh;

      @media only screen and (max-width: 640px) {
        right: 20px;
      }
    }
  }

  &.arrow {
    height: 70px;
    width: 70px;
  }

  &.animateArrow {
    top: 0;
  }

  &:hover {
    background-color: white;

    .arrow {
      color: maroon;
    }
  }
`;
