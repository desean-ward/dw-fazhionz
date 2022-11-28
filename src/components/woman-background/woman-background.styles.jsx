import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    
    @media only screen and (max-width: 770px) {
      //position: relative;
      //z-index: 1;
    }

    /* @media only screen and (max-width: 900px) and (min-height: 400px) {
		height: 100vh;
        width: 100%;
        top: 10%;
        background-size: contain;
	  } */
`

export const Woman = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
`