import styled from 'styled-components'

export const CategoryViewContainer = styled.div`
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px; */

    display: flex;
    flex-wrap: wrap;
    gap: 30px 10px;
    padding: .5% 5vw;

    @media (width < 1325px) {
		justify-content: center;
	}
`

export const TitleContainer = styled.div`
    .title {
        margin: 11.5vh 0 30px 5vw;
    }
`