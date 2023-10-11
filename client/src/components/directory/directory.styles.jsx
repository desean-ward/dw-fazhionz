import tw, { styled } from "twin.macro";

export const DirectoryContainer = styled.div`
  position: relative;
  padding-top: 2rem;
  z-index: 50;
  width: 100vw;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  h2 {
    color: maroon;
    margin-bottom: 0.5em;
    ${tw`
      md:text-[3em]
    `}
  }

  #reveal {
    ${tw`
      absolute
      top-[4.5em] md:top-[5em]
      w-full h-full
      grid grid-cols-2
      
    `}

    .panel {
      ${tw`
        relative
        z-10
        h-full
        bg-white
      `}
    }
  }

  @media only screen and (max-width: 1100px) and (orientation: portrait) {
    //padding-bottom: 0;
  }
`;

export const DirectoryMenu = styled.div`
  position: relative;
  width: 80%;
  //height: 100%;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-content: center;
  padding-bottom: 5rem;
  margin: 0 auto;
`;
