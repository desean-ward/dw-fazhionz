import styled from 'styled-components'

export const CheckoutPageContainer = styled.div`
    width: 100%;
    padding: 0 15%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-bottom: -75vh;
    margin-top: 4em;
    scrollbar-width: thin;

    @media (width <= 900px) {
        padding: 0 5%;
    }

    // @media screen and (max-width: 900px) {
    //     position: relative;
    //     width: 85vw;
    //     min-height: 60vh;
    //     //height: 100vh;
    //     top: -5vh;
    //     margin-bottom: -80vh;
    // }
`

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    //height: 40%;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: left;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
        text-transform: capitalize;
        width: 20%;

        &.description {
            position: relative;
            //left: -30px;
        }

        &:last-child {
            width: 12%;
        }
    }

    @media only screen and (max-width: 800px) {
        font-size: clamp(0.8rem, 2.4vw, 2rem);
    }
`

export const CartItemsContainer = styled.div`
    //min-height: 10vh;
    //max-height: 50vh;
    margin-top: 20px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    
    
`

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    //font-size: 36px;
    border-top: 1px solid black;

    @media only screen and (max-width: 600px) {
        //font-size: 28px;
    }
`

export const CheckoutMessageContainer = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;

    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`

export const ButtonContainer = styled.div`
    margin-left: auto;
    margin-top: 10px;
`