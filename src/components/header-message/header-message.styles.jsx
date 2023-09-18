import tw, { styled } from "twin.macro";

export const HeaderMessageContainer = tw.div`
    relative
    z-[60]
    w-screen
    flex items-center justify-center md:justify-between
    bg-[maroon]
    text-white
    p-4
 
`;

export const Left = tw.span`
  hidden md:block
  
`;

export const Center = tw.div`
  
`;

export const Right = tw.div`
  hidden md:block
`;
