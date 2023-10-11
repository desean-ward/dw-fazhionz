import styled, { css } from "styled-components";

export const Wrapper = css`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5em;
  padding-right: 1.5em;
`;

export const LogoContainer = styled.div`
  position: relative;
  top: 18.5em;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  background-color: white;
  opacity: 1;
  bottom: 1em;
  img {
    position: absolute;
    width: 100%;
    object-fit: contain;

    &.lines {
      width: 100vw;
      height: 70em;
      margin-bottom: 4em;
    }

    &.logo {
      grid-area: logo;
      width: 75%;
      height: 70%;
      z-index: 2;
    }
    &.burst {
      z-index: 20;
      width: 60%;
      height: 90%;
      opacity: 0;
    }

    &.burst2 {
      z-index: 20;
      width: 80%;
      height: 90%;
      opacity: 0;
    }

    &.logo-images {
      position: absolute;
      border-radius: 20px;
      width: auto;

      &.left {
        grid-area: left;
        left: 0;

        @media (width <= 1100px) {
          display: none;
        }
      }

      &.right {
        grid-area: right;
        right: 0;

        @media (width <= 1100px) {
          display: none;
        }
      }
    }
  }

  @keyframes scale {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes slide-out-left {
    0% {
      visibility: hidden;
    }
    100% {
      transform: translateX(-45vw);
      visibility: visible;
    }
  }

  @keyframes slide-out-right {
    0% {
      visibility: hidden;
    }
    100% {
      transform: translateX(45vw);
      visibility: visible;
    }
  }

  @keyframes flash {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes flash2 {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 50;
  padding: 0 0.5em 8em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  margin-bottom: -25em;

  @media (width <= 1100px) {
    margin-bottom: -50vh;
    padding: 0 1em 8em;
  }

  @media (width <= 500px) {
    margin-bottom: -55vh;
    padding: 0 0.5em 8em;
  }
`;

export const Title = styled.h3`
  left: 0;
`;

export const Message = styled.p``;

export const InputContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;

  input,
  textarea {
    border-radius: 5px;
    border: 1px solid #989898;

    padding: 0.5em;
  }

  .highlight {
    outline: none;

    ::placeholder {
      color: maroon;
      font-weight: stronger;
    }
  }
`;

export const NameInput = styled.input`
  margin-bottom: 20px;
  outline: none;
  padding: 0.5em;

  :focus,
  :hover {
    border: 2px solid black;
  }
`;

export const EmailInput = styled.input`
  margin-bottom: 20px;
  outline: none;
  padding: 0.5em;

  :focus,
  :hover {
    border: 2px solid black;
  }
`;

export const SubjectInput = styled.input`
  margin-bottom: 20px;
  outline: none;
  padding: 0.5em;

  :focus,
  :hover {
    border: 2px solid black;
  }
`;

export const MessageInput = styled.textarea`
  height: 160px;
  margin-bottom: 20px;
  resize: none;
  outline: none;
  padding: 0.5em;

  :focus,
  :hover {
    border: 2px solid black;
  }
`;

export const ButtonSend = styled.div`
  display: flex;
  justify-content: flex-end;
  width: fit-content;
  border: none;
  background: transparent;
  margin-top: 40px;
  margin-bottom: 10px;
`;
