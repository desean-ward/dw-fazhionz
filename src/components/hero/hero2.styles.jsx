import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 10;
  background-color: white;
  padding-bottom: 4em;
  overflow-x: hidden;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  background-color: black;
  width: 100%;
  min-height: 12.3rem;

  @media (min-width: 690px) {
    visibility: hidden;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-height: 750px;

  img {
    object-fit: contain;
    width: 100%;
    //opacity: .5;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  color: white;
  line-height: 0.75;
  z-index: 50;
  overflow: hidden;
  opacity: 1;

  .overlay {
    width: 100%;
  }
`;

export const HeroVerbiage = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: clamp(3rem, 2.0909rem + 2.9091vw, 5rem);
  padding: 1em 0;
  z-index: 2;

  .dwf {
    position: relative;
    font-size: larger;
    top: -0.6em;
  }
  .signature {
    width: 50%;
    font-size: clamp(4rem, 1.7273rem + 7.2727vw, 9rem);
    font-family: "Mr Dafoe", cursive;
    text-decoration: underline;
    text-shadow: 4px 4px 4px maroon;
    z-index: -1;
  }
`;

export const VerbiageBar = styled(motion.div)`
  font-family: "Poppins";
  color: maroon;
  background-color: maroon;
  font-size: 1rem;
  position: absolute;
  width: 100%;
  display: flex;
  align-content: end;
  justify-content: center;
  top: 160px;
  white-space: nowrap;
  text-shadow: 0.1em 0.1em 0.001em white;
  padding: 0.5em;
  z-index: -1;

  @media (width < 900px) {
    top: 100px;
  }

  @media (width < 540px) {
    visibility: hidden;
    opacity: 0;
  }
`;

export const Signature = styled.div`
  width: 50%;
  font-size: clamp(4rem, 1.7273rem + 7.2727vw, 9rem);
  font-family: "Mr Dafoe", cursive;
  text-decoration: underline;
  text-shadow: 0.025em 0.05em maroon;
  z-index: -1;

  @media (width < 1101px) {
    p {
      display: none;
    }
  }
`;

export const LinesContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  z-index: 1;
`;

export const Lines = styled.div`
  width: 100%;
  padding-bottom: 0.5em;

  img {
    width: 100%;
    object-fit: cover;
    z-index: 1000;
  }
`;

export const Sale = styled.div`
  position: relative;
  top: -40px;
`;

export const SaleImage = styled.div`
  width: 3em;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
