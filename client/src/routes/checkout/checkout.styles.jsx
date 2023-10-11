import tw, { styled } from "twin.macro";

export const CheckoutPageContainer = styled.div`
  ${tw`
    w-full
    flex flex-col lg:flex-row justify-around gap-2
    mt-16
    mb-[8em]
    
    `}

  scrollbar-width: thin;

  @media (width <= 900px) {
    padding: 0 5%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  //height: 40%;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: left;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  .header-block {
    text-transform: capitalize;
    width: 20%;
    text-align: center;

    &.description {
      position: relative;
    }

    &:last-child {
      /* width: 12%; */
    }
  }

  ${tw`
   hidden md:flex
    lg:w-[900px]
  `}

  @media only screen and (max-width: 800px) {
    font-size: clamp(0.8rem, 2.4vw, 2rem);
  }
`;

export const CartItemsContainer = styled.div`
  max-height: 50vh;
  margin-top: 20px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
`;

export const TotalContainer = styled.div`
  border-top: 1px solid black;
  text-align: right;
`;

export const CheckoutMessageContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const CheckoutFormContainer = styled.div`
  margin-top: 10px;

  ${tw`
    w-full lg:w-[600px]
    flex justify-center
  `}
`;

export const NoItemsContainer = styled.div`
  ${tw`
    flex flex-col items-center justify-center
    h-[20vh]
    
  `}
`;
