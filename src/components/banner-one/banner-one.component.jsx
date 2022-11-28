import React from 'react';

import { Container, Title, Description, LeftSide, RightSide, ScrollToTop } from './banner-one.styles';

import { MdSend } from 'react-icons/md';

const BannerOne= () => {

    return (
        <Container>
            <LeftSide>
                <Title className='left'>STYLEZ</Title>
                
                <Description>
                FOR
                </Description>

                <Title className='push-right'>HER</Title>
            </LeftSide>
           
            <RightSide>
                <Title className='right'>HIM</Title>

                <Description className="right">
                FOR
                </Description>

                <Title className='push-left'>STYLEZ</Title>

                
            </RightSide>
        </Container>
    )
}

export default BannerOne
