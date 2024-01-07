import styled from 'styled-components'
export const Container = styled.div`
  width: 70rem;

  .slider {
    height: 27rem;
    max-width: 19rem;
    padding: 24px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 33.6px;
    }
    p {
      font-size: 14px;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      line-height: 22.4px;
    }
    > span {
      font-size: 32px;
      line-height: 51.2px;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    footer {
      gap: 14px;
      font-size: 14px;
      display: flex;
      align-items: center;
      span {
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
      }
    }
  }
  .slide-item {
    width: 176px;
    height: 176px;
    object-fit: cover;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    &::after {
      font-size: 40px;
    }
  }
  .swiper-pagination-bullet {
    //background-color colocar cor
  }
  .swiper-scrollbar {
    //background-color colocar cor
  }
`
