import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /*

    --DarkBlue-Dark Mode Elements: hsl(209, 23%, 22%);
    --VeryDarkBlue-Dark Mode Background: hsl(207, 26%, 17%);
    --VeryDarkBlue-Light Mode Text: hsl(200, 15%, 8%);
    --DarkGray-Light Mode Input: hsl(0, 0%, 52%);
    --VeryLightGray-Light Mode Background: hsl(0, 0%, 98%);
    --White-Dark Mode Text Light Mode Elements: hsl(0, 0%, 100%);

    */
    --clr-background-elements: hsl(0, 0%, 100%);
    --clr-background: hsl(0, 0%, 98%);
    --clr-text: hsl(200, 15%, 8%);

    --HomepageItems: 14px;
    --DetailPage: 16px;

    --font-family: 'Nunito Sans', sans-serif;

    /*
      available font weigths:

      - 300,
      - 600,
      - 800. 
    */

    --side-padding: 1rem;
  }

  @media (min-width: 420px) {
    :root {
      --side-padding: 4rem;
    }
  }

  @media  (min-width: 760px) {
    :root {
      --side-padding: 5rem;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-family);
    background: var(--clr-background);
    color: var(--clr-text);
  }

  .dark-theme {
    --clr-background: hsl(207, 26%, 17%);
    --clr-text: hsl(0, 0%, 100%);
    --clr-background-elements: hsl(209, 23%, 22%);
  }
`;

export default GlobalStyle;