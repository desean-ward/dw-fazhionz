import React from 'react';

import { Container, Title, Description, InputContainer, Input, Button } from './newsletter.styles';

import { MdSend } from 'react-icons/md';

const Newsletter = () => {

    const handleClick = () => {
        const text = document.querySelector('.input');

        text.value = '';

        alert(`You're now subscribed!` + '\r\n' +
        `Please watch your email for weekly deals.`
        );
    }

    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>
            Subscribe to receive updates on deals and new arrivals
            </Description>

            <InputContainer>
                <Input className='input' placeholder="Your email" />
                
                <Button onClick={handleClick}>
                    <MdSend />
                </Button>
            
            </InputContainer>
            
        </Container>
    )
}

export default Newsletter
