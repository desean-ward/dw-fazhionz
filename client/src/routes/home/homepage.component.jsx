import React, { lazy, Suspense } from "react";

import AnimatedPage from "../../components/animated-page/animated-page.component";

import { HomePageContainer } from "./homepage.styles";
import { Products } from "../../components/new-arrivals/product.styles";
import Suspend from "../../components/suspend/suspend.component";

const Hero = lazy(() => import("../../components/hero/hero2.component"));
const BannerOne = lazy(() =>
  import("../../components/banner-one/banner-one.component")
);
const Carousel = lazy(() =>
  import("../../components/carousel/carousel.component")
);
const Directory = lazy(() =>
  import("../../components/directory/directory.component")
);
const Countdown = lazy(() =>
  import("../../components/countdown/countdown.component")
);
const Newsletter = lazy(() =>
  import("../../components/newsletter/newsletter.component")
);
const WomanBackground = lazy(() =>
  import("../../components/woman-background/woman-background.component")
);

const Home = () => {
  return (
    <AnimatedPage>
      <HomePageContainer>
        {/* Hero */}
        <Suspend>
          <Hero />
        </Suspend>

        {/* Banner One */}
        <Suspend>
          <BannerOne />
        </Suspend>

        {/* Carousel */}
        <Suspend>
          <Carousel />
        </Suspend>

        {/* Directory */}
        <Suspend>
          <Directory />
        </Suspend>

        {/* Countdown */}
        <Suspend>
          <Countdown />
        </Suspend>

        {/* Products */}
        <Suspend>
          <Products />
        </Suspend>

        {/* Newsletter */}
        <Suspend>
          <Newsletter />
        </Suspend>

        <WomanBackground />
      </HomePageContainer>
    </AnimatedPage>
  );
};

export default Home;
