import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	//top: 58vh;
	//height: 100vh;
	z-index: 50;
	width: 100%;
	color: white;
	background-color: maroon;
	box-shadow: 0 3px 10px black;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	
	.content {
		background-color: maroon;
		width: 100%;
		padding: 2rem 0 4rem 0;

	}

	@media only screen and (max-width: 770px) and (orientation: portrait) {
		margin-top: 80vh;
	}
	

	/* @media screen and (max-width: 800px) and (max-height: 700px) {
		//height: 70vh;
		margin-top: 60px;
	} */
`

export const Title = styled.h1`
	//font-size: 70px;
	margin-bottom: 20px;
	//margin-top: -40px;
	//margin-left: -10px;

	/* @media screen and (max-width: 800px) {
		font-size: 50px;
	} */
`

export const Description = styled.div`
	//font-size: 24px;
	font-weight: 300;
	text-align: center;
	margin-bottom: 20px;
`

export const InputContainer = styled.form`
	position: relative;
	height: 40px;
	width: 60%;
	background-color: white;
	display: flex;
	margin: 0 auto;
	border: 1px solid lightgrey;

	@media only screen and (max-width: 480px) {
		width: 80%;
	}
`

export const Input = styled.input`
	border: none;
	outline: none;
	flex: 8;
	padding-left: 20px;
	width: 60%;
`

export const Button = styled.button`
    flex: 1;
    background-color: white;
`
