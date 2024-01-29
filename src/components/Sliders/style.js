import styled from 'styled-components'
export const Container = styled.div`
  width: 70rem;
  .slider {
    overflow: hidden;
    text-overflow: ellipsis;

    min-height: 28rem;
    position: relative;
    cursor: pointer;
    padding: 1.5rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    .svg {
      position: absolute;
      right: 1rem;
      font-size: 1rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2rem;
    }
    p {
      text-align: center;
      font-size: 14px;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      line-height: 1.4rem;
    }
    > span {
      font-size: 2rem;
      line-height: 3.2rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    footer {
      cursor: pointer;
      gap: 14px;
      font-size: 14px;
      display: flex;
      align-items: center;
      span {
        font-size: 1rem;
        font-weight: 700;
        line-height: 2rem;
      }
    }
  }
  .slide-item {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    &::after {
      font-size: 2rem;
    }
  }
`
