import styled, { css } from 'styled-components'

export const Container = styled.div`
	position: relative;
	z-index: 50;
	height: 25rem;
	width: 100%;
	color: white;
	font-size: clamp(1.4rem, 0.9789rem + 1.3474vw, 3rem);
	display: flex;
	flex-direction: row;
	overflow-x: hidden;
	padding: 0 6em;

	@media only screen and (max-width: 1100px) and (orientation: portrait) {
		//height: 30vh;
	}

	@media only screen and (max-width: 600px) {
		//font-size: smaller;
	}

	@media (width < 481px) {
		height: 200px;
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

export const LeftSide = styled.span`
	${ SlideIn };

	position: absolute;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 0 4rem;
	left: 0;
	width: 50%;
	height: 100%;
	clip-path: polygon(0 0, 100% 0%, 60% 100%, 0 100%);
	background-color: maroon;

	
	h1 {
		&.left {
			border-top: 1px solid white;
			border-bottom: none;

			@media(width < 481px) {
				position: relative;
				right: 20%;
			}
		}
	}
`

export const RightSide = styled.span`
	${ SlideIn };

	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 4rem;
	right: 0;
	width: 50%;
	height: 100%;
	clip-path: polygon(40% 0, 100% 0%, 100% 100%, 0 100%);
	background-color: grey;
`

export const Title = styled.h1`
	width: 60%;
	
	&.left {
		border-top: 1px solid white;
	}

	&.push-right {
		text-align: right;
		color: lightgrey;
		font-weight: bolder;
		border-bottom: 2px solid;

		@media(width < 481px) {
			position: relative;
			left: 15%;
		}
	}

	&.right {
		color: maroon;
		margin-left: 45%;
		width: 55%;
		text-align: right;
		border-top: 1px solid;
		border-bottom: none;

		@media (width < 481px) {
			margin-left: 65%;
		}
		
	}

	&.push-left {
		margin-left: 35%;
		border-bottom: 2px solid;
		left: -30px;

		@media (width < 481px) {
			margin-left: 2%;
		}
	}
`

export const Description = styled.div`
	position: relative;
	font-size: 32px;
	font-weight: 400;
	left: 25%;

	&.right {
		text-align: center;
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



