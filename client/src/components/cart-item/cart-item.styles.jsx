import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px;

  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }

  .name {
    position: relative;
    font-size: 16px;
    font-weight: 600;
    margin-top: -5px;
  }

  .price {
    font-size: 14px;
    padding-bottom: 10px;
  }

  .right {
    position: relative;
    font-size: 16px;
    display: flex;
  }
`;
