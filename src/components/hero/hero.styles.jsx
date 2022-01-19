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
		width: auto;
		height: 80%;

		&.logo {
			z-index: 1;
			animation: scale 1s linear;
		}

		&.logo-images {
			visibility: hidden;
			border-radius: 20px;

			&.left{
				left: 30vw;
				animation: 
					slide-out-left .5s linear .7s,
					glow .5s linear 1.2s;
				animation-fill-mode: forwards;
			}

			&.right {
				right: 30vw;
				animation: 
					slide-out-right .5s linear .7s,
					glow .5s linear 1.2s;
				animation-fill-mode: forwards;
			}
		}
	}

	@keyframes scale {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1)
		}
	}

	@keyframes slide-out-left {
		0% {
			//transform: translateX(0);
			visibility: hidden;
			
		}
		100% {
			transform: translateX(-15vw);
			visibility: visible;
		}
	}

	@keyframes slide-out-right {
		0% {
			visibility: hidden;
		}
		100% {
			transform: translateX(15vw);
			visibility: visible;
		}
	}

	@keyframes glow {
		0% {
			//box-shadow: 0 0 10px maroon;
		}
		50% {
			//box-shadow: 0 0 20px 10px maroon;
			opacity: .3;
		}
		100% {
			//box-shadow: 0 0 10px maroon;
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
