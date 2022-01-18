import React, { useState, useRef, useEffect } from "react";

import {
	Time,
	Timer,
	TimerContainer,
	TimerContent,
	TimeSpan,
    Hourglass
} from "./countdown.styles";

const Countdown = () => {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");

	let interval = useRef();

	const startTimer = () => {
		/**** Set count down date to 7 days from now ****/
		const countdownDate = new Date().getTime() * 1.0003675;

		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				// stop the time
				clearInterval(interval.current);
			} else {
				// update the timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	useEffect(() => {
		startTimer();

		return () => {
			clearInterval(interval.current);
		};
	}, []);

	return (
		<TimerContainer>
			<Timer>
				<TimerContent>
					<h2>15% OFF NEW ARRIVALS</h2>
					<p>SALE ENDS IN:</p>
				</TimerContent>

				<TimeSpan>
					{/**** DAYS ****/}
					<Time>
						<p>{timerDays}</p>
						<p>
							<small>Days</small>
						</p>
					</Time>

					<span>:</span>

					{/**** HOURS ****/}
					<Time>
						<p>{timerHours}</p>
						<p>
							<small>Hours</small>
						</p>
					</Time>

					<span>:</span>

					{/**** MINUTES ****/}
					<Time>
						<p>{timerMinutes}</p>
						<p>
							<small>Minutes</small>
						</p>
					</Time>

					<span>:</span>

					{/**** SECONDS ****/}
					<Time>
						<p>{timerSeconds}</p>
						<p>
							<small>Seconds</small>
						</p>
					</Time>
				</TimeSpan>
			</Timer>

            <Hourglass />
		</TimerContainer>
	);
};

export default Countdown;
