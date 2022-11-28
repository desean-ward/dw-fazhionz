import styled from 'styled-components'


export const DirectoryContainer = styled.div`
    position: relative;
	z-index: 50;
	width: 100vw;
	height: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 10vh;

	@media only screen and (max-width: 1100px) and (orientation: portrait) {
		padding-bottom: 0;
	}
`

export const DirectoryMenu = styled.div`
    position: relative;
	width: 80vw;
	height: 100%;
	top: 0;
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	align-content: center;

	// @media screen and (max-width: 800px) {
	//     margin-top: -120px;;
	// }
`