import styled from 'styled-components'

export const CartIconContainer = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 720px) {
        left: -3em;
    }

    .shopping-icon {
        width: 30px;
        height: 30px;
        margin-top: -5px;
    }

    .item-count {
        position: absolute;
        font-size: 12px;
        font-weight: bold;
        bottom: 10px;
    }
`