import styled from 'styled-components'

export const SignInContainer = styled.div`
    max-width: 440px;
    display: flex;
    flex-direction: column;

    .title {
        margin: 10px 0;
    }

    .buttons {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-items: space-between;
        gap: 1em;
        width: 70%;

        @media (width < 540px) {
            
            flex-direction: column;
        }

        span {
            width: 100%;
            text-align: center;
        }
    } 

    .logo {
        width: 50px;
        height: 50px;
    }

     img {
        object-fit: contain;
        width: 50px;
        height: 50px;
        padding-right: 10px;
    }
`


   