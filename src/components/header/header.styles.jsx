import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


const getMaxHeight = isOpen => {
    console.log(isOpen);
   return isOpen ? "250px" : "0px";
}

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    border-bottom: black 1px solid;
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 60px;
`;

export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;


export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 60px;
`;

export const LogoContainer = styled(Link)`
    height: 50%;
    width: 70px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;  
`;

export const TitleContainer = styled(Link)`
left: 50px;
font-family: 'Sedgwick Ave', cursive;
display: flex;
align-items: center; 
justify-content: center;
margin-top: 0px;
margin-left: 0px;
font-size: 24px;
`;
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionsContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;

`;

export const OptionLink = styled(Link)`
    ${ OptionsContainerStyles }
`;

export const HamburgerContainer = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    
    span {
        height: 2px;
        width: 35px;
        background color: orange;
        margin-bottom: 4px;
        border-radius: 5px;
        border-bottom: 2px solid maroon;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        z-index: 5;
        position: relative;
        right: 120px;
        top: 20px;
        
    }
`;


const ShowNav = () => {
    const [isOpen, setIsOpen] = useState();
}

