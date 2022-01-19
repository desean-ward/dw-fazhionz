import styled from 'styled-components';


export const Container = styled.div`
    height: 65vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 0px 60px;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: -60vh;

`;


export const Title = styled.h2`
    width: 55%;    
    font-weight: bold;
    text-align: left;
`;


export const Message = styled.p`
    width: 55%;
    text-align: left;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 50vh;
    
`;


export const NameInput = styled.input`
    margin-bottom: 20px;
    outline: none;
    height: 40px;
    padding-left: 10px;
    
    
    :focus, :hover {
        //box-shadow: inset .3px .3px 4px black;
        background-color: transparent;
    }
`;


export const EmailInput = styled.input`
    margin-bottom: 20px;
    outline: none;
    height: 40px;
    padding-left: 10px;
    

    :focus, :hover {
        //box-shadow: inset .3px .3px 4px black;
        background-color: transparent;
    }
`;


export const MessageInput = styled.textarea`
    height: 160px;
    margin-bottom: 20px;
    resize: none;
    outline: none;
    padding: 10px;

    :focus, :hover {
        //box-shadow: inset .3px .3px 8px black;
        background-color: transparent;
    }

    @media screen and (max-width: 800px) {
        margin-bottom: 0px;
    }
`;

export const ButtonSend = styled.div`
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