import tw, { styled } from "twin.macro";

export const ItemContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  padding: 0.5em 0;
  border-bottom: 1px solid darkgrey;
  transition: all 0.3s ease-in-out;

  .sect {
    width: 25%;

    :last-child {
      /* width: 12%; */
    }
  }

  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:last-child {
    //border-bottom: 1px solid darkgrey;
  }

  ${tw`text-sm md:text-base`}
`;

export const ImageContainer = styled.div`
  width: 25%;
  max-width: 180px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 0.5em;
  }

  ${tw`
    md:flex
   
  `}
`;

export const InfoContainer = styled.div`
  ${tw`
      w-full
        flex
      justify-between md:justify-evenly items-center
        text-center
        gap-6
    `}
`;

export const Name = styled.span`
  grid-area: name;
  @media only screen and (max-width: 800px) {
    //font-size: 16px;
  }
`;

export const Quantity = styled.span`
  grid-area: quantity;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (width <= 700px) {
    margin-left: -2em;
  }

  .arrow {
    cursor: pointer;
    border: 1px solid darkgrey;
    display: flex;

    @media (width <= 700px) {
      display: none;
    }
  }

  .value {
    display: flex;
    text-align: center;
    margin: 0 15px;
    width: 60px;
    background-color: white;
  }

  @media only screen and (min-width: 700px) {
    top: 6px;
  }

  @media only screen and (max-width: 600px) {
    left: 0;
  }
`;

export const Price = styled.span`
  grid-area: price;
  padding: 0 0.5em;
  margin: 0 auto;
`;

export const RemoveBtn = styled.div`
  grid-area: remove;
  //width: 20%;
  text-align: center;
  margin-right: 0.5em;
  cursor: pointer;

  .trash-icon {
    width: 30px;
    height: 30px;
  }

  &:hover {
    color: maroon;
  }
`;
