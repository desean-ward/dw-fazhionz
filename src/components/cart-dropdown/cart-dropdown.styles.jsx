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
    right: 4rem;
    opacity: 1;

    @media (max-width: 1000px) {
        top: 6rem;
        right: 5rem;
    }

    @media (max-width: 720px) {
        top: 3rem;
        display: flex;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (width < 640px) {
        top: 2.75rem;
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
    margin: 50px auto;
`

export const ButtonContainer = styled.div`
    width: 100%;
	margin-top: 20px;
    display: ${(props) => props.hasItems ? 'grid' : 'none'};
    place-content: center;
`
