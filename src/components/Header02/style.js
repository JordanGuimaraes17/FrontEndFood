import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Header = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  padding: 0 5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  div {
    flex: 1;
  }
  .new {
    width: 17%;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    h1 {
      font-size: 1.6rem;
    }
    .menu {
      display: none;
    }
    .img02 {
      display: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    gap: 0 1rem;
    .menu {
      display: none;
    }
    .img02 {
      display: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 0 5rem;
    .input-container {
      display: none;
    }
    .menu {
      display: flex;
    }

    .img02 {
      display: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0 1rem;
    gap: 3rem;

    .img01 {
      display: none;
    }

    .img02 {
      display: flex;
    }
    .new {
      width: 20%;
      > span {
        font-size: 0.5rem;
      }
    }

    h1 {
      gap: 0.8rem;
      display: flex;
      align-items: center;
      font-size: 1rem;
      img {
        height: 1.5rem;
      }
    }
    .input-container {
      display: none;
    }
  }
`
