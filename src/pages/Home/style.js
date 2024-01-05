import styled from 'styled-components'
export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content' 'footer';
  width: 100%;
  height: 100vh;
  grid-template-rows: 5rem auto 3rem;
`
export const Content = styled.section`
  grid-area: content;
  padding: 0 7.75rem;

  .box {
    display: flex;
    align-items: center;

    margin-top: 10rem;
    height: 16rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
  .box img {
    margin-top: -9rem;
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
export const Footer = styled.footer`
  grid-area: footer;
  padding: 1rem 7.75rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`
