import styled from 'styled-components'

export const DropdownContainer = styled.div`
	position: absolute;
	z-index: 1;
	width: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-top: 1px solid rgb(216, 214, 214);
	background-color: white;
	box-shadow: 0 5px 5px 0 rgba(36, 31, 31, 0.5);
	top: 75px;
	right: 10vw;
	opacity: 1;
	max-height: ${({ isOpen }) => (isOpen ? '320px' : '0')};
	transition: max-height .3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	scrollbar-width: thin;

	.cart-item {
		&:hover {
			transition: background-color .5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
			background-color: lightgrey;
			cursor: pointer;
		}
	}
`

export const EmptyMessage = styled.div`
	font-size: 18px;
	margin: 50px auto;
	transition: all .3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`

export const ButtonContainer = styled.div`
	position: relative;
	width: 100%;
	padding-top: 20px;
	opacity: ${({ hasItems }) => (hasItems ? '1' : '0')};
	transition: opacity .3s cubic-bezier(0.25, 0.45, 0.45, 0.95) ;

	#dropdown-button {
		width: 100%;
	}
`
