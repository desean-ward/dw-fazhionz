import styled from 'styled-components';


export const Container = styled.div`
    position: relative;
    z-index: 1;
    display: grid;
    width: 100vw;
    height: 90vh;
    grid-template-columns: repeat(3, max(350px));
    grid-template-areas:
        'left  center  right';

    gap: 80px;
    justify-content: center;
    margin-top: 80vh;
    padding-top: 5%;
    background-color: white;


    @media screen and (max-width: 700px) {
        padding: 0px;
        font-size: 20px;

        flex-direction: column;
        margin-top: 20px;
    }
`;

export const Left = styled.div`
    grid-area: left;
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
`;

export const Logo = styled.h3`
   
`;

export const Description = styled.p`
    margin-bottom: 20px;
    width: auto;
`;

export const SocialContainer = styled.div`
    display: flex;
    padding-bottom: 20px;
`;

export const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

export const Center = styled.div`
    grid-area: center;
    position: absolute;

    /* @media screen and (max-width: 700px) {
        padding-right: 10px;
        margin-top: 20px;
    } */
`;

export const Title = styled.h3`
    margin-bottom: 30px;
    font-weight: bolder;
`;

export const List = styled.ul`
    margin: 0;
    width: 95%;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const Right = styled.ul`
    grid-area: right;
    position: absolute;
`;

export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

export const Payment = styled.img`
    width: 100%;
`;