import styled from 'styled-components'

export const HeaderMessageContainer = styled.div`
	position: relative;
	z-index: 50;
	background-color: maroon;
	width: 100vw;
	height: clamp(25px, 70px, 5vh);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 30px 2vw;
	text-align: center;

	@media only screen and (max-width: 999px) {
		display: none;
	}
`

export const Left = styled.div`
	display: flex;
	align-items: center;
	color: white;
`

export const Center = styled.div`
	display: flex;
	justify-content: center;
	color: white;
`

export const Right = styled.div`
	display: flex;
	flex-direction: row;
	color: white;
	justify-content: flex-end;
`
