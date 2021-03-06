import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --highlight: #ffa500;
    --background: #272c33;
    --white: #eeeeee;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 2.5rem;
    --large: 4.5rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    background: var(--background);
    color: var(--white);
    height: 100%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p,
  a {
    font-size: 2rem;
    line-height: 3rem;
  }

  a {
    color: var(--highlight);
  }
`

export default GlobalStyle
