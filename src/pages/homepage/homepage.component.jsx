import React from 'react';
import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';
import Carousel from '../../components/carousel/carousel.component';
import Newsletter from '../../components/newsletter/newsletter.component';

const HomePage = () => (
    <HomePageContainer>
        <Carousel />
       <Directory />
       <Newsletter />
    </HomePageContainer>
);

export default HomePage;