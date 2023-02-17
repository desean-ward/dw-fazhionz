import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	z-index: 50;
	height: 30vh;
	width: 100vw;
	margin-top: 35vh;
	color: white;
	background-color: maroon;
	box-shadow: 0 3px 10px black;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-top: 20px;

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
	margin-top: -40px;
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
	background-color: white;
	display: flex;
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
	width: 70%;
`

export const Button = styled.button`
    flex: 1;
    background-color: white;
`
