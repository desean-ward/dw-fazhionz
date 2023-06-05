import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const BannerContainer = styled.div`
	position: relative;
	z-index: 50;
	//height: 20em;
	max-height: 250px;
	width: 100%;
	color: white;
	font-weight: bolder;
	display: flex;
	align-items: center;
	overflow: hidden;
	
	.square {
		
		// @media (width <= 680px) {
		// 	.fat-face {
		// 		width: 100%;
		// 		//font-size: clamp(2rem, 5vw, 4rem);
		// 	}

		// 	.right-stylez {
		// 		right: 0.25em;
		// 	}
		// }
	}

	@media (width <= 720px) {
		//font-size: 12px;
			
		
	}
`
export const SlideIn = css`
	.hidden {
		opacity: 0;
		filter: blur(5px);
		left: 100%;
		transition: all 3s;
	}

	.show {
		opacity: 1;
		filter: blur(0);
		left: 0;
		transition: all 3s;
	}
`

export const LeftSide = styled(motion.span)`
	${ SlideIn };

	//position: relative;
	left: 0;
	width: 50%;
	padding: 5% 2em;
	clip-path: polygon(0 0, 100% 0%, 50% 100%, 0 100%);
	background-color: maroon;

	.left-side-content {
		width: 55%;
	}

	@media (width <= 900px) {

		// &.left-her {
		// 	position: relative;
		// 	left: 4rem;
		// }
	}
`

export const RightSide = styled(motion.span)`
	${ SlideIn };

	//position: relative;
	right: 0;
	width: 50%;
	padding: 5% 2em;
	clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0 100%);
	background-color: grey;

	.right-side-content {
		position: relative;
		width: 100%;
		top: 0;
		left: 0;
		margin-left: auto;
		width: 55%;
	}
`

export const Title = styled.h2`
	width: 6em;

	&.left-stylez {
		position: relative;
		border-top: 1px solid white;
	}

	&.left-her {
		position: relative;
		width: 100%;
		//left: 1.5em;
		text-align: right;
		color: grey;
		border-bottom: 2px solid;
	}

	&.right-him {
		position: relative;
		width: 100%;
		color: maroon;
		text-align: right;
		border-top: 1px solid;
	}

	&.right-stylez {
		position: relative;
		text-align: right;
		border-bottom: 2px solid;

		
	}

	@media (width <= 700px) {
		&.right-stylez {
			right: 2em;
		}

		&.left-stylez {
			right: 1em;
		}

		&.left-her {
			right: 1em;
		}

		&.right-him {
			left: 1em;
		}
		
	}

	// @media (width <= 1440px) {
	// 	&.left-her, &.right-stylez {
	// 		margin-left: -4rem;
	// 		width: 100%;
	// 	}
	// }

	// @media (width <= 900px) {

	// 	&.left-her {
	// 		left: 2em;
	// 	}

	// 	&.right-stylez {
	// 		//left: -0.5em;
	// 	}

	// 	&.left-stylez {
	// 		left: -0.5em;
	// 	}

	// 	&.right-him {
	// 		right: -0.5em;
	// 	}

	// 	@media (width <= 900px) {
			

			
	// 	}
	}
`

export const Description = styled.div`
	position: relative;
	//font-weight: 400;
	//left: 25%;

	text-align: center;

	&.right {
		//text-align: center;
	}

	@media (width < 481px) {
		margin-top: -12%;
	}

	/* KEYFRAMES */
	@keyframes slide-in-left {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(50%);
		}
	}
	
`



