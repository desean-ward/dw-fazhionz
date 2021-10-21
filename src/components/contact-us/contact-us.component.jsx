import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import { Container, Title, Message, InputContainer, NameInput, EmailInput, MessageInput, ButtonSend } from './contact-us.styles';



const Contact = () => {

    const handleClick = () => {
        alert('Clicked');

    }

    return (
        <Container>
            <Title>CONTACT US</Title>


            <Message>We'd love to hear from you!</Message>

            <InputContainer>
                <NameInput placeholder="Name"></NameInput>

                <EmailInput placeholder="Email"></EmailInput>
                
                <MessageInput placeholder="Message"></MessageInput>
            </InputContainer>

            <ButtonSend>
                <CustomButton onClick="handleClick">Send</CustomButton>
            </ButtonSend>
        </Container>
    )
}

export default Contact;


