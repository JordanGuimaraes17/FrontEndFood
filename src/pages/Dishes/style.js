import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100vh;
  grid-template-rows: 5.4rem auto 3.5rem;
`

export const Content = styled.section`
  grid-area: main;
  padding: 0 50px;
  > button {
    margin: 24px 42px;
    font-size: 1.2rem;
  }

  main {
    justify-content: center;
    gap: 48px;
    display: flex;
    align-items: center;
    > img {
      object-fit: cover;
      height: 25rem;
      width: 25rem;
    }
    div {
      h1 {
        margin-bottom: 24px;
        font-size: 40px;
        line-height: 56px;
        font-weight: 500;
      }
      p {
        margin-bottom: 24px;
        font-size: 20px;
        word-wrap: break-word;
      }

      footer {
        > span {
          font-size: 1.8rem;
        }
        gap: 1rem;
        margin-top: 48px;
        display: flex;
        align-items: center;
      }
    }
  }
`
