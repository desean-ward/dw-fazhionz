import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) =>
    props.path === "/" || props.scrolling ? "white" : "black"};

  :hover {
    color: maroon;
  }

  @media (max-width: 900px) {
    left: -1.5em;
    margin-top: 0.4em;
  }

  .shopping-icon {
    width: 36px;
    height: 36px;
  }

  .item-count {
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    bottom: 5px;
    color: ${(props) =>
      props.path === "/" || props.scrolling ? "black" : "white"};

    :hover {
      color: white;
    }

    @media (min-width: 901px) {
      bottom: 6px;
    }
  }
`;
