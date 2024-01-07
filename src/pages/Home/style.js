import styled from 'styled-components'
export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100vh;
  grid-template-rows: 5rem auto 3.5rem;
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
    margin-top: 9.5rem;
    height: 16.25rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
  .box img {
    margin-top: -9rem;
    flex-shrink: 0;
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
