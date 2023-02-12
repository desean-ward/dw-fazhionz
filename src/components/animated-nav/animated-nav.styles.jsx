import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    position: fixed;
	height: 100vh;
	width: 100vw; 
    display: ${props => props.show ? "none" : "flex"};
    justify-content: center;
    align-items: center;
    overflow: hidden;
    visibility: hidden;

    h1 {
        font-size: 40px;
        text-align: center;
    }

    &.focused {
        position: fixed;
        //z-index: 200;
        top: 0;
    }
`

export const Navigation = styled.div`
    position: fixed;
    z-index: 200;
    background-color: maroon;
    width: 100vw;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -200vw;
    overflow: hidden;

    img {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        opacity: 0.15;
        height: 30px;
    }

    h2 {
        position: absolute;
        top: 10%;
        left: 7%;
        opacity: 0;
        color: #fff;
        font-size: 2em;
        pointer-events: none;
    }

    .close {
        width: 30px;
        height: 30px;
        //background-color: #fff;
        position: absolute;
        z-index: 4000;
        top: 4%;
        right: 5%;
        cursor: pointer;
        opacity: 0;

        &::before, &::after {
            content: '';
            position: absolute;
            width: 30px;
            height: 4px;
            background-color: #fff;
            transition: background .5s ease;
        }

        &::before {
            transform: rotate(-45deg);
        }

        &::after {
            transform: rotate(45deg);
        }

        :hover::before, :hover::after {
             background-color: black;
        }
    }

    @media only screen and (orientation: landscape) {
            overflow: auto;
            font-size: 16px;

            .close {
                top: 40px;
            }
    }
`

export const HamburgerContainer = styled.div`
    position: absolute;
    z-index: 200;
    width: 30px;
    height: 30px;
    background-color: transparent;
    top: 22.5px;
    right: 5%;
    cursor: pointer;

    @media only screen and (min-width: 721px) {
        display: none;
    }

    @media only screen and (orientation: landscape) and (max-height: 600px) {
        display: flex;
        margin-top: 10px;
    }

    @media only screen and (max-width: 400px) {
        top: 35px
    }

   
`
export const Bars = styled.div`
    width: 30px;
    height: 4px;
    background: #000;
    z-index: 1;
    cursor: pointer;

    &::before, &::after {
        content: '';
        position: absolute;
        z-index: 1;
        width: 75%;;
        height: 4px;
        background: #000;
        right: 0;
    }


    &::before {
        margin-top: -9px;
    }

    &::after {
        margin-top: 9px;
    }
`

export const Menu = styled.ul`
    list-style: none;
    z-index: 1;
    li {
        margin: 50px 0;
    }
`

export const MobileNavLink = styled(Link)`
    text-decoration: none;
    color: #fafafa;
    font-size: 1.5em;
    font-weight: 500;
    position: relative;
    opacity: 0;

    &:hover {
        color: #fafafa;
    }

    &::after {
        content: '';
        width: 100%;
        position: absolute;
        height: 3px;
        border-radius: 5px;
        background-color: white;
        bottom: -10px;
        left: 0;
        transition: transform .5s ease;
        transform: scaleX(0);
    }

    :hover::after {
        transform: scaleX(1);
    }
`