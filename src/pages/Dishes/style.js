import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100dvh;
  grid-template-rows: 5.2rem auto 3.3rem;
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-template-rows: 4rem auto 2.5rem;
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    grid-template-rows: 4.2rem auto 3rem;
  }
`

export const Content = styled.section`
  grid-area: main;
  padding: 1.5rem 7.5rem;

  > button {
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 2.6rem;
    font-size: 1.2rem;
  }

  main {
    gap: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      object-fit: cover;
      height: 25rem;
      width: 25rem;
    }
    div {
      flex: 1;
      h1 {
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
        line-height: 3.5rem;
        font-weight: 500;
      }
      p {
        font-size: 1.5rem;

        line-height: 2rem;
        margin-bottom: 1.5rem;
      }

      footer {
        > span {
          font-size: 1.8rem;
        }
        gap: 1rem;
        margin-top: 3rem;
        display: flex;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 2rem 2rem;
  }
  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 1rem 2rem;
    main {
      > img {
        width: 20rem;
        height: 20rem;
      }
      div {
        h1 {
          font-size: 2rem;
        }
        p {
          line-height: 1.5rem;
          font-size: 1rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    main {
      > img {
        width: 20rem;
        height: 20rem;
      }
    }
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    main {
      gap: 1rem;

      justify-content: center;
      flex-direction: column;

      > img {
        width: 14rem;
        height: 14rem;
      }
      div {
        margin: 0 auto;

        p {
          line-height: 1.5rem;
          font-size: 1rem;
        }
      }
    }
  }
`
