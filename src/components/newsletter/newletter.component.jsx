import React from 'react';

import { Container, Title, Description, InputContainer, Input, Button } from './newsletter.styles';

import { MdSend } from 'react-icons/md';

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>
            Get timely updates about our new arrivals.
            </Description>

            <InputContainer>
                <Input placeholder="Your email" />
                
                <Button>
                <MdSend />
                </Button>
            
            </InputContainer>
            
        </Container>
    )
}

export default Newsletter
