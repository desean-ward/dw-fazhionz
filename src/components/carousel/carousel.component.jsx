import React, { useState, useEffect, useRef } from 'react'

import {
	Container,
	ArrowContainer,
	LeftArrow,
	RightArrow,
	Wrapper,
	Slide,
	ImageContainer,
	Image,
	InfoContainer,
	Title,
	Description,
	ButtonContainer,
	CarouselNav,
	NavIndicator,
} from './carousel.styles'

import CustomButton from '../../components/custom-button/custom-button.component'

import { sliderItems } from './data.js'
import { truncateSync } from 'fs'

const Carousel = () => {
	const [slideIndex, setSlideIndex] = useState(0)
	const [slideImg, setSlideImg] = useState('')
	const [slideNav, setSlideNav] = useState(0)
	const previousIndex = null
	const [isActive, setIsActive] = useState(false)
	const [isLoading, setIsLoading] = useState(null)

	const slideRef = useRef([])
	const navRef = useRef([])
	slideRef.current = []
	navRef.current = []

	const imgContainerRef = useRef(null)
	const imgRef = useRef(null)
	const prevArrowRef = useRef(null)
	const nextArrowRef = useRef(null)
	const titleRef = useRef(null)
	const descRef = useRef(null)
	const btnContainerRef = useRef(null)
	const btnRef = useRef(null)

	//const firstClone = { ...sliderItems[slideIndex] }
	//const lastClone = { ...sliderItems[sliderItems.length - 1] }

	//firstClone.id = 'first-clone'
	//lastClone.id = 'last-clone'
 
	useEffect(() => {
		setIsLoading(true)
		if (sliderItems.length === 0) {
			return
		}

		const allLoading = document.querySelectorAll('.loading')
		const allHidden = document.querySelectorAll('.hidden')

		for (let i = 0; i < allLoading.length; i++) {
			allLoading[i].classList.remove('loading')
		}

		for (let i = 0; i < allHidden.length; i++) {
			allHidden[i].classList.remove('hidden')
		}

		setIsLoading(false)
	}, [])


	/********** Handles the carousel navigation buttons **********/
	useEffect(() => {
		const interval = setInterval(() => {
			handleClick('right')
		}, 5000)


		updateSelection()

		return () => clearInterval(interval)

	}, [{ Carousel }])
	/***********************************************************/
	

	const handleClick = (direction) => {
		if (direction === 'left') {
			setSlideIndex(() => (slideIndex > 0 ? slideIndex - 1 : 3))
			/* const lastClone = sliderItems.pop();
			sliderItems.unshift(lastClone); */
		} else {
			const firstClone = sliderItems[slideIndex];
			/* sliderItems.push(firstClone);
			sliderItems.shift(sliderItems[0]) */
			setSlideIndex(() => (slideIndex < 3 ? slideIndex + 1 : 0))
		}
	}

	const updateSelection = () => {
		for (let i = 0; i < sliderItems.length; i++) {
			if (i === slideIndex) {
				navRef.current[i].style.backgroundColor = 'maroon'
			} else {
				navRef.current[i].style.backgroundColor = 'black'
			}
		}
	}

	const addToSlideRefs = (el) => {
		if (el && !slideRef.current.includes(el)) {
			slideRef.current.push(el)
		}
	}

	const addToNavRefs = (el) => {
		if (el && !navRef.current.includes(el)) {
			navRef.current.push(el)
		}
	}

	return (
		<Container>
			{/********** LEFT ARROW **********/}
			<ArrowContainer
				ref={prevArrowRef}
				className='loading'
				direction='left'
				onClick={() => handleClick('left')}>
				<LeftArrow className='maroon' />
			</ArrowContainer>

			{/********** CAROUSEL **********/}
			<Wrapper id='wrapper' slideIndex={slideIndex} sliderItems={sliderItems}>

				{/********** SLIDES **********/}
				{sliderItems.map((item) => (
					<Slide key={item.id} ref={addToSlideRefs}>
						{/********** SLIDE IMAGE **********/}
						<ImageContainer
							ref={imgContainerRef}
							className='img-container loading'>
							<Image
								ref={imgRef}
								className=''
								backgroundImage={item.img}
							/>
						</ImageContainer>

						{/********** SLIDE INFO **********/}
						<InfoContainer>
							<Title ref={titleRef} className='loading'>
								<h2 className='maroon fat-face'>
									{item.title}
								</h2>
							</Title>

							<Description ref={descRef} className='loading'>
								DON'T COMPROMISE ON STYLE!
								<br />
								GET <span className='maroon'>15% OFF</span> ON
								NEW ARRIVALS.
							</Description>

							{/********** SHOP NOW BUTTON **********/}
							<ButtonContainer
								ref={btnContainerRef}
								className='btn-container loading'
								to='/shop'>
								<CustomButton className='custom-button hidden'>
									SHOP NOW
								</CustomButton>
							</ButtonContainer>
						</InfoContainer>
					</Slide>
				))}
				
				
			</Wrapper>

			{/********** RIGHT/NEXT  ARROW **********/}
			<ArrowContainer
				ref={nextArrowRef}
				className='loading'
				direction='right'
				onClick={() => handleClick('right')}>
				<RightArrow className='maroon' />
			</ArrowContainer>

			{/********** CAROUSEL NAV BUTTONS **********/}
			<CarouselNav id='carousel-nav'>
				{sliderItems.map((item) => (
					<NavIndicator
						key={item.id}
						id={slideIndex}
						ref={addToNavRefs}
						onClick={() => setSlideIndex(item.id - 1)}
						className='loading'
					/>
				))}
			</CarouselNav>
			
			
		</Container>
	)
}

export default Carousel
