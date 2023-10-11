import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const ToastContainer = styled(motion.div)`
  ${tw`
        p-4
        
        text-white
        shadow-lg shadow-gray-200/30 rounded-lg 
        pointer-events-auto 
        flex items-center gap-4
    `}

  background-color: ${(props) => props.color};
`;

export const ToastImage = styled.div`
  ${tw`
        h-12 w-12 rounded-md bg-cover bg-center
    `}
  border: 1px solid rgba(255, 255, 255, 0.5);
  img {
    ${tw`
            h-full w-full rounded-md
        `}
  }
`;
