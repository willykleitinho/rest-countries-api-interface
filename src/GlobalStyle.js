import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /*

    --DarkBlue-DarkModeElements: hsl(209, 23%, 22%);
    --VeryDarkBlue-DarkModeBackground: hsl(207, 26%, 17%);
    --VeryDarkBlue-LightModeText: hsl(200, 15%, 8%);
    --DarkGray-LightModeInput: hsl(0, 0%, 52%);
    --VeryLightGray-LightModeBackground: hsl(0, 0%, 98%);
    --White-DarkModeTextLightModeElements: hsl(0, 0%, 100%);

    */

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
`;

export default GlobalStyle;