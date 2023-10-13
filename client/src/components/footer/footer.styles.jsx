import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  z-index: 50;
  width: 100%;

  &.shadow {
    filter: drop-shadow(0 -3px 12px black);
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 4em 0 4em 10%;
  display: ${(props) => (props.pageLoaded ? "grid" : "none")};
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2em;
  background-color: maroon;
  color: white;

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const Left = styled.div`
  padding-right: 2em;
`;

export const Logo = styled.h3``;

export const Description = styled.div``;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 1em;
`;

export const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  /* background-color: white;
  color: maroon; */
  /* background-color: #${(props) => props.color}; */
  text-align: center;
  margin-right: 20px;
  cursor: pointer;

  ${tw`shadow-xl shadow-white`}
`;

export const Center = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
`;

export const Title = styled.h4`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const Right = styled.div`
  width: fit-content;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 250px;
  margin-left: -1em;
`;
