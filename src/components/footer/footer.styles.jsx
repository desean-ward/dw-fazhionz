import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    position: relative;
    z-index: 50;
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: white;
    margin-top: 80vh; 

    &.shadow {
        filter: drop-shadow(0 -3px 12px black);
    }

    &.portrait {
        @media only screen and (orientation: portrait) {
            margin-top: 50vh;
        }
    }

    @media only screen and (max-width: 1100px) {
        height: 100%;
    }
`
export const Container = styled.div`
    position: relative;
    padding-top: 40px;
    display: grid;
    width: 80%;
    background-color: white;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        'left  center  right';
    justify-items: center;
    gap: 2rem;

    @media screen and (max-width: 1100px) {
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:
            'left'
            'center'
            'right';
        justify-content: start;
    }
`;

export const Left = styled.div`
    grid-area: left;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;
`;

export const Logo = styled.h3`
   
`;

export const Description = styled.p`
    margin-bottom: 20px;
`;

export const SocialContainer = styled.div`
    display: flex;
    padding-bottom: 40px;
`;

export const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

export const Center = styled.div`
    grid-area: center;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;
`;

export const Title = styled.h3`
    margin-bottom: 30px;
    font-weight: bolder;
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
    grid-area: right;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;
    
    @media only screen and (max-width: 480px) {
        /* top: -80px; */
    }
`;

export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

export const Payment = styled.img`
    width: 250px;
`;