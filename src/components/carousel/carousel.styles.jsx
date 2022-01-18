import styled from 'styled-components'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'

import { Link } from 'react-router-dom'

export const Container = styled.div`
	width: 100vw;
	//height: 100vh;
	display: flex;
	position: relative;
	height: 100%;
	//padding: 1vh 0 1vh 0;
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
	

	@media screen and (max-width: 800px) {
		height: 50vh;
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
	top: 10px;
	bottom: 0;
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 5;
	transition: all 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

	&:hover {
		transform: scale(1.05);
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
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`

export const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;

	@media screen and (max-width: 800px) {
		height: 50vh;
	}
`

export const ImageContainer = styled.div`
	height: 76%;
	width: 60%;
`

export const Image = styled.div`
	height: 100%;
	width: 100%;
	background-image: url(${(props) => props.backgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 10px;
`

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
    padding-left: 50px;
    width: 40vw;
	gap: 40px;

    /* @media screen and (max-width: 800px) {
        margin-top: -95px;
    } */
`

export const Title = styled.h1`
	font-size: 60px;
	/* @media screen and (max-width: 800px) {
		font-size: 50px;
	} */
`

export const Description = styled.p`
	//margin: 40px 0 60px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;

	/* @media screen and (max-width: 800px) {
		font-size: 15px;
	} */
`

export const ButtonContainer = styled(Link)`
	//position: absolute;
	width: 165px;
	height: 55px;
`

export const CarouselNav = styled.div`
	position: absolute;
	z-index: 1;
	display: flex;
	gap: 10px;
	left: 40%;
	bottom: 0;
	justify-content: center;
	align-content: center;
	width: 20%;
	height: 40px;
`

export const NavIndicator = styled.div`
	display: inline-block;
	width: 5%;
	height: 50%;
	border-radius: 50%;
	background-color: black;
	cursor: pointer;

	#active {
		background-color: maroon;
	}
`
