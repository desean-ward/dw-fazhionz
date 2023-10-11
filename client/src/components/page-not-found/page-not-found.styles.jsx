import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    margin-bottom: -75vh;
    background-image: url('../../images/mobile-nav-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`
export const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: maroon;
    opacity: 0.7;
    display: grid;
    place-items: center;
`
export const Content = styled.section`
    color: white;
    text-align: center;
`

