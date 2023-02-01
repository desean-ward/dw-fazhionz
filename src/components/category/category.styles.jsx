import styled from 'styled-components'

export const CategoryContainer = styled.div`
	width: 100vw;
	padding: 0 0.5%;

	.title {
		margin: 12vh 0 0 10px;
		width: 100%;
	}

	.view-all {
		margin-left: 10px;
		font-size: smaller;

		&:hover {
			color: maroon;
			cursor: pointer;
		}
	}
`

export const Preview = styled.div`
	/* margin-top: 3vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	justify-content: center; */

	display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 10px;
    margin-left: 15px;
    padding: .5%;

	@media only screen and (max-width: 800px) {
		width: 92.5vw;
	}
`
