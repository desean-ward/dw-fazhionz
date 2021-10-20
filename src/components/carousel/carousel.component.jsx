import React, { useState } from 'react';

import { Container, ArrowContainer, LeftArrow, RightArrow, Wrapper, Slide, ImageContainer, Image, InfoContainer, Title, Description, Button, ButtonContainer } from './carousel.styles';

import CustomButton from '../../components/custom-button/custom-button.component';

import { sliderItems } from './data.js';



const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>

            <ArrowContainer direction="left" onClick={() => handleClick("left")}>
                <LeftArrow />
            </ArrowContainer>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                 
                <Slide>
                    <ImageContainer>
                        <Image src={ item.img }>
                        </Image>
                    </ImageContainer>

                    <InfoContainer>
                        <Title>
                        { item.title }
                        </Title>

                        <Description>
                        { item.desc }
                        </Description>

                        <ButtonContainer to="/shop">
                            <CustomButton>
                            SHOP NOW
                            </CustomButton>
                        </ButtonContainer>
                    </InfoContainer>
                </Slide>
                ))
            }
            </Wrapper>

            <ArrowContainer direction="right" onClick={() => handleClick("right")}>
                <RightArrow />
            </ArrowContainer>

        </Container>
    )
}

export default Carousel
