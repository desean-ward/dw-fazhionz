import React from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";
import Carousel from "../../components/carousel/carousel-2.component";
import Newsletter from "../../components/newsletter/newsletter.component";
import Countdown from "../../components/countdown/countdown.component";
import { Products } from "../../components/new-arrivals/product.styles";
import Hero from "../../components/hero/hero.component";
import BannerOne from "../../components/banner-one/banner-one.component";
import WomanBackground from "../../components/woman-background/woman-background.component";
import AnimatedPage from "../../components/animated-page/animated-page.component";
import Spacer from "../../components/spacer/spacer.component";
import CarouselSpacer from "../../components/spacer/carousel-spacer.component";

const Home = () => {
  return (
    <AnimatedPage>
      <HomePageContainer>
        <Hero />
        <Spacer />
        <BannerOne />
        <Spacer />
        <Carousel />
        <Directory />
        <Spacer />
        <Countdown />
        <Products />
        <Newsletter />
        <WomanBackground />
      </HomePageContainer>
    </AnimatedPage>
  );
};

export default Home;
