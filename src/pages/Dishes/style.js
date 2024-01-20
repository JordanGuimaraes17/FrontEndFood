import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100dvh;
  grid-template-rows: 5.2rem auto 3.3rem;
`

export const Content = styled.section`
  grid-area: main;
  padding: 1.5rem 7.5rem;

  > button {
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 2.6rem;
    font-size: 1.2rem;
  }

  main {
    gap: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      object-fit: cover;
      height: 25rem;
      width: 25rem;
    }
    div {
      flex: 1;
      h1 {
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
        line-height: 3.5rem;
        font-weight: 500;
      }
      p {
        font-size: 1.5rem;

        line-height: 2rem;
        margin-bottom: 1.5rem;
      }

      footer {
        > span {
          font-size: 1.8rem;
        }
        gap: 1rem;
        margin-top: 3rem;
        display: flex;
        align-items: center;
      }
    }
  }
`
