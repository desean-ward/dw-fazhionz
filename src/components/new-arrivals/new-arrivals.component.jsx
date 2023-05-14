import React, { useEffect } from 'react'

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { NewArrivalsContainer, NewArrivalsContent, TextScroll } from './new-arrivals.styles'

const NewArrivals = () => {

    const scrollRightVariants = {
        hidden: { x: 0, y: 0, opacity: 0, transition: { duration: 1 } },
        visible: {x: 100, y: 100, opacity: 1, transition: { duration: 1 } },
        exit: {x: 0, y: 0, opacity: 0, transition: { duration: 1 }}
    }

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        } else {
            controls.start("exit");
        }
    }, [controls, inView]);


  return (
        <NewArrivalsContainer
            ref={ref}
        >
            <NewArrivalsContent>
                <TextScroll                
                    className='fat-face move-left'
                >
                    NEW ARRIVALS -- NEW ARRIVALS -- NEW ARRIVALS --               
                </TextScroll>

                <TextScroll                
                    className='fat-face move-right' 
                >
                    NEW ARRIVALS -- NEW ARRIVALS -- NEW ARRIVALS --
                </TextScroll>

                <TextScroll                
                    className='fat-face move-left'
                >
                    NEW ARRIVALS -- NEW ARRIVALS -- NEW ARRIVALS --
                </TextScroll>

                <TextScroll                
                    className='fat-face move-right'
                >
                    NEW ARRIVALS -- NEW ARRIVALS -- NEW ARRIVALS --
                </TextScroll>
            </NewArrivalsContent>
        </NewArrivalsContainer>            
       


  )
}

export default NewArrivals