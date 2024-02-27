import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Container = styled.section`
  > h2 {
    margin: 1rem 0 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h2 {
      font-size: 1.2rem;
    }
  }
`
