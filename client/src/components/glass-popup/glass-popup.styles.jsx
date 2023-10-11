import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: fixed;
  z-index: 5000;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(000, 000, 000, 0.8);
  backdrop-filter: blur(8px);

  opacity: 0;
  visibility: hidden;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease-in-out;

  &.show {
    visibility: visible;
    overflow-x: hidden;
    opacity: 1;
    height: 100vh;
  }
`;

export const Modal = styled(motion.div)`
  position: relative;
  z-index: 1000;
  width: calc(15rem + 15vw);
  height: fit-content;
  background-color: rgba(070, 000, 000, 1);
  color: white;
  //border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 20px 20px;

  transform: ${(props) => (props.show === true ? "scale(1)" : "scale(0)")};

  .exit {
    font-size: 28px;
    position: absolute;
    right: 10px;
    top: 10px;
    color: white;
    cursor: pointer;
    z-index: 100;

    &:hover {
      color: grey;
    }
  }

  &.hide {
    /* transform: scale(0); */
    opacity: 0;
  }
`;

export const Title = styled.h3`
  text-align: center;
  top: 40px;
`;
export const TitleBG = styled.h3`
  font-weight: 700;
  text-align: center;
  padding-bottom: 40px;
  color: rgba(255, 255, 255, 0.3);
`;

export const Content = styled.p`
  position: relative;
  padding: 20px 0;
  text-align: center;
`;
