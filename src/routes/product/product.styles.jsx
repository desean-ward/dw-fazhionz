import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

export const ProductPageContainer = styled.div`
  ${tw`
        w-[80vw] h-full
        border-2 border-red-900
        m-auto
    `}
`;

export const BreadcrumbContainer = styled.nav`
  ${tw`
        flex flex-wrap
        gap-4
        p-8
        md:text-xl
        
    `}
`;

export const StyledLink = styled(Link)`
  ${tw`
        text-gray-400 
        hover:text-gray-900
    `}
`;

export const ImagePricingSection = styled.main`
  ${tw`
        flex flex-col
        lg:grid grid-cols-2
    `}
`;

export const Section = styled.section`
  ${tw`
        h-full w-full
        p-8
        border-2
    `}

  &.left {
    ${tw`
        flex gap-4
        border-4
    `}
  }

  &.right {
    .wasPrice {
      ${tw`
        text-red-900
        line-through
    `}
    }
    .percentOff {
      ${tw`
        text-green-700
    `}
    }
  }

  #productDescription {
    ${tw`
        mb-8
    `}
  }
`;

export const ThumnbnailSection = styled.section`
  ${tw`
    hidden md:flex
      w-[10em] h-[30em]
      flex flex-col justify-between
      px-8
  `}
`;

export const Thumbnail = styled.section`
  ${tw`
        
        max-w-[10em] h-[7em]
        flex justify-center items-center
        rounded-lg
        bg-gray-400
        mb-4
    `}
  opacity: 0.2;
  filter: grayscale(100%);
`;

export const RatingSection = styled.section`
  ${tw`
        w-full
        flex items-center justify-start
    `}
`;

export const StatsContainer = styled.div`
  ${tw`
        flex  py-4
        
    `}
`;

export const ProductColorContainer = styled.section`
  ${tw`
        hidden md:flex
        flex  items-center
        my-8
    `}
`;

export const ProductColor = styled.section`
  ${tw`
        w-full max-w-[10em] h-[7em]
        flex justify-center items-center
        rounded-lg
       
    `}
  opacity: 0.2;
  filter: grayscale(100%);
`;

export const SelectSizeContainer = styled.section``;

export const SizeButtonsContainers = styled.section`
  ${tw`
        flex
        gap-2
        mb-8
    `}
`;

export const SizeButton = styled.div`
  ${tw`
        w-[5em]
        py-4
        border-2 border-black
        flex justify-center
        rounded-lg
        hover:bg-black hover:text-white
        cursor-pointer
    `}

  border: 1px solid black;

  &.active {
    background-color: black;
    color: white;
  }
`;

export const BuyButtonsContainer = styled.div`
  ${tw`
        flex flex-col gap-4
        mb-4
    `}
`;

export const ChatWishShare = styled.div`
  ${tw`
        flex flex-wrap md:flex-nowrap justify-center
    `}

  span {
    ${tw`
        flex items-center gap-2
        py-4 px-16
        hover:text-[maroon]
    `}

    cursor: pointer;
    border-right: 1px solid black;

    :last-child {
      border-right: none;
    }
  }
`;

export const ImageContainer = styled.div`
  ${tw`
        w-full
        rounded-[2em]
        flex flex-col items-center
    `}

  img {
    ${tw`
        h-full
        rounded-[2em]
        object-cover
    `}

    object-fit: fill;
  }
`;

export const ProductDetailsSection = styled.div``;

export const SimilarProductsSection = styled.div`
  ${tw`
       flex flex-col
    `}
`;

export const ProductsContainer = styled.section`
  ${tw`
        flex flex-wrap justify-center md:justify-start gap-4
    `}
`;
