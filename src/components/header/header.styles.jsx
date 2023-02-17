import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const getMaxHeight = (isOpen) => {
	console.log(isOpen)
	return isOpen ? '250px' : '0px'
}

export const HeaderTop = styled.div``

export const HeaderContainer = styled.div`
	position: sticky;
	z-index: 60;
	top: 0;
	padding: 5px 15%;
	height: 100%;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	transition: transform 0.5s ease;

	&.shadow {
		filter: drop-shadow(0 1px 8px black);
	}

	@media (max-width: 1100px) {
		flex-wrap: wrap;
		justify-content: center;
		font-size: smaller;
		padding: 5px 5%;

		/* @media only screen and (orientation: portrait) {
			height: 10vh;
			top: 0;
			padding-top: 10px;
		} */
	}

	@media (max-width: 640px) {
		flex-wrap: nowrap;
		justify-content: space-between;
	}
`

export const Left = styled.div`
	display: flex;
	/* width: 40%; */
	align-items: start;
	justify-content: start;

	
	@media only screen and (max-width: 721px) {
		flex-direction: row;
		justify-content: start;
		align-items: start;
		width: 75%;

		@media only screen and (orientation: portrait) {
			flex-direction: column-reverse;

			.search {
				margin-left: -2.5px;
				margin-top: 5px;
				width: 100%;
				border-radius: 0%;
			};

			.search-input {
				width: 75%;
				visibility: visible;
			}

			.language {
				margin-top: 15px;
				margin-left: -25px;
			}

			.close-icon {
				display: none;
			}
		}
	}
`

export const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	/* width: 60%; */

	@media (width < 1100) {
		justify-content: space-around;
	}

	&.cart-icon {
		position: relative;
		display: flex;
		margin: auto 0;

		/* @media only screen and (max-width: 1000px) {
			position: absolute;
			right: 0;
			top: 12px; 

			@media only screen and (orientation: portrait) {
			}
		}

		@media only screen and (max-width: 600px) {
			right: 5%;
			top: 0;
		}

		@media only screen and (max-width: 400px) {
			right: 7.5%;
			top: 0px;

			@media only screen and (max-height: 700px) {
				top: 6px;
			}
		} */
	}

	@media (max-width: 1100px) {
		width: 100%;
		justify-content: wrap;
		align-items: center;
	}

	@media (width < 720px) {
		width: 25%;
	}


    /* @media only screen and (max-width: 600px) {   
	    padding-top: 10px;
    } */
`

export const TitleContainer = styled(Link)`
	display: flex;
	align-content: center;
	left: 50px;
	font-weight: 600;
	font-style: italic;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 0px;
	margin-left: 0px;
	z-index: 1;
`

export const Language = styled.span`
	display: flex;
	align-items: center;
	color: #212529;
	position: relative;
	height: 40px;

	@media only screen and (max-width: 720px) {
		display: none;
	}
`

export const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 5px;
	margin-left: 12px;
	background-color: white;
	border-radius: 50%;
	box-shadow: 0 0 5px 1px grey;
	margin-top: 5px;
	height: 26px;
	width: 26px;
	transition: 500ms width ease-in-out, 500ms padding ease-in-out,
		500ms border-radius ease-in-out;

	//**  open state  **//
	&.search-open {
		width: 21rem;
		border-radius: 0;

		.close-icon {
			z-index: 1;
		}

        @media only screen and (max-width: 600px) {
            width: 18rem;
        }

		@media only screen and (max-width: 400px) {
            width: 15rem;
			font-size: 16px;
        }
	}

	&.show {
		display: inline-block;
	}

	.search-icon {
		position: absolute;
		margin-left: -2px;
		cursor: pointer;
		visibility: visible;
	}

	.delete-icon {
		position: relative;
		left: 12px;
		z-index: -2;
		cursor: pointer;
	}

	.close-icon {
		position: sticky;
		z-index: -1;
		left: 100%;
		cursor: pointer;
	}
`

export const Input = styled.input`
	position: relative;
	left: 35px;
	height: 24px;
	width: 80%;
	border: none;
	outline: none;
	background-color: transparent;
	visibility: hidden;

	&:not(:placeholder-shown) ~ .delete-icon {
		z-index: 1;
	}
`

export const OptionsContainer = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: start;
	justify-content: space-evenly;
`

export const OptionsContainerStyles = css`
	position: relative;
	padding: 10px 15px;
	cursor: pointer;
	margin-left: 5px;
	min-width: fit-content;
`

export const OptionLine = styled.div``

export const OptionLink = styled(Link)`
	${OptionsContainerStyles}

	:hover {
		color: maroon;
	}

	::after {
		content: '';
		display: flex;
		flex: 1 1;
		position: absolute;
		z-index: 100;
		width: 80%;
		left: 10%;
		margin: 5px auto;
		height: 0.175rem;
		background-color: maroon;
	}

	&.btn-ctr::after {
		transform: scale(0, 1);
		transition: transform 0.3s ease;
	}

	&.btn-ctr:hover::after {
		transform: scale(1, 1);
	}

	/* @media only screen and (orientation: portrait) {
		left: -30px;
		top: 10px;
	} */
		

	/* @media only screen and (max-width: 620px), (max-height: 600px) {
		display: none;
	} */

	@media only screen and (max-width: 720px) {
		display: none;
	}
`

export const HamburgerContainer = styled.div`
	position: relative;
	width: 30px;
	height: 20px;
	background: #fff;
	right: 5%;
	cursor: pointer;
`
export const Bars = styled.div`
	width: 30px;
	height: 4px;
	background: #000;

	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 30px;
		height: 4px;
		background: #000;
	}

	&::before {
		margin-top: 9px;
	}

	&::after {
		margin-top: 18px;
	}
`

export const ScrollToTop = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 100;
	align-content: end;
	top: 0;
	right: 60px;
	height: 50px;
	width: 50px;
	color: white;
	background-color: maroon;
	border: 1px solid white;
	box-shadow: 4px 2px 4px black;
	border-radius: 10%;
	cursor: pointer;
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	transition: top 0.5s ease;

	&.active {
		visibility: visible;
		opacity: 1;
		top: 90vh;

		@media only screen and (max-height: 800px) {
			top: 85vh;
		}

		@media only screen and (orientation: portrait) {
			top: 92.5vh;

			@media only screen and (max-width: 640px) {
				right: 20px;
			}
		}
	}

	&.arrow {
		height: 70px;
		width: 70px;
	}

	&.animateArrow {
		top: 0;
	}

	&:hover {
		background-color: white;

		.arrow {
			color: maroon;
		}
	}
`
