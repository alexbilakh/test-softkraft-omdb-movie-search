import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0;
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: transparent linear-gradient(45deg, #1d262e, #344652);
      color: #dfdfdf;
    }

    * {
      box-sizing: border-box;
    }
 `;
