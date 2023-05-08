import styled from 'styled-components'

export const CategoryViewContainer = styled.div`
    position: relative;
	width: 100%;
	top: 0;
	left: 0;

    .category-view {
        width: 100%;
        display: flex;
        margin-bottom: -5vw;

        .category-content {
            margin: 0 auto;
            max-width: 1310px;
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            gap: .5em;

            @media (width < 1305px) {
                width: 976px;
            }

            @media (width < 976px) {
                justify-content: center;

                > :last-child {
                    left: -160px;
                }
            }

            @media (max-width: 648px) {
                > :last-child {
                    
                    left: 0;
                }
            }

        }
    }

`

export const TitleContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1300px;
    margin-top: 9.5vh;

    @media (width < 976px) {
        text-align: center;
    }

    h2 {
        display: inline;
        margin-right: .5em;
    }
`