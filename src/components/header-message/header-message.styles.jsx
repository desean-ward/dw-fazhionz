import styled from 'styled-components'

export const HeaderMessageContainer = styled.div`
	position: relative;
	z-index: 50;
	background-color: maroon;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 5px 0;
	text-align: center;
	font-size: smaller;
`

export const Left = styled.div`
	@media only screen and (max-width: 999px) {
		display: none;
	}
`

export const Center = styled.div`
	@media only screen and (max-width: 999px) {
		display: none;
	}
`

export const Right = styled.div`
`
