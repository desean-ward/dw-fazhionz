import styled, { css } from 'styled-components';

export const Wrapper = css`
    width: clamp(20rem, 50vw, 70rem);
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`

export const LogoContainer = styled.div`
	position: absolute;
	z-index: 50;
	//height: clamp(30vh, 85vh, 100vh);
	width: 100%;
	height: 60vh;
	display: grid;
	grid-template-columns: 1fr;
	place-items: center;
	background-color: white;
    opacity: 1;
	bottom: 1em;
	//overflow: hidden;


	img {
		position: absolute;
		width: 100%;
		height: 40%;
		object-fit: contain;

		&.logo {
			grid-area: logo;
			animation: scale 1s linear;
			width: 75%;
			height: 70%;

			@media (max-width: 900px) {
				height: 30vh;
				width: 100%;
			}
			z-index: 2;
		}
		&.burst {
			z-index: 20;
			width: 60%;
			height: 90%;
			opacity: 0;
			animation: flash2 1s linear 1.9s;
		}

		&.burst2 {
			z-index: 20;
			width: 80%;
			height: 90%;
			opacity: 0;
			transform: rotate(45deg);
			animation: flash3 1s linear 2.4s;
		}

		&.logo-images {
			position: absolute;
			visibility: hidden;
			border-radius: 20px;
			width: auto;
			height: 75%;

			&.left{
				grid-area: left;
				left: 50%;
				animation: 
					slide-out-left .5s linear .7s,
					flash .5s linear 1.2s;
				animation-fill-mode: forwards;
			}

			&.right {
				grid-area: right;
				right: 50%;
				animation: 
					slide-out-right .5s linear .7s,
					flash .5s linear 1.2s;
				animation-fill-mode: forwards;
				
			}
			

			@media only screen and (max-width: 900px) and (orientation: portrait) {
				top: 4em;
				height: 45%;
				width: 50%
			}
		}

	}

	@keyframes scale {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1)
		}
	}

	@keyframes slide-out-left {
		0% {
			visibility: hidden;
			
		}
		100% {
			transform: translateX(-45vw);
			visibility: visible;
		}
	}

	@keyframes slide-out-right {
		0% {
			visibility: hidden;
		}
		100% {
			transform: translateX(45vw);
			visibility: visible;
		}
	}

	@keyframes flash {
		0% {
			opacity: 1;
		}
		50% {
			opacity: .2;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes flash2 {
		0% {
			opacity: 1;
		}
		50% {
			opacity: .1;
		}
		100% {
			opacity: 0;
		}
	}
`

export const Container = styled.div`
    position: relative;
    z-index: 50;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 90px;
	//overflow: hidden;
    margin-bottom: -60vh;

	@media (width < 1000px) {
		margin-bottom: -80vh;
	}

   ${ Wrapper }

/*    @media only screen and (max-height: 900px) and (max-width: 1000px) {
       height: 85vh;

       @media only screen and (max-height: 450px) {
           height: 100vh;
           margin-bottom: -20vh;
       }
   }

   @media only screen and (max-width: 900px) and (max-height: 1100px) {
      height: 75vh;

      @media only screen and (max-width: 450px) {
          height: 85vh;
      }
   }
 */`


export const Title = styled.h3`
    left: 0;
`

export const Message = styled.p`
`

export const InputContainer = styled.form`
   	position: relative;
    display: flex;
    flex-direction: column;
	width: 100%;
	max-width: 800px;
    //width: clamp(40em, 50em + 1vw, 70em);
	//height: 100vh;
    margin-top: 4em;
	//overflow-x: hidden;

    input, textarea {
        border-radius: 5px;
		border: 1px solid black;

		padding: .5em;
    }

    .highlight {
        border: 2px solid maroon;
		outline: none;
        box-shadow: 1px 1px 4px maroon;

		::placeholder {
			color: maroon;
			font-weight: stronger;
		}
    }
`

export const NameInput = styled.input`
    margin-bottom: 20px;
    outline: none;
    height: 40px;
    padding-left: 10px;
    
    :focus, :hover {
        //background-color: transparent;
        border: 2px solid black;
    }
`

export const EmailInput = styled.input`
    margin-bottom: 20px;
    outline: none;
    height: 40px;
    padding-left: 10px;

    :focus, :hover {
       // background-color: transparent;
       border: 2px solid black;
    }
`

export const SubjectInput = styled.input`
    margin-bottom: 20px;
    outline: none;
    height: 40px;
    padding-left: 10px;
    
    :focus, :hover {
        //background-color: transparent;
        border: 2px solid black;
    }
`

export const MessageInput = styled.textarea`
    height: 160px;
    margin-bottom: 20px;
    resize: none;
    outline: none;
    padding-left: 10px;

    :focus, :hover {
        //background-color: transparent;
        border: 2px solid black;
    }

    @media screen and (max-width: 800px) {
        margin-bottom: 0px;
    }
`

export const ButtonSend = styled.div`
    display: flex;
    justify-content: flex-end;
    width: fit-content;
    border: none;
    background: transparent;
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 20px;

    @media screen and (max-width: 800px) {
        margin-bottom: 10px;
    }
`