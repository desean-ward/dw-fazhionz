import styled from 'styled-components'

export const DropdownContainer = styled.div`
	position: absolute;
    width: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-top: 1px solid rgb(216, 214, 214);
    background-color: white;
    box-shadow: 0 5px 5px 0 rgba(36, 31, 31, 0.5);
    top: 55px;
    margin-left: 500px;
    opacity: 1;

    @media (width < 1100px) {
        top: 85px;
        left: 8.5%;
    }

    @media (width < 900px) {
        left: -4.25%;
    }

    @media (width < 720px) {
        margin: 0 28%;
        top: 50px;
    }
`

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	scrollbar-width: thin;
`

export const EmptyMessage = styled.div`
	font-size: 18px;
    margin: 50px auto;
`

export const ButtonContainer = styled.div`
    width: 100%;
	margin-top: 20px;
    display: ${(props) => props.hasItems ? 'grid' : 'none'};
    place-content: center;
`
