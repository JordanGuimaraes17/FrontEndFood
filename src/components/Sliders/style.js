import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Container = styled.div`
  width: 70rem;

  .slider {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 28rem;
    cursor: pointer;
    padding: 1.5rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
    gap: 0.4rem;

    .svg {
      margin-left: auto;
      font-size: 1rem;
    }

    .svg.ativo {
      color: red;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2rem;
    }
    p {
      text-align: center;
      font-size: 0.8rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      line-height: 1.4rem;
    }
    > span {
      font-size: 1.6rem;
      line-height: 3.2rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    footer {
      cursor: pointer;
      gap: 0.8rem;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      .number {
        font-size: 1.5rem;
      }
      span {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
      }
    }
  }
  .slide-item {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    &::after {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    p {
      display: none;
    }
    h2 {
      font-size: 0.8rem;

      line-height: 1rem;
    }

    > span {
      font-size: 0.8rem;
      line-height: 0.8rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.SM}) and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 20rem;
    margin: 0 auto;

    .slider {
      min-height: 8rem;
      h2 {
        font-size: 1.4rem;
      }
      > span {
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
    .slide-item {
      width: 5.5rem;
      height: 5.5rem;
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 57rem;
  }
`
