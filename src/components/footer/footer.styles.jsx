import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  z-index: 50;
  width: 100%;
  margin-top: 80vh;

  &.shadow {
    filter: drop-shadow(0 -3px 12px black);
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 4em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2em;

  gap: 2em;

  background-color: white;

  @media (max-width: 480px) {
    margin: 0 auto;
  }

  /*grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        'left  center  right';
    justify-items: center;
    gap: 2rem;

    @media screen and (max-width: 1200px) {
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:
            'left'
            'center'
            'right';
        justify-content: start;
    } */
`;

export const Left = styled.div`
  //grid-area: left;
  //position: relative;
  //max-width: 33%;
  padding-right: 2em;

  /*  @media (orientation: portrait) {
        max-width: 100%;
    } */
`;

export const Logo = styled.h3``;

export const Description = styled.div`
  //margin-bottom: 20px;
`;

export const SocialContainer = styled.div`
  display: flex;
  //padding-bottom: 40px;
  margin-top: 1em;
`;

export const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  text-align: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const Center = styled.div`
  //grid-area: center;
  //position: relative;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
  //font-weight: bold;
`;

export const List = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const Right = styled.div`
  //grid-area: right;
  //position: relative;

  /* @media only screen and (max-width: 1100px) {
        margin-top: -50px;
    }

    @media only screen and (max-width: 900px) {
        margin-top: -12px;
    }

    @media only screen and (max-width: 640px) {
        margin-top: -97px;
    }
 */
  /* @media only screen and (max-width: 640px) {
        margin-top: -100px;
    } */
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 250px;
  margin-left: -1em;
`;
