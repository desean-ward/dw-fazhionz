import styled from 'styled-components'

export const CartIconContainer = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    /* top: 5px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    cursor: pointer;

    .shopping-icon {
        width: 30px;
        height: 30px;
    }

    .item-count {
        position: absolute;
        font-size: 12px;
        font-weight: bold;
        bottom: 6px;
    }
`