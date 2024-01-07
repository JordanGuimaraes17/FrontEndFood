import styled from 'styled-components'
export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100vh;
  grid-template-rows: 5.4rem auto 3.5rem;
`
export const Content = styled.section`
  margin: 0 auto;
  padding: 0 7.75rem 2.6rem;

  main {
    grid-area: main;
  }

  .box {
    width: 70rem;
    display: flex;
    align-items: center;
    margin-top: 7rem;
    height: 13rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
  .box img {
    width: 450px;
    height: 290px;
    margin-top: -5rem;

    object-fit: cover;
  }
  .text h2 {
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
  .text span {
    font-size: 0.87rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
