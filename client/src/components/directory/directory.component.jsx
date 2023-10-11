import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryContainer, DirectoryMenu } from "./directory.styles";

const fadeInTitle = {
  visible: { opacity: 1, blur: 0, transition: { duration: 1.2, delay: 0.2 } },
  hidden: { opacity: 0, blur: 5, transition: { duration: 1, delay: 0.2 } },
  exit: { opacity: 0, transition: { duration: 1.2 } },
};


const leftPanelSlide = {
  visible: {
    x: "-100vw",
    transition: { duration: 1.5, delay: 1 },
  },
  hidden: {
    x: 0,
    transition: { duration: 1.5, delay: 1 },
  },
  exit: {
    x: 0,
    transition: { duration: .5 },
  },
};
const rightPanelSlide = {
  visible: { x: "100vw", transition: { duration: 1.5, delay: 1 } },
  hidden: { x: 0, transition: { duration: 1.5, delay: 1 } },
  exit: { x: 0, transition: { duration: .5 } },
};

const Directory = ({ sections }) => {
  const controls = useAnimation();
  const leftAnimate = useAnimation();
  const rightAnimate = useAnimation();
  const [ref, inView] = useInView();
  const [dirRef, dirInView] = useInView();
  const [leftPanelRef, leftPanelInView] = useInView();
  const [rightPanelRef, rightPanelInView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  // Left Reveal Panel
  useEffect(() => {
    if (leftPanelInView) {
      leftAnimate.start("visible");
    } else {
      leftAnimate.start("exit");
    }
  }, [leftPanelInView, leftAnimate]);

  useEffect(() => {
    if (rightPanelInView) {
      rightAnimate.start("visible");
    } else {
      rightAnimate.start("exit");
    }
  }, [rightPanelInView, rightAnimate]);

  useEffect(() => {
    if (dirInView) {
      controls.start("visible");
    }
  }, [controls, dirInView]);
  return (
    <DirectoryContainer>
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={fadeInTitle}
        exit='exit'
      >
        <h2 className='fat-face'>BROWSE OUR COLLECTION</h2>
      </motion.div>

      <div id='reveal'>
        <motion.div
          className='panel'
          ref={leftPanelRef}
          animate={leftAnimate}
          initial='visible'
          variants={leftPanelSlide}
        />
        <motion.div
          className='panel two'
          ref={rightPanelRef}
          animate={rightAnimate}
          initial='visible'
          variants={rightPanelSlide}
          exit='exit'
        />
      </div>

      <DirectoryMenu>
        {/* Maps the sections, destructures, and returns the 'id' + the remaining props (...otherSectionProps) into the 'MenuItem' component*/}
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </DirectoryMenu>
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
