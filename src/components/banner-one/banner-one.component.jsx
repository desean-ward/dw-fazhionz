import React, { useEffect, useRef } from 'react';

import { PropagateLoader } from 'react-spinners';

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { BannerContainer, Title, Description, LeftSide, RightSide, ScrollToTop } from './banner-one.styles';

const leftVariants = {
    visible: { opacity: 1, x: 0, blur: 0, transition: { duration: 1, delay: 1 } },
    hidden: { opacity: 0, x: -100, blur: 5, transition: { duration: 1, delay: 1 } },
    exit: { opacity: 0, x: -100, transition: { duration: 1 } }
};

const rightVariants = {
    visible: { opacity: 1, x: 0, blur: 0, transition: { duration: 1, delay: 1 } },
    hidden: { opacity: 0, x: 100, blur: 5, transition: { duration: 1, delay: 1 } },
    exit: { opacity: 0, x: 100, transition: { duration: 1 } }
};

const leftClipPath = {
    visible: {
        clipPath: "polygon(0% 0, 100% 0%, 50% 100%, 0 100%)",
        transition: { duration: 1, delay: 0.2 }
      },
      hidden: {
        clipPath: "polygon(100% 0, 100% 0, 0% 100%, 0 100%)",
        transition: { duration: 1, delay: 0.2 }
      },
      exit: {
        clipPath: "polygon(100% 0, 100% 0, 0% 100%, 0 100%)",
        transition: { duration: 1 }
      }
}

const rightClipPath = {
    visible: {
        clipPath: "polygon(50% 0, 100% 0%, 100% 100%, 0 100%)",
        transition: { duration: 1, delay: 0.2 }
      },
      hidden: {
        clipPath: "polygon(100% 0, 100% 0, 0% 100%, 0 100%)",
        transition: { duration: 1, delay: 0.2 }
      },
      exit: {
        clipPath: "polygon(100% 0, 100% 0, 0% 100%, 0 100%)",
        transition: { duration: 1 }
      }
}

const BannerOne= () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [leftRef, leftInView] = useInView();
    const [rightRef, rightInView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        } 
       
    }, [controls, inView]);

    useEffect(() => {
        if (leftInView) {
        controls.start("visible");
        } 
    }, [controls, leftInView]);

    useEffect(() => {
        if (rightInView) {
        controls.start("visible");
        } 
    }, [controls, rightInView]);
    

    return (
        <BannerContainer name='banner-container'>
                <LeftSide 
                    name='left-side'
                    ref={leftRef}
                    animate={controls}
                    initial="hidden"
                    variants={leftClipPath}
                    exit="exit"
                >
                    <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={leftVariants}
                    exit="exit"
                    className="square"
                    >
                        <div className="left-side-content">
                            <Title className='left-stylez fat-face'>STYLEZ</Title>
                            
                            <Description>
                                <p>FOR</p>
                            </Description>

                            <Title className='left-her fat-face'>HER</Title>
                        </div>
                    </motion.div>
                </LeftSide>

                <RightSide 
                    name='right-side'
                    ref={rightRef}
                    animate={controls}
                    initial="hidden"
                    variants={rightClipPath}
                    exit="exit"
                >
                    <motion.div
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={rightVariants}
                        exit="exit"
                        className="square"
                    >
                        <div className='right-side-content'>
                            <Title className='right-him fat-face'>HIM</Title>

                            <Description className="right">
                                <p>FOR</p>
                            </Description>

                            <Title className='right-stylez fat-face'>STYLEZ</Title>
                        </div>

                    </motion.div>
                </RightSide>
        </BannerContainer>
    )
}

export default BannerOne
