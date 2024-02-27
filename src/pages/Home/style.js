import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100dvh;
  grid-template-rows: 5.4rem auto 3.5rem;
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-template-rows: 4rem auto 2.5rem;
  }
`
export const Content = styled.section`
  margin: 0 auto;

  main {
    grid-area: main;
    overflow-y: auto;
    max-height: calc(100dvh - 9.4rem);

    &::-webkit-scrollbar {
      width: 0; /* Oculta a barra de rolagem no Chrome/Safari/Opera */
    }
    scrollbar-width: thin; /* Oculta a barra de rolagem no Firefox */
    /* Oculta a barra de rolagem no Microsoft Edge */

    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
  }

  .box {
    display: flex;
    align-items: center;
    margin-top: 6rem;
    height: 13rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
  .box img {
    width: 30rem;
    height: 18rem;
    margin-top: -5rem;

    object-fit: contain;
  }
  .text h2 {
    font-weight: 500;
    font-size: 2.5rem;
  }
  .text span {
    font-size: 0.87rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  .container {
    padding: 1rem;
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    .box {
      margin-top: 4rem;
      height: 10rem;
    }
    .box img {
      width: 20rem;
      height: 12rem;
    }
    .text h2 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .box {
      margin-top: 3rem;
      height: 8rem;
    }
    .box img {
      width: 15rem;
      height: 9rem;
    }
    .text h2 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .box {
      display: flex;
      justify-content: end;
      z-index: -1;
      margin: 0 auto;
      width: 23.5rem;
      margin-top: 3rem;
      height: 6rem;
      position: relative;
    }
    .text {
      width: 13rem;
    }
    .box img {
      width: 15rem;
      position: absolute;
      left: -3rem;
      top: 2rem;
    }
    .text h2 {
      font-size: 1rem;
    }
    .text span {
      font-size: 0.6rem;
    }
    .container {
      padding: 0.5rem;
    }
  }
`
