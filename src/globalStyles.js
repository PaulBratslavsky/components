import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/*Google Fonts*/
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap');

:root {
    --thm-font: 'Raleway', sans-serif;
    /* Headings */
    --thm-b-font: 'Nunito Sans', sans-serif;
    /* Body font */
    --thm-color-one: #1b2336;
    --thm-color-two: #4b83fb;
    --thm-color-three: #65cfa9;
    --thm-color-four: #ffbd3f;
    --thm-color-five: #0c1634;
    --thm-color-six: #ff0030;
    --thm-color-light: #dadada;
    /*RGB Colors*/
    --thm-color-one-rgb: 27, 35, 54;
    --thm-color-two-rgb: 75, 131, 251;
    --thm-color-three-rgb: 101, 207, 169;
    --thm-color-four-rgb: 255, 189, 63;
    --thm-color-six-rgb: 255, 0, 48;
    --thm-border-rgb: 241, 241, 241;
    /*Theme Colors*/
    --thm-body-color: #415674;
    /*Body Colors*/
    --thm-white: #ffffff;
    /*White Color*/
    --thm-border: #f1f1f1;
    /*Border Color*/
}
  

  body {
    background: var(--red);
  }
`;

export const Container = styled.div`
  
  margin: 0 auto;

  @media (min-width: 576px) {
    background: white;
  }

  @media (min-width: 768px) {
    background: pink;
  }

  @media (min-width: 992px) {
    background: red;
  }

  @media (min-width: 1200px) {
    background: orange;
  }

  @media (min-width: 1400px) {
    max-width: 1200px;
    background: blue;
  }
`;
