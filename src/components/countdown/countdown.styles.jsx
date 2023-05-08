import styled from 'styled-components'

export const TimerContainer = styled.section`
	position: sticky;
	z-index: 50;
	top: 0;
	width: 100%;
	height: 100vh;
	background-color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5em;
	overflow: hidden;

	@media  (width < 770px) {
		//height: 100vh;
		grid-template-columns: 1fr;
		grid-template-areas:
			'    title    '
			'  hourglass  '
			'    timer   ';
		gap: 40px;
	}
`

export const Title = styled.div`
	grid-area: 'title';
	text-align: center;
	color: white;
	width: 100%;
`

export const Timer = styled.div`
	grid-area: 'timer';
	position: relative;
	width: 100%;
	color: white;
	display: flex;
    flex-wrap: wrap;
	align-items: center;
	justify-content: center;
    gap: 2em;

	/* @media screen and (max-width: 30em) {
        width: 90%;
        margin-left: -10px;
        
	} */
`

export const TimerContent = styled.div`
	position: relative;
	grid-area: 'content';
	gap: 40em;
	text-align: center;
	justify-content: center;

	p {
		margin-bottom: 20px;
	}
`

export const TimeSpan = styled.div`
	grid-area: 'time';
	border: 1px solid white;
	border-radius: 5px;
	padding: 1em 1.5em 1em 0;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;

	p {
		margin-bottom: -1px;
		padding-left: 10px;
	}

	@media (max-width: 900px) {
		width: 90%;
	}
`

export const Hourglass = styled.div`
	position: relative;
	grid-area: 'hourglass';
	width: 6.5rem;
	background-image: url('../../images/hourglass.jpg');
	background-position: center;
	background-size: fit;
	background-repeat: no-repeat;
	height: 340px;
	//margin-left: 4em;

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
`

export const Time = styled.section``
