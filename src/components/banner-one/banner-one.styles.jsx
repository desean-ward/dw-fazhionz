import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	height: 50vh;
	width: 100%;
	color: white;
	display: flex;
	//align-items: center;
	//justify-content: center;
	flex-direction: row;
`

export const LeftSide = styled.span`
	position: absolute;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 20px;
	//align-items: center;
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
	//padding: 2rem 60px;
	right: 0;
	width: 50vw;
	height: 100%;
	clip-path: polygon(40% 0, 100% 0%, 100% 100%, 0 100%);
	background-color: grey;
	//text-align: right;

	h1 {
		
		
	}
`

export const Title = styled.h1`
	width: 60%;
	font-size: 70px;
	
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
		margin-left: 41%;
		width: 55%;
		text-align: right;
		border-top: 1px solid;
		border-bottom: none;
		
	}

	&.push-left {
		margin-left: 35%;
		border-bottom: 2px solid;
	}
	

	@media screen and (max-width: 800px) {
		font-size: 50px;
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



