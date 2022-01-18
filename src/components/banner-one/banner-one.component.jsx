import React from 'react';

import { Container, Title, Description, LeftSide, RightSide, ScrollToTop } from './banner-one.styles';

import { MdSend } from 'react-icons/md';

const BannerOne= () => {

    return (
        <Container>
            <LeftSide>
                <Title className='left'>STYLES</Title>
                
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

                <Title className='push-left'>STYLES</Title>

                
            </RightSide>
        </Container>
    )
}

export default BannerOne
