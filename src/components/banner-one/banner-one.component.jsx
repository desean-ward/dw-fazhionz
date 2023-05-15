import React, { useEffect } from 'react';

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { BannerContainer, Title, Description, LeftSide, RightSide, ScrollToTop } from './banner-one.styles';

const leftVariants = {
    visible: { opacity: 1, x: 0, blur: 0, transition: { duration: 1, delay: 0.2 } },
    hidden: { opacity: 0, x: -100, blur: 5, transition: { duration: 1, delay: 0.2 } },
    exit: { opacity: 0, x: -100, transition: { duration: 1 } }
};

const rightVariants = {
    visible: { opacity: 1, x: 0, blur: 0, transition: { duration: 1, delay: 0.2 } },
    hidden: { opacity: 0, x: 100, blur: 5, transition: { duration: 1, delay: 0.2 } },
    exit: { opacity: 0, x: 100, transition: { duration: 1 } }
};

const BannerOne= () => {
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
        <BannerContainer name='banner-container'>
                <LeftSide name='left-side'>
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
            
                <RightSide name='right-side'>
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
