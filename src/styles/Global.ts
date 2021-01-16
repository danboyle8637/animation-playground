import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  @font-face {
    font-family: 'RobotoBold';
    src: url('/fonts/Roboto-Black.woff2') format('woff2');
    font-display: fallback;
  }

  html {
    box-sizing: border-box;
    --color-mainBackground: #0E0B19;
    --color-lightBlue: #d2d5ff;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--color-mainBackground);
    width: 100%;
    height: 100%;
  }

  section {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-family: RobotoBold, sans-serif;
    font-size: 40px;
  }

  h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-family: RobotoBold, sans-serif;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  button {
    margin: 0;
    padding: 0;
  }

`

export default Global
