import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

import { IoClose } from "react-icons/io5";

import {
  Container,
  Content,
  Modal,
  Title,
  TitleBG,
} from "./glass-popup.styles";

const GlassModal = ({ show, close, titleBG, title, content }) => {
  const [isShowing, setIsShowing] = useState(true);
  useEffect(() => {
    if (show) {
      const fadeIn = document.querySelector(".modalContainer");
      fadeIn.classList.add("show");

      return;
    }
  }, [show]);

  function handleClose() {
    setIsShowing(false);
    const fadeIn = document.querySelector(".modalContainer");

    // Return close property to parent
    setTimeout(() => {
      fadeIn.classList.remove("show");
      close();
    }, 500);
  }

  const variants = {
    hidden: { scale: 0, opacity: 0, transition: { duration: 0.3 } },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, delay: 0.3 },
    },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return ReactDom.createPortal(
    <>
      {show ? (
        <Container className='modalContainer' onClick={() => handleClose()}>
          <Modal
            variants={variants}
            initial='hidden'
            animate={isShowing ? "visible" : "hidden"}
            exit='exit'
            show={isShowing}
            className='popup'
            onClick={(e) => e.stopPropagation()}
          >
            <IoClose className='exit' onClick={() => handleClose()} />

            <TitleBG>{titleBG}</TitleBG>
            <Title>{title}</Title>
            <Content>{content}</Content>
          </Modal>
        </Container>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};

export default GlassModal;
