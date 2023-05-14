import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NewArrivalsContainer = styled.div`
    position: sticky;
    top: 4em;
    width: 100%;
    height: 100vh;
    background-color: maroon;
    color: white;
    z-index: 50;
    overflow: hidden;
`

export const NewArrivalsContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2em;
    color: white;
    text-shadow: 5px 5px 0 limegreen;
    transform: rotate(45deg);
    white-space: nowrap;

    .move-left {
        animation: move-left 6000ms linear infinite;
    }

    .move-right {
        animation: move-right 5000ms linear infinite;
    }
`

export const TextScroll = styled(motion.h2)`
    white-space: nowrap;

    .move-left {
        animation: move-left 5000ms linear infinite;
    }

    

    @keyframes move-left {
        0% {
            transform: translate(50%);
        }
        100% {
            transform: translate(-50%)
        }
    }

    @keyframes move-right {
        0% {
            transform: translate(-50%);
        }
        100% {
            transform: translate(50%)
        }
    }
`