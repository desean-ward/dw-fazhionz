import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    font-family: 'Open Sans Condensed' !important;
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
`