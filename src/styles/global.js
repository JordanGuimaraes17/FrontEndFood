import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints'
export default createGlobalStyle`
* {
   min-width: 0;
    margin: 0;
    padding: 0;
   
  }

  *,*::before,*::after{
    box-sizing: border-box;
  }
  :root{
    font-size: 16px;
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 12px;

    }
  }
  
  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    outline: none;
  }


  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.7);
  }
  ::-webkit-scrollbar {
  width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #2c2c31;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9e9ea0;
  }

`
