import styled from "styled-components";

export const TimerContainer = styled.section`
	position: sticky;
    top: 0;
    padding-left: 3em;
	width: 100vw;
	height: 100vh;
    //margin-top: 50vh;
    background-color: black;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        ' timer hourglass ';
    place-items: center center;
    //z-index: -1;

	h2 {
		font-weight: 600;
	}

    /* @media screen and (max-width: 50em) {
        height: 30vh;
        padding-left: .5em;
    }

    @media screen and (max-width: 30em) {
        padding-left: .5em;
    } */
`;

export const Timer = styled.section`
    grid-area: 'timer';
	position: absolute;
	color: white;
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    gap: 10px;
    margin-left: -8em;
    z-index: 1;

    /* @media screen and (max-width: 30em) {
        width: 90%;
        margin-left: -10px;
        
	} */
`;

export const TimerContent = styled.div`
    grid-area: 'content';
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;

	p {
		color: maroon;
		font-size: 2rem;
        margin-bottom: 20px;
	}
    
    /* @media screen and (max-width: 30em) {

} */
`;

export const TimeSpan = styled.div`
    grid-area: 'time';
	border: 1px solid white;
	border-radius: 5px;
    height: 100px;
    font-size: 1.2rem;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	padding: 0 1em 0 .2em;
	text-align: center;
    place-content: center center;

    p {
        margin-bottom: -1px;
    }
`;

export const Hourglass = styled.div`
position: absolute;
margin-left: 32em;
grid-area: 'hourglass';
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url("../../images/hourglass.jpg");
background-position: center;
background-size: fit;
background-repeat: no-repeat;
height: 340px;

@media screen and (max-width: 70em) {
    right: -1em;
}

@media screen and (max-width: 50em) {
    right: -12em;
}

@media screen and (max-width: 30em) {
    top: 1.2em;
    right: .1em;
}
`;

export const Time = styled.section``;
