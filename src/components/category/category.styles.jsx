import styled from 'styled-components'

export const CategoryContainer = styled.div`
	width: 100vw;
	padding: 0 0.5%;

	@media (width < 1325px) {
		text-align: center;
	}

	.title {
		margin: 12vh 0 0 5vw;
		width: 100%;

		@media (width < 1325px) {
			margin: 0;
		}
	}

	.view-all {
		margin-left: 5vw;
		font-size: smaller;

		&:hover {
			color: maroon;
			cursor: pointer;
		}

		@media (width < 1325px) {
			margin: 0;
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
    gap: 30px 10px;
    padding: .5% 5vw;

	@media (width < 1325px) {
		/* width: 92.5vw; */

		justify-content: center;
	}
`
