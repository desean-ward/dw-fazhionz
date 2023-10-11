import React, { lazy, Suspense } from 'react'

import AnimatedPage from '../../components/animated-page/animated-page.component'

import { HomePageContainer } from './homepage.styles'
import { Products } from '../../components/new-arrivals/product.styles'


const Hero = lazy(() => import('../../components/hero/hero2.component'))
const BannerOne = lazy(() => import ('../../components/banner-one/banner-one.component'))
const Carousel = lazy(() => import('../../components/carousel/carousel.component'))
const Directory = lazy(() => import('../../components/directory/directory.component'))
const Countdown = lazy(() => import('../../components/countdown/countdown.component'))
const Newsletter = lazy(() => import('../../components/newsletter/newsletter.component'))
const WomanBackground = lazy(() => import('../../components/woman-background/woman-background.component'))

const Home = () => {
	return (
		<AnimatedPage>
			<Suspense>
				<HomePageContainer>
					<Hero  />
					<BannerOne />
					<Carousel />
					<Directory />
					<Countdown />
					<Products />
					<Newsletter />
					<WomanBackground />
				</HomePageContainer>
			</Suspense>
		</AnimatedPage>
	)
}

export default Home
