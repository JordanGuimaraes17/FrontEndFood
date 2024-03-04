import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  > div {
    display: flex;
    align-items: center;
    gap: 1.18rem;
    img {
      width: 3rem;
      height: 2%.9rem;
    }
    h1 {
      font-size: 2.6rem;
      font-weight: 700;
    }
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > div {
      h1,
      img {
        margin-bottom: 4rem;
        font-size: 1.6rem;
      }
    }

    padding: 2rem;
    flex-direction: column;
    justify-content: center;
  }
`
export const Form = styled.form`
  .inputs {
    line-height: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  border-radius: 1rem;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  .register {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin: 0 auto;
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    h1 {
      font-size: 1.4rem;
    }
  }
`
