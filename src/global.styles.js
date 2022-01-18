import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    font-family: "Roboto", sans-serif !important;
    padding: 0px;

    @media screen and (max-width: 800px) {
            padding: 0px;
    }

    @media screen and (max-width: 620px) {
        padding: 0px;
    }
}

a {
  color: black !important;
  text-decoration: none !important;

}




/* @import "~bootstrap/scss/bootstrap"; */
`;

export default GlobalStyle;

