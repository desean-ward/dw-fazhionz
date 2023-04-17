import React, { useEffect } from 'react';

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


import { Container, Title, Description, LeftSide, RightSide, ScrollToTop } from './banner-one.styles';

import { MdSend } from 'react-icons/md';

const leftVariants = {
    visible: { opacity: 1, x: 0, blur: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -100, blur: 5 }
};

const rightVariants = {
    visible: { opacity: 1, x: 0, blur: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 100, blur: 5 }
};

const BannerOne= () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <Container>
            <LeftSide>
                <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={leftVariants}
                className="square"
                >
                    <Title className='left'>STYLEZ</Title>
                    
                    <Description>
                    FOR
                    </Description>

                    <Title className='push-right'>HER</Title>
                </motion.div>
            </LeftSide>
           
            <RightSide>
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={rightVariants}
                className="square"
                >
                    <Title className='right'>HIM</Title>

                    <Description className="right">
                    FOR
                    </Description>

                    <Title className='push-left'>STYLEZ</Title>
                </motion.div>
            </RightSide>
        </Container>
    )
}

export default BannerOne
