import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	z-index: 50;
	height: clamp(2vh, 120em, 50vh);
	width: 100vw;
	color: white;
	display: flex;
	flex-direction: row;
	overflow-x: hidden;

	@media only screen and (max-width: 1100px) and (orientation: portrait) {
		height: 30vh;
	}

	@media only screen and (max-width: 600px) {
		font-size: smaller;
	}
`

export const LeftSide = styled.span`
	position: absolute;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 20px;
	left: 0;
	width: 50vw;
	height: 100%;
	clip-path: polygon(0 0, 100% 0%, 60% 100%, 0 100%);
	background-color: maroon;

	h1 {
		&.left {
			border-top: 1px solid white;
			border-bottom: none;
		}
	}
`

export const RightSide = styled.span`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	right: 0;
	width: 50vw;
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
	}

	&.right {
		color: maroon;
		margin-left: 45%;
		width: 55%;
		text-align: right;
		border-top: 1px solid;
		border-bottom: none;
		
	}

	&.push-left {
		margin-left: 35%;
		border-bottom: 2px solid;
		left: -30px;
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
	
`



