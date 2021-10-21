import styled from 'styled-components';


export const Container = styled.div`
    height: 60vh;
    width: 100vw;
    margin-top: 200px;
    color: white;
    background-color: maroon;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        height: 30vh;
        margin-top: 60px;
    }
`;

export const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

    @media screen and (max-width: 800px) {
       font-size: 50px;
    }
`;

export const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

export const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
`;

export const Button = styled.button`
    flex: 1;
    border-none;
    outline-none;
    background-color: white;
`;
