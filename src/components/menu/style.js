import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'head' 'main' 'footer';
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`
export const Header = styled.header`
  height: 4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  grid-area: head;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  img {
    height: 2rem;
  }
  svg {
    font-size: 1.6rem;
  }
`

export const Content = styled.div`
  main {
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 2rem 4rem;
    }
    div {
      margin-bottom: 1.5rem;
    }

    padding: 2rem;
    grid-area: main;

    span {
      font-size: 1rem;
      font-weight: 700;
    }

    p {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: 300;
    }
    .line {
      margin-top: 1rem;
      border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`
