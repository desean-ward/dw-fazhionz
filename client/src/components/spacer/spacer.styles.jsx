import styled from 'styled-components'

export const SpacerContainer = styled.div`
    position: relative;
    z-index: 50;
    width: 100vw;
    height: 10vh;
    background-color: white;
    border: none;
`

export const HeroSpacerContainer = styled.div`
    position: relative;
    z-index: 50;
    width: 100vw;
    height: 10vh;
    background-color: white;
    border: none;

    @media ( orientation: portrait) {
        display: none;
    }

    /* @media only screen and (max-width: 900px) and (min-height: 400px) {
		display: none;
	} */
`