import styled from "styled-components";

export const TimerContainer = styled.section`
	position: sticky;
    z-index: 50;
    top: 10vh;
	width: 100vw;
	height: 100vh;
    background-color: black;
    display: grid;
    grid-template-columns: 450px 150px;
    grid-template-areas:
        ' timer hourglass ';
    place-content: center;
    overflow: hidden;

	h2 {
		font-weight: 600;
	}

    @media screen and (max-width: 770px) and (orientation: portrait) {
        height: 100vh;
        grid-template-columns: 1fr;
        grid-template-areas: 
            '  hourglass  '
            '    timer   ';
        gap: 40px;
        padding-top: 10vh;
    }
`;

export const Timer = styled.section`
    grid-area: 'timer';
	position: relative;
    top: -8vh;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    gap: 10px;

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
    align-items: center;
    justify-content: center;

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
	padding: 0 1em 0 .4em;
	text-align: center;
    place-content: center;

    p {
        margin-bottom: -1px;
        padding-left: 10px;
    }

    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`;

export const Hourglass = styled.div`
    position: relative;
    grid-area: 'hourglass';
    top: -8vh;
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

/* @media screen and (max-width: 70em) {
    right: -1em;
}

@media screen and (max-width: 50em) {
    right: -12em;
}

@media screen and (max-width: 30em) {
    top: 1.2em;
    right: .1em;
} */
`;

export const Time = styled.section``;
