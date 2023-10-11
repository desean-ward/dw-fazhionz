import tw, { styled } from "twin.macro";

export const Container = styled.div`
  position: relative;
  z-index: 50;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .content {
    position: absolute;
    top: 0;
    background-color: maroon;
    width: 100%;
    padding: 4em;
  }
`;

export const Title = styled.h2`
  top: -0.5em;
  position: relative;

  ${tw`
      md:text-[3em]
    `}
`;

export const Description = styled.div`
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

export const InputContainer = styled.form`
  position: relative;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 40%;
  outline: none;
  padding: 0.5em;

  @media (width <= 700px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  background-color: maroon;
  color: white;
  position: relative;
  outline: none;
  padding: 0.25em;

  :hover {
    background-color: white;
    color: maroon;
    border: maroon;
  }
`;
