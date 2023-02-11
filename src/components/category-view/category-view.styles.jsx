import styled from 'styled-components'

export const CategoryViewContainer = styled.div`
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px; */
    //position: relative;
    display: flex;
    flex-wrap: wrap;
    //justify-content: center;
    gap: 30px 10px;
    padding: .5% 8.5%;
    width: 100vw;
    

    @media (width < 1325px) {
		justify-content: center;
	}
`

export const TitleContainer = styled.div`
    width: 100%;
    //text-align: left;

    .title {
        //width: 83%;
		margin-top: 9.5vh;
        margin-left: -3.5px;

        @media (width < 1325px) {
            text-align: center;
           // margin: 11.5vh 0 30px 0;
        }
    }

    
`