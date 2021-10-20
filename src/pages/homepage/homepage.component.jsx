import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';
import Carousel from '../../components/carousel/carousel.component';
import Newsletter from '../../components/newsletter/newletter.component';
import Footer from '../../components/footer/footer.component';

/* Create a functional component 'HomePage' (does not store lifecycle methods or state) */
const HomePage = () => (
    <HomePageContainer>
        <Carousel />
       <Directory />
       <Newsletter />
    </HomePageContainer>
);

export default HomePage;