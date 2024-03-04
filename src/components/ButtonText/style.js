import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.LIGHT_100 : theme.COLORS.TOMATO_100};
  border: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    font-size: 1rem;
  }
`
