import styled from 'styled-components';


export const Container = styled.div`
    height: 65vh;
    display: flex;
    flex-direction: column;
    padding: 0px 60px;
    align-items: flex-start;
    justify-content: flex-start;
`;


export const Title = styled.h1`
    font-weight: bold;
`;


export const Message = styled.p`
    font-size: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 50vh;

`;


export const NameInput = styled.input`
    margin-bottom: 20px;
`;


export const EmailInput = styled.input`
    margin-bottom: 20px;
`;


export const MessageInput = styled.input`
    height: 30vh;
    margin-bottom: 20px;
    
    @media screen and (max-width: 800px) {
        margin-bottom: 0px;
    }

`;


export const ButtonSend = styled.button`
    display: flex;
    justify-content: flex-end;
    width: 50vw;
    border: none;
    background: transparent;
    margin-bottom: 20px;

    @media screen and (max-width: 800px) {
        margin-bottom: 10px;
    }
`;