import tw, { styled } from "twin.macro";

export const SuspendContainer = styled.div`
  .fallback {
    /* position: absolute; */
    /* inset: 0; */
    /* display: flex;
    align-items: center;
    justify-content: center; */
    text-align: center;
    gap: 3.5em;
    z-index: 1000;

    ${tw`
    w-full lg:w-[600px]
    flex justify-center
  `}
  }
`;
