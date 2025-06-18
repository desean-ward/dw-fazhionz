import React from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  LogoContainer,
  NavContainer,
  SearchContainer,
} from "./header.styles";

const Header2 = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <span className='fat-face-logo'>D.W. Fazhionz!</span>
        </LogoContainer>

        <SearchContainer>Search</SearchContainer>

        <NavContainer>Nav</NavContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header2;
