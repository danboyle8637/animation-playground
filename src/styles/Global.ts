import { createGlobalStyle } from 'styled-components'

export const sizes = {
	aboveMobile: "@media (min-width: 600px)",
	aboveTablet: "@media (min-width: 960px)",
	aboveIpadPro: "@media (min-width: 1100px)",
	aboveLaptop: "@media (min-width: 1450px)",
	aboveUltraWide: "@media (min-width: 1460px)",
}

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
    --color-greensock-green-1: #C1FFC1;
    --color-greensock-green-2: #87ff87;
    --color-greensock-green-3: #6fec70;
    --color-greensock-green-4: #00B501;
    --color-framer-blue-1: #5afdf2;
    --color-framer-blue-2: #1fecff;
    --color-framer-blue-3: #13c3ff;
    --color-framer-blue-4: #1f81ff;
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
