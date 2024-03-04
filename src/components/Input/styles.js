import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 2.8rem;

  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border-radius: 0.43rem;

  > input {
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    margin-left: 2rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 2.6rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    svg {
      margin-left: 1rem;
    }
  }
`
