import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100dvh;
  grid-template-rows: 5.4rem auto 3.5rem;
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    grid-template-rows: 4.2rem auto 3rem;
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-template-rows: 4rem auto 2.5rem;
  }
`
export const Content = styled.section`
  margin: 0 auto;

  main {
    padding: 1.4rem 2rem;
    grid-area: main;
    overflow-y: auto;
    max-height: calc(100dvh - 9rem);

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
    justify-content: end;
    display: flex;
    align-items: center;
    margin-top: 6rem;
    height: 13rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    position: relative;
    overflow: visible;
    padding: 0 12rem;
  }
  .box img {
    width: 57rem;
    height: 18rem;
    margin-top: -5rem;
    position: absolute;
    left: -16rem;
    object-fit: contain;
  }
  .text h2 {
    font-weight: 500;
    font-size: 2rem;
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
      height: 9rem;
      justify-content: end;
      padding: 0 4.3rem;
    }
    .box img {
      width: 60rem;
      height: 13rem;
      left: -21rem;
      top: 1rem;
    }
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .box {
      padding: 4rem;
      justify-content: end;
    }

    .text h2 {
      font-size: 2rem;
    }
    .box img {
      width: 45rem;
      left: -12rem;
    }
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .box {
      padding: 0.5rem;
      margin-top: 1rem;
      height: 6rem;
    }
    .text {
      width: 13rem;
    }

    .text h2 {
      font-size: 1rem;
    }

    .box img {
      height: 9rem;
      width: 11rem;
      left: -1rem;
      top: 3rem;
    }

    .text span {
      font-size: 0.6rem;
    }
  }
`
