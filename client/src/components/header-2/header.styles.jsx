import tw from 'twin.macro';
import styled from 'styled-components';

export const HeaderWrapper = tw.section`
    w-full 
    h-20 
    bg-red-500
    fixed 
    top-0 
    z-50
`

export const HeaderContainer = tw.div`
    w-full 
    h-full 
    flex 
    justify-between 
    items-center
    px-8
`

export const LogoContainer = tw.div`
    text-sm
`

// export const SearchContainer = tw.div`
//     flex 
//     items-center 
//     justify-center 
//     h-[1.5em]
//     w-[1.5em] 
//     px-[0.5em] 
//     border 
//     border-black 
// ` 

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* color: ${(props) =>
    props.path === "/" || props.scrolling ? "white" : "black"}; */
  height: 1.5em;
  width: 1.5em;
  padding: 0 0.5em 0 0.5em;
  /* border: ${(props) =>
    props.path === "/" || props.scrolling
      ? "1px solid rgba(255, 255, 255, 05)"
      : "1px solid black"}; */
  border: 1px solid rgba(255, 255, 255, 05);
  transition: 500ms width ease-in-out, 500ms ease-in-out,
    500ms border-radius ease-in-out;

  ${tw`py-3 rounded-full cursor-pointer`}

  //**  open state  **//
  &.search-open {
    ${tw`
        w-[22em] lg:w-[34em]
        rounded-md bg-white
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
      width: 18rem;
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
    color: black;
    left: 0;
    z-index: -2;
    cursor: pointer;
  }

  .close-icon {
    position: sticky;
    color: black;
    z-index: -1;
    right: 0;
    margin-left: 4px;
    cursor: pointer;
  }
`;


export const NavContainer = tw.div`
    border-2
`