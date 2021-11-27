import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f9f9f9;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px Roboto, sans-serif; 
  }
  #root {
    margin: 0;
    padding: 0;
  }
  button {
    cursor: pointer;
  }
`; 