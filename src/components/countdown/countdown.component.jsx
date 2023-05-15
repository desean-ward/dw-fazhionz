import React, { useState, useRef, useEffect } from "react";

import NewArrivals from "../new-arrivals/new-arrivals.component";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
	Time,
	Timer,
	TimerContainer,
	Title,
	TimerContent,
	TimeSpan,
    Hourglass
} from "./countdown.styles";

const variants = {
    visible: { opacity: 1, blur: 0, transition: { duration: 1.2, delay: 0.4 } },
    hidden: { opacity: 0, blur: 10, transition: { duration: 1.2, delay: 0.4 } },
    exit: { opacity: 0, transition: { duration: 1.2, delay: 0.4 } }
}

const leftVariants = {
    visible: { opacity: 1, x: 0, blur: 0, transition: { duration: 1, delay: 0.4 } },
    hidden: { opacity: 0, x: -100, blur: 100, transition: { duration: 1, delay: 0.4 } },
    exit: { opacity: 0, x: -100, transition: { duration: 1, delay: 0.4 } }
};

const rightVariants = {
    visible: { opacity: 1, x: 0, blur: 0, transition: { duration: 1, delay: 0.4 } },
    hidden: { opacity: 0, x: 100, blur: 10, transition: { duration: 1, delay: 0.4 } },
    exit: { opacity: 0, x: 100, transition: { duration: 1 } }
};


const Countdown = () => {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");

	let interval = useRef();

	const startTimer = () => {
		

		interval = setInterval(() => {
			const now = new Date();
			const daysUntilEndSale = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (6 - now.getDay()), 23, 59, 59) - now;

			const days = Math.floor(daysUntilEndSale / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(daysUntilEndSale % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(daysUntilEndSale % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((daysUntilEndSale % (1000 * 60)) / 1000);
			if (daysUntilEndSale < 0) {
				// stop the timer
				clearInterval(interval.current);
			} else {
				// update the timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}

			//console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until Monday at midnight`);
		}, 1000);

		
	};

	useEffect(() => {
		startTimer();

		return () => {
			clearInterval(interval.current);
		};
	}, []);

	const controls = useAnimation();
    const [ref, inView] = useInView();

	// const timerRef = useRef()
	// const hGlassRef = useRef()

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        } else {
            controls.start("exit");
        }
    }, [controls, inView]);


	return (
		<>
			<TimerContainer>
				<motion.div
				ref={ref}
				animate={controls}
				initial="hidden"
				variants={variants}
				exit="exit"
				>
					<Title className='timer-title'><h2 className='fat-face'>15% OFF NEW ARRIVALS</h2></Title>
				</motion.div>
				
				<Timer>
					<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={leftVariants}
					exit="exit"
					>
						<TimerContent>
							<h3 className='maroon'>SALE ENDS SATURDAY AT MIDNIGHT</h3>
							<TimeSpan>
								{/**** DAYS ****/}
								<Time>
									<p>{timerDays}</p>
									<p>
										<small>Days</small>
									</p>
								</Time>

								

								{/**** HOURS ****/}
								<Time>
									<p>{timerHours}</p>
									<p>
										<small>Hours</small>
									</p>
								</Time>

								{/**** MINUTES ****/}
								<Time>
									<p>{timerMinutes}</p>
									<p>
										<small>Minutes</small>
									</p>
								</Time>

								{/**** SECONDS ****/}
								<Time>
									<p>{timerSeconds}</p>
									<p>
										<small>Seconds</small>
									</p>
								</Time>
							</TimeSpan>
						</TimerContent>
					</motion.div>

					<motion.div
						ref={ref}
						animate={controls}
						initial="hidden"
						variants={rightVariants}
						exit="exit"
						>
						<Hourglass />
					</motion.div>
				</Timer>
			
			</TimerContainer>
		</>
	);
};

export default Countdown;
