import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const getMaxHeight = isOpen => {
    console.log(isOpen);
   return isOpen ? "250px" : "0px";
}

export const HeaderTop = styled.div`

`;

export const HeaderContainer = styled.div`
    @font-face {
        font-family: "Basement Grotesque";
        src: url("./assets/fonts/basement-grotesque.otf");

        font-family: "Nautigal";
        src: url("./assets/fonts/nautigal-bold.otf");
    }

    position: sticky;
    z-index: 100;
    top: 0;
    padding: 20px;
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    background-color: white;
	transition: transform 0.5s ease;
    /* @media screen and (max-width: 800px) {
        padding: 10px;
        height: 60px;
        margin-bottom: 20px;
     } */
`;

export const Left = styled.div`
    flex: 1 1;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-left: 40px;
`;

export const Right = styled.div`
    flex: 1 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 120px;
`;

export const TitleContainer = styled(Link)`
    display: flex;
    align-content: center;
    left: 50px;
    font-weight: 600;
    font-style: italic;
    display: flex;
    align-items: center; 
    justify-content: center;
    margin-top: 0px;
    margin-left: 0px;
    font-size: 5vh;
    z-index: 1;

    .nautigal {
        //font-family: 'Nautigal', sans-serif;
        //font-weight: 1000;
        //-webkit-text-stroke: 1px white;
        -webkit-text-fill-color: maroon;
        
        padding-right: 20px;
        z-index: 1
    }

    @supports (-webkit-text-stroke: 1px black) {
        background-image: linear-gradient(30deg, black 40%, rgba(255,0,0,0) 75%);
        -webkit-background-clip: text;
        
        -webkit-text-stroke: 1px black;
        -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 800px) {
        padding: 10px;
        font-size: 18px;
    }
`;

export const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
    color: #212529;
    cursor: default;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 10px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 5px 1px grey;
   
    height: 24px;
    width: 24px;
    transition: 
        500ms width ease-in-out,
        500ms padding ease-in-out,
        500ms border-radius ease-in-out;

    //**  open state  **//
    &.search-open {
        width: 16rem;
        border-radius: 0;

        .close-icon {
            z-index: 1;
        }
    }

    &.show {
        display: inline-block;
    }

    .search-icon {
        position: absolute;
        z-index: 100;
        margin-left: -2px;
        cursor: pointer;
        visibility: visible;
    }

    .delete-icon {
        position: relative;
        left: 12px;
        z-index: -1;
        cursor: pointer;
    }

    .close-icon {
        position: sticky;
        z-index: -1;
        left: 100%;
        cursor: pointer;
    }
`;

export const Input = styled.input`
    position: relative;
    left: 30px;
    height: 24px;
    width: 80%;
    border:none;
    outline: none;
    background-color: transparent;
    visibility: hidden;

    &:not(:placeholder-shown) ~
        .delete-icon {
            z-index: 1;
        }
`;

export const OptionsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    margin-right: -80px;

    @media screen and (max-width: 800px) {
        width: 80%;
    }

    @media screen and (max-width: 620px) {
        padding: 5px;
        flex: 2;
    }
`;

export const OptionsContainerStyles = css`
    position: relative;
    padding: 10px 15px;
    cursor: pointer;
    margin-left: 5px;
`;

export const OptionLine = styled.div`
        
`;

export const OptionLink = styled(Link)`
    ${ OptionsContainerStyles }

    :hover {
        color: maroon;
    }

    ::after {
        content: '';
        display: flex;
        flex: 1 1;
        position: absolute;
        z-index: 100;
        width: 80%;
        left: 10%;
        margin: 5px auto;
        height: 0.175rem;
        background-color: maroon;
    }

    &.btn-ctr::after {
        transform: scale(0, 1);
        transition: transform 0.3s ease;
    }

    &.btn-ctr:hover::after {
        transform: scale(1, 1);
    }
`;

export const HamburgerContainer = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    
    span {
        height: 2px;
        width: 35px;
        background-color: orange;
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

export const ScrollToTop = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1500;
	align-content: end;
	top: 0;
	right: 40px;
	height: 50px;
	width: 50px;
	color: white;
	background-color: maroon;
	border: 1px solid white;
	box-shadow: 4px 2px 4px black;
	border-radius: 10%;
	cursor: pointer;
	visibility: hidden;
	opacity: 0;
	transition: opacity .3s ease-in-out;
	transition: top .5s ease;

	&.active {
		visibility: visible;
		opacity: 1;
		top: 85vh;
	}

	&.arrow {
		height: 70px;
		width: 70px;
	}

	&.animateArrow {
		top: 0;
	}

	&:hover {
		background-color: white;

		.arrow {
			color: maroon;
		}
	}
`
