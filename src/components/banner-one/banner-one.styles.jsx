import tw, { styled } from "twin.macro";
import { css } from "styled-components";
import { motion } from "framer-motion";

export const BannerContainer = styled.div`
  ${tw`
		relative z-50
		h-[200px] md:h-[325px] lg:h-[450px]
		w-full
		text-white text-sm md:text-xl
		font-black
		flex
		overflow-hidden
	`}

  h2 {
    ${tw`text-xl md:text-4xl lg:text-6xl`}
  }
`;
export const SlideIn = css`
  .hidden {
    opacity: 0;
    filter: blur(5px);
    left: 100%;
    transition: all 3s;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    left: 0;
    transition: all 3s;
  }
`;

export const LeftSide = styled(motion.span)`
  ${SlideIn};

  ${tw`
	left-0
	w-[50%]
	bg-[maroon]
	flex flex-col justify-center items-start
	pl-2 md:pl-8
  `}

  clip-path: polygon(0 0, 100% 0%, 50% 100%, 0 100%);

  .left-side-content {
    ${tw`
		w-[125px] md:w-[225px] lg:w-[300px] 
		h-[125px] md:h-[225px] lg:h-[300px]
		flex flex-col justify-center 
		shadow-black shadow-2xl
		rounded-full
		px-2 md:px-12
    lg:ml-[20%] xl:ml-[35%]
	`}
    background-image: linear-gradient(to right, maroon, grey);
  }
`;

export const RightSide = styled(motion.span)`
  ${SlideIn};

  ${tw`
	right-0
	w-[50%]
	bg-[black]
	flex flex-col justify-center items-center
	pr-4 md:pr-8
  `}
  clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0 100%);

  .right-side-content {
    ${tw`
		w-[125px] md:w-[225px] lg:w-[300px] 
		h-[125px] md:h-[225px] lg:h-[300px]
		flex flex-col justify-center 
		shadow-white/30 shadow-2xl
		rounded-full
		px-2 md:px-12
		ml-[30%]  xl:ml-[60%]
		
	`};
    background-image: linear-gradient(to right, grey, maroon);
  }
`;

export const Title = styled.h2`
  width: 6em;

  &.left-stylez {
    position: relative;
    border-top: 1px solid white;

    ${tw`md:ml-[-1em]`}
  }

  &.left-her {
    position: relative;
    width: 100%;
    text-align: right;
    color: maroon;
    border-bottom: 2px solid black;

    ${tw`ml-[-.5em] lg:ml-0`}
  }

  &.right-him {
    position: relative;
    width: 100%;
    color: gray;
    text-align: right;
    border-top: 2px solid black;
  }

  &.right-stylez {
    position: relative;
    text-align: left;
    border-bottom: 2px solid;

    ${tw`md:ml-[-1.5em]`}
  }
`;

export const Description = styled.div`
  position: relative;
  text-align: center;

  /* KEYFRAMES */
  @keyframes slide-in-left {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(50%);
    }
  }
`;
