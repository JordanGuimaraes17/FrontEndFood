import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Container = styled.header`
  cursor: pointer;

  grid-area: header;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  div {
    svg {
      font-size: 1.8rem;
    }
  }
  .new {
    width: 17%;
  }
  .responsivo {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    .none {
      display: none;
    }
    .new {
      width: 30%;
    }

    .img01 {
      display: none;
    }
    h1 {
      gap: 1rem;
      align-items: center;
      display: flex;
      img {
        height: 1.2rem;
      }
      font-size: 1.4rem;
    }

    .new {
      height: 2.4rem;
    }

    .input-container {
      display: none;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    h1 {
      gap: 1rem;
      align-items: center;
      display: flex;
      img {
        height: 2rem;
      }
      font-size: 2rem;
    }
    .none {
      display: none;
    }
    .img01 {
      display: none;
    }
    .input-container {
      display: none;
    }
    .new {
      width: 17%;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .responsivo {
      .input-container {
        width: 40%;
      }
    }
    .input-container {
      display: flex;
    }
    .menu {
      display: none;
    }
    .none {
      display: flex;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    .responsivo {
      .input-container {
        width: 50%;
      }
    }
  }
`
