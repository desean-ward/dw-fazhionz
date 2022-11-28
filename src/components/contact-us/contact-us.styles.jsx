import styled, { css } from 'styled-components';

export const Wrapper = css`
    width: clamp(20rem, 50vw, 70rem);
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`

export const Container = styled.div`
    position: relative;
    z-index: 50;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 80px;
    margin-bottom: -60vh;

   ${ Wrapper }

   @media only screen and (max-height: 900px) and (max-width: 1000px) {
       height: 85vh;

       @media only screen and (max-height: 450px) {
           height: 100vh;
           margin-bottom: -20vh;
       }
   }

   @media only screen and (max-width: 900px) and (max-height: 1100px) {
      height: 75vh;

      @media only screen and (max-width: 450px) {
          height: 85vh;
      }
   }
`


export const Title = styled.h2`
    left: 0;
`

export const Message = styled.p`
`

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: clamp(90%, 50vw, 90vw);
    height: 50vh;
    margin-top: 40px;

    input, textarea {
        border-radius: 5px;
    }

    .highlight {
        border: 1px solid maroon;
        box-shadow: 1px 1px 4px maroon;
    }
`

export const NameInput = styled.input`
    margin-bottom: 20px;
    outline: none;
    height: 40px;
    padding-left: 10px;
    
    :focus, :hover {
        background-color: transparent;
    }
`

export const EmailInput = styled.input`
    margin-bottom: 20px;
    outline: none;
    height: 40px;
    padding-left: 10px;

    :focus, :hover {
        background-color: transparent;
    }
`

export const SubjectInput = styled.input`
    margin-bottom: 20px;
    outline: none;
    height: 40px;
    padding-left: 10px;
    
    :focus, :hover {
        background-color: transparent;
    }
`

export const MessageInput = styled.textarea`
    height: 160px;
    margin-bottom: 20px;
    resize: none;
    outline: none;
    padding-left: 10px;

    :focus, :hover {
        background-color: transparent;
    }

    @media screen and (max-width: 800px) {
        margin-bottom: 0px;
    }
`

export const ButtonSend = styled.div`
    display: flex;
    justify-content: flex-end;
    width: fit-content;
    border: none;
    background: transparent;
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 20px;

    @media screen and (max-width: 800px) {
        margin-bottom: 10px;
    }
`