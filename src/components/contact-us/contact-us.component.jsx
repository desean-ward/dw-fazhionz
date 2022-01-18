import React, { useRef } from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import { Container, Title, Message, InputContainer, NameInput, EmailInput, MessageInput, ButtonSend } from './contact-us.styles';


const Contact = () => {
    
    const handleClick = () => {
        const name = document.querySelector('.name-input');
        const email = document.querySelector('.email-input');
        const message = document.querySelector('.message-input');

        name.value = '';
        email.value = '';
        message.value = '';

        alert(`Thanks for reaching out.` + '\r\n' +
        `You'll hear back from us shortly.`
        );
    }

    return (
        <Container>
            <Title className='maroon'>CONTACT US</Title>
            <Message>We'd love to hear from you!</Message>

            <InputContainer>
                <NameInput className="name-input" placeholder="Name"></NameInput>

                <EmailInput className="email-input" placeholder="Email"></EmailInput>
                
                <MessageInput className="message-input" placeholder="Message"></MessageInput>
            </InputContainer>

            <ButtonSend>
                <CustomButton onClick={handleClick}>Send</CustomButton>
            </ButtonSend>
        </Container>
    )
}

export default Contact;


