import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	z-index: 1000;
	height: 100vh;
	width: 100vw;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(000, 000, 000, 0.8);
	opacity: 0;
	visibility: hidden;
	font-family: 'Poppins', sans-serif;
	transition: all .3s ease-in-out;

	&.show {
		visibility: visible;
		opacity: 1;
	}
`

export const Modal = styled.div`
	position: absolute;
	z-index: 1000;
	width: calc(15rem + 15vw);
	height: fit-content;
	background-color: rgba(070, 000, 000, 1);
	//background-color: rgba(255, 255, 255, 0.3);
	//background-color: maroon;
	//backdrop-filter: blur(5px);
	color: white;
	border: 1px solid rgba(255, 255, 255, 0.5);
	//border-left: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 20px;
	//box-shadow: 2px 5px 30px rgba(255, 255, 255, 0.4);
	//box-shadow: 2px 2px 7px black;
	padding: 20px 20px;

	.exit {
		font-size: 28px;
		position: absolute;
		right: 10px;
		top: 10px;
		cursor: pointer;

		&:hover {
			color: grey;
		}
	}

	/* &::before {
        content: '';
        //margin: -15px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: maroon;
        filter: blur(65px);
        opacity: .8;
        z-index: -1;
    } */
`

export const Title = styled.h3`
	text-align: center;
	top: 40px;
`
export const TitleBG = styled.h1`
	font-size: 50px;
	font-weight: 700;
	text-align: center;
	padding-bottom: 40px;
	color: rgba(255, 255, 255, 0.3);
`

export const Content = styled.p`
	position: relative;
	padding: 20px 0;
	font-size: 16px;
	text-align: center;
`
