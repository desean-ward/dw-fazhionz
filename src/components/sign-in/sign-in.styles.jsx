import styled from 'styled-components'

export const SignInContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;

    .title {
        margin: 10px 0;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        justify-items: space-between;
        gap: 10px;
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

    @media (max-width: 1100px) {
        margin-bottom: 60px;
        width: 90vw;
    }
`


   