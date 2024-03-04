import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.footer`
  grid-area: footer;
  padding: 0.5rem 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  > h3 {
    img {
      height: 2rem;
    }
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 0.7rem;
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 1rem 1rem;
    > h3 {
      font-size: 1rem;
      img {
        height: 1rem;
      }

      gap: 0.5rem;
    }
    span {
      font-size: 0.5rem;
    }
  }
`
