import styled from 'styled-components'

export const CategoryItemContainer = styled.div`
    position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 340px;
	width: 320px;
	align-items: center;
	position: relative;
	margin: 0 0 75px 0px;

	&:hover {
		.image {
			opacity: 0.8;
			transform: scale(1.025);
		}

		.btn-container {
			opacity: 1;
		}
	}
`

export const ImageContainer = styled.div`
    width: 100%;

    .loading {
	position: relative;
	background-color: #e2e2e2;
	color: #0000;
	background-image: linear-gradient(90deg, transparent, maroon, transparent);
	background-size: 200% 100%;
	overflow: hidden;
	animation: loading 1.5s linear infinite;
	opacity: 0.6;

	@keyframes loading {
		from {
			background-position: 0;
		}
		to {
			background-position: -200%;
		}
	}

	
	&.image {
		height: 350px;
	}

	&.name,
	&.price {
		//top: 10px;
		padding-bottom: 10px;
	}
}
`

export const Image = styled.div`
    width: 320px;
    height: 320px;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 1;
    visibility: hidden;
	transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
`

export const ButtonContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out;

    .custom-button {
		opacity: 1;
		position: absolute;
		bottom: 50px;
		margin: 0 auto;
		background-color: maroon;
		color: white;
		outline: none;
		border: none;
		font-size: 20px;

		@media screen and (max-width: 800px) {
			display: block;
			opacity: 0.9;
			min-width: unset;
			padding: 0px 10px;
		}
	}

    .custom-button:hover {
			background-color: white;
			color: maroon;
			outline: 1px solid maroon;
		

		&:active {
			color: grey;
			outline: 1px solid grey;
		}
    }

    @media only screen and (max-width: 600px) {
        opacity: 1;
        visibility: visible;
    }
`

export const FooterContainer = styled.div`
    position: relative;
    width: 95%;
    height: 5%;
    display: flex;
	justify-content: space-between;
    
    @media only screen and (max-width: 600px) {
       /* font-size: 22px; */
    }
`