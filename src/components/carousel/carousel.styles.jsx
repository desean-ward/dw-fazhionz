import styled from 'styled-components'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'

import { Link } from 'react-router-dom'

export const Container = styled.div`
	z-index: 50;
	width: 100%;
	height: 35rem;
	display: flex;
	position: relative;
	overflow: hidden;
	background: white;

	.hidden {
		visibility: hidden;
	}

	.loading {
		background-color: #e2e2e2;
		color: #0000;
		background-image: linear-gradient(90deg, white, maroon, white);
		background-size: 200% 100%;
		overflow: hidden;
		animation: loading 1.5s linear infinite;
		opacity: 0.6;
		pointer-events: none;

		@keyframes loading {
			to {
				background-position: -200%;
			}
		}
	}

	@media (width < 900px) {
		//padding-bottom: 5rem;
	}
`

export const ArrowContainer = styled.div`
	width: 50px;
	height: 50px;
	background-color: lightgrey;
	border-radius: 10%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: 50%;
	//bottom: 0;
	left: ${(props) => props.direction === 'left' && '25px'};
	right: ${(props) => props.direction === 'right' && '25px'};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 1;
	transition: all 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

	&:hover {
		transform: scale(1.05);
		opacity: 1;
	}

	@media (width < 1400px) {
		top: 30%;
		opacity: 1;
	}
	
`

export const LeftArrow = styled(MdArrowLeft)`
	height: 100px;
	width: 100px;
`

export const RightArrow = styled(MdArrowRight)`
	height: 100px;
	width: 100px;
`

export const Wrapper = styled.div`
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);

	@media only screen and (max-width: 1100px) and (orientation: portrait) {
		//height: 65vh;
	}
`

export const Slide = styled.div`
	width: 100vw;
	height: 100%;
	//height: clamp(25vh, 75vh + 1vh, 80vh);
	display: flex;
	align-items: center;

	@media (width < 1100px) {
		flex-direction: column;
		padding 4rem 0;
	}
`

export const ImageContainer = styled.div`
	height: 80%;
	width: 50%;

	@media (width < 1100px) {
		width: 90%;
		//height: 50%;
	}

	/* @media only screen and (max-width: 1080px) and (orientation: portrait) {
		//height: 30%;
	} */
`

export const Image = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	background-image: url(${(props) => props.backgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 10px;

	@media only screen and (max-width: 1180px) {
		background-size: cover;
	}
`

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	//justify-content: space-around;
	padding-left: 50px;
	width: 40vw;
	gap: 2rem;

	@media screen and (max-width: 1100px) {
		width: 95%;
		padding-left: 20px;
		gap: 5px;
		//margin-top: 60px;
		/* @media screen and (orientation: portrait) {
			padding-left: 0;
			margin-top: 20px;
			height: 20vh;
		} */
	}
`

export const Title = styled.h2`
	//font-size: 4rem;
`

export const Description = styled.p`
	//font-weight: 500;
	letter-spacing: 3px;
`

export const ButtonContainer = styled(Link)`
	height: 55px;

	/* @media only screen and (max-width: 900px) and (min-height: 400px) {
		&.custom-button {
			width: 30vw;
			padding: 0;
		}
	} */
`

export const CarouselNav = styled.div`
	position: absolute;
	z-index: 1;
	display: flex;
	gap: 10px;
	z-index: 100;
	bottom: 0;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;

	@media (max-width: 900px) {
		//display: none;
	}
`

export const NavIndicator = styled.div`
	display: inline-block;
	width: 1rem;
	height: 50%;
	border-radius: 50%;
	background-color: black;
	cursor: pointer;

	#active {
		background-color: maroon;
	}

	/* @media only screen and (max-width: 900px) and (min-height: 400px) {
		width: 12%;
		height: 60%;
	} */
`
