import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Container = styled.div`
  .slider {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-height: 28rem;
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
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0.5rem 0rem 1rem;
    .slider {
      h2 {
        font-size: 1.4rem;
      }
      > span {
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }
    .slide-item {
      width: 5rem;
      height: 5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0.5rem 0rem 1rem;
    .slider {
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
      width: 5rem;
      height: 5rem;
    }
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .slider {
      gap: 0.3rem;
      padding: 0.5rem 0rem 0.8rem;
      footer {
        span {
          font-weight: 200;
          font-size: 0.8rem;
        }
        .number {
          font-size: 1rem;
        }
      }
    }
    p {
      display: none;
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
`
