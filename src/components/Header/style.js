import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Container = styled.header`
  cursor: pointer;
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

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 2rem;
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .img01 {
      display: none;
    }

    .new {
      width: 28%;
      height: 2rem;
    }

    h1 {
      gap: 0.6rem;
      img {
        height: 1.5rem;
      }
      display: flex;
      align-items: center;
      font-size: 1rem;
    }
    .input-container {
      display: none;
    }
  }
`
