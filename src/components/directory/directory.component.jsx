import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryContainer, DirectoryMenu } from './directory.styles'


const variants = {
    visible: { opacity: 1, blur: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0, blur: 5, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1.2 } }
}


const Directory = ({ sections }) => {
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
        <DirectoryContainer>
            <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            exit="exit"
            >
                <h2 className='fat-face'>BROWSE OUR COLLECTION</h2>
            </motion.div>

            <DirectoryMenu>
                {/* Maps the sections, destructures, and returns the 'id' + the remaining props (...otherSectionProps) into the 'MenuItem' component*/}
                { sections.map(({ id, ...otherSectionProps }) => ( 
                <MenuItem key={ id } { ...otherSectionProps } />
                ))}
            </DirectoryMenu>
        </DirectoryContainer>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)




