import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;
  height: 3rem;
  padding: 0 1rem;
  font-weight: 500;
  border-radius: 0.43rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.31rem;

  > span {
    font-size: 0.87rem;
  }

  > svg {
    font-size: 1.3rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 2.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    height: 2rem;
    > span {
      font-size: 0.7rem;
    }

    > svg {
      font-size: 1rem;
    }
  }
`
