import styled from 'styled-components';

export const HeaderMessageContainer = styled.div`
background-color: maroon;
width: 100vw;
height: 36px;;
display: flex;
align-items: center;
padding: 0px 60px;
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    color: white;

    @media screen and (max-width: 800px) {
        flex: 2;
        padding: 10px;
        font-size: 14px;
    }

`;

export const Right = styled.div`
    flex: 1;
`;

export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    color: white;
`;

export const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 10px;
    background-color: white;
    height: 26px;
    cursor: pointer;
`;

export const Input = styled.input`
    height: 24px;
    border: none;
    outline: none;
`;