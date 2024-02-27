import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.footer`
  grid-area: footer;
  padding: 1rem 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  > h3 {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 0.8rem;
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0 1.4rem;
    img {
      height: 1.5rem;
    }
    span {
      font-size: 0.4rem;
    }
  }
`
