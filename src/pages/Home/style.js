import styled from 'styled-components'
export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100dvh;
  grid-template-rows: 5.4rem auto 3.5rem;
`
export const Content = styled.section`
  margin: 0 auto;

  main {
    grid-area: main;
    overflow-y: auto;
    max-height: calc(100dvh - 9.4rem);

    &::-webkit-scrollbar {
      width: 0; /* Oculta a barra de rolagem no Chrome/Safari/Opera */
    }
    scrollbar-width: thin; /* Oculta a barra de rolagem no Firefox */
    /* Oculta a barra de rolagem no Microsoft Edge */

    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
  }

  .box {
    display: flex;
    align-items: center;
    margin-top: 6rem;
    height: 13rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
  .box img {
    width: 30rem;
    height: 18rem;
    margin-top: -5rem;

    object-fit: contain;
  }
  .text h2 {
    font-weight: 500;
    font-size: 2.5rem;
  }
  .text span {
    font-size: 0.87rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
