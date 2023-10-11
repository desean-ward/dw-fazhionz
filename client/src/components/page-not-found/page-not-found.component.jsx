import React from "react";

import AnimatedPage from "../animated-page/animated-page.component";

import { Wrapper, Overlay, Content } from "./page-not-found.styles";

const PageNotFound = () => {
  return (
    <AnimatedPage>
      <Wrapper>
        <Overlay>
          <Content>
            <h1 className='text-2xl'>Page Not Found</h1>
            <h3>Please try again</h3>
          </Content>
        </Overlay>
      </Wrapper>
    </AnimatedPage>
  );
};

export default PageNotFound;
