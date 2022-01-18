import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const LogoContainer = styled.div`
	position: relative;
	height: 80vh;
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr;
	place-items: center;
	background-color: white;

	img {
		position: absolute;
		object-fit: contain;
		width: 80%;
		height: 80%;

		&.logo {
			position: absolute;
			z-index: 1;
		}
	}
`

export const ScrollToTop = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1500;
	align-content: end;
	top: 0;
	right: 40px;
	height: 50px;
	width: 50px;
	color: white;
	background-color: maroon;
	border: 1px solid white;
	box-shadow: 4px 2px 4px black;
	border-radius: 50%;
	cursor: pointer;
	visibility: hidden;
	opacity: 0;
	transition: opacity .3s ease-in-out;
	transition: top .5s ease;

	&.active {
		visibility: visible;
		opacity: 1;
		top: 90vh;
	}

	&.arrow {
		height: 70px;
		width: 70px;
	}

	&.animateArrow {
		top: 0;
	}

	&:hover {
		background-color: white;

		.arrow {
			color: maroon;
		}
	}
`
