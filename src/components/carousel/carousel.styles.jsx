import styled from 'styled-components';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    margin-bottom: 110px;
    overflow: hidden;
`;

export const ArrowContainer = styled.div`
    width: 50px;
    height: 50px;
    background-color: lightgrey;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.9
    z-index: 5;
`;

export const LeftArrow = styled(MdArrowLeft)`
    height: 100px;
    width: 100px;
`;

export const RightArrow = styled(MdArrowRight)`
    height: 100px;
    width: 100px;
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw)
`;

export const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const ImageContainer = styled.div`
    flex: 1; 
    height: 100%; 
`;

export const Image = styled.img`
    height: 80%;
    width: 60vw;
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding 50px;
`;

export const Title = styled.h1`
    font-size: 70px;
`;

export const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
`;

export const ButtonContainer = styled(Link)``;
