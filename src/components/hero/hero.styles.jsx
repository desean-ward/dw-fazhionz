import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const LogoContainer = styled.div`
	position: relative;
	z-index: 50;
	height: clamp(30vh, 85vh, 100vh);
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr;
	place-items: center;
	background-color: white;

	@media only screen and (max-width: 1100px) and (orientation: portrait) {
		height: 50vh;
		overflow: hidden;
	}

	img {
		position: absolute;
		width: 100vw;
		height: 100%;

		&.logo {
			grid-area: logo;
			animation: scale 1s linear;
			width: 75%;
			height: 70%;

			@media only screen and (max-width: 1100px) and (orientation: portrait) {
				height: 30vh;
				width: 100%;
			}
			z-index: 2;
		}

		&.logo-images {
			position: absolute;
			visibility: hidden;
			border-radius: 20px;
			width: auto;
			height: 75%;

			&.left{
				grid-area: left;
				left: 50%;
				animation: 
					slide-out-left .5s linear .7s,
					glow .5s linear 1.2s;
				animation-fill-mode: forwards;
			}

			&.right {
				grid-area: right;
				right: 50%;
				animation: 
					slide-out-right .5s linear .7s,
					glow .5s linear 1.2s;
				animation-fill-mode: forwards;
				
			}

			@media only screen and (max-width: 1100px) and (orientation: portrait) {
				top: 35vh;
				height: 60%;
				width: 50%
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
			visibility: hidden;
			
		}
		100% {
			transform: translateX(-45vw);
			visibility: visible;
		}
	}

	@keyframes slide-out-right {
		0% {
			visibility: hidden;
		}
		100% {
			transform: translateX(45vw);
			visibility: visible;
		}
	}
`