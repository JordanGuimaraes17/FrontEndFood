import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`
export const Content = styled.section`
  width: 80%;
  padding: 0 0 1rem;
  margin: 0 auto;

  main {
    grid-area: main;
    overflow-y: auto;
    max-height: calc(100vh - 9.5rem);
    @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      max-height: calc(100vh - 6rem);
    }

    &::-webkit-scrollbar {
      width: 0; /* Oculta a barra de rolagem no Chrome/Safari/Opera */
    }
    scrollbar-width: thin; /* Oculta a barra de rolagem no Firefox */
    /* Oculta a barra de rolagem no Microsoft Edge */

    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
  }

  .box {
    gap: 2rem;
    display: flex;
    align-items: center;
    margin-top: 7rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
  .box img {
    width: 40%;
    margin-top: -6rem;
    object-fit: contain;
  }
  .text h2 {
    font-weight: 300;
    font-size: 2rem;
  }
  .text span {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    .text h2 {
      font-size: 2rem;
    }

    .text span {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .text h2 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.PR}) {
    .box {
      margin-top: 2rem;
      gap: 0.5rem;
    }
    .box img {
      margin-top: -0.5rem;
    }
    .text {
      h2 {
        font-size: 1rem;
      }
      span {
        font-size: 0.5rem;
      }
    }
  }
`
