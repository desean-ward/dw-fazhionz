import styled from 'styled-components'

export const CategoryViewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px 10px;
    padding: .5% 8.5%;
    width: 100vw;

    @media (width < 1325px) {
		justify-content: center;
	}
`

export const TitleContainer = styled.div`
    width: 100%;

    .title {
		margin-top: 9.5vh;
        margin-left: -3.5px;

        @media (width < 1325px) {
            text-align: center;
        }
    }

    
`