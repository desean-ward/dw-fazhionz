import styled from 'styled-components';

export const HeaderMessageContainer = styled.div`
    background-color: maroon;
    width: 100vw;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 60px;
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    //position: fixed;
    //z-index: 200;
`;

export const Center = styled.div`
    flex: 1 1;
    display: flex;
    justify-content: center;
    color: white;

    @media screen and (max-width: 800px) {
        flex: 1 1;
        padding: 10px;
        font-size: 14px;
    }

`;

export const Right = styled.div`
    flex: 1 1;
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: flex-end;
    padding-right: 20px;
`;

