import styled from 'styled-components'

export const DirectoryContainer = styled.div`
	position: relative;
	padding-top: 2rem;
	z-index: 50;
	width: 100%;
	//height: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	h2 {
		color: maroon;
	}

	@media only screen and (max-width: 1100px) and (orientation: portrait) {
		//padding-bottom: 0;
	}
`

export const DirectoryMenu = styled.div`
	position: relative;
	width: 80%;
	//height: 100%;
	top: 0;
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	align-content: center;
	padding-bottom: 5rem;
`
