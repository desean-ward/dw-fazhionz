import React from 'react'

import Directory from '../../components/directory/directory.component'
import { HomePageContainer } from './homepage.styles'
import Carousel from '../../components/carousel/carousel.component'
import Newsletter from '../../components/newsletter/newsletter.component'
import Countdown from '../../components/countdown/countdown.component'
import { Products } from '../../components/new-arrivals/product.styles'
import Hero from '../../components/hero/hero2.component'
import BannerOne from '../../components/banner-one/banner-one.component'
import WomanBackground from '../../components/woman-background/woman-background.component'
import AnimatedPage from '../../components/animated-page/animated-page.component'
import Spacer from '../../components/spacer/spacer.component'
import HeroSpacer from '../../components/spacer/hero-spacer.component'


const Home = () => {
	return (
		<AnimatedPage>
			<HomePageContainer>
				<Hero  />
				<HeroSpacer/>
				<Spacer />
				<BannerOne />
				<Spacer />
				<Carousel />
				<Spacer />
				<Directory />
				<Spacer />
				<Countdown />
				<Products />
				<Newsletter />
				<WomanBackground />
			</HomePageContainer>
		</AnimatedPage>
	)
}

export default Home
