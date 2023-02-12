import styled from 'styled-components'

export const CategoryContainer = styled.div`
	width: 100vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0.5% 3.5%;

	@media (width < 1325px) {
		text-align: center;
	}

	.title {
		width: 90%;
		margin-top: 9.5vh;
	}

	.view-all {
		width: 90%;

		&:hover {
			color: maroon;
			cursor: pointer;
		}
	}
`

export const Preview = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 30px 10px;
	padding: 0.5% 5vw;
	margin-bottom: -5vw;

	@media (width < 1325px) {
		justify-content: center;
	}
`
