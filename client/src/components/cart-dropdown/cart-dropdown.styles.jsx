import styled from "styled-components";

import { motion } from "framer-motion";

export const DropdownContainer = styled(motion.div)`
  position: absolute;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top: 1px solid rgb(216, 214, 214);
  background-color: white;
  color: black;
  box-shadow: 0 5px 5px 0 rgba(36, 31, 31, 0.5);
  top: 6em;
  right: 3rem;
  border-radius: 1em;
  //opacity: 1;

  .total {
    font-weight: bolder;
    margin-left: auto;
  }

  @media (max-width: 1000px) {
    top: 8rem;
    right: 1em;
  }

  @media (max-width: 720px) {
    top: 3rem;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (width < 640px) {
    top: 3.5em;
  }
`;

export const CartItems = styled.div`
  height: 265px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  //box-shadow: inset 0 1px 5px black;
`;

export const EmptyMessage = styled.div`
  margin: 50px auto;
`;

export const ButtonContainer = styled(motion.div)`
  width: 100%;
  margin-top: 20px;
  display: ${(props) => (props.hasItems ? "flex" : "none")};
  place-content: center;
`;

export const Total = styled.div`
  display: ${(props) => (props.hasItems ? "flex" : "none")};
`;
