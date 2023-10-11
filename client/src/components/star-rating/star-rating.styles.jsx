import tw, { styled } from "twin.macro";

export const StarRatingContainer = styled.div`
  ${tw`
        flex items-end
        text-lg
        p-4
        cursor-pointer
    `}

  input {
    visibility: hidden;
  }

  :hover {
    cursor: pointer;
  }
`;
