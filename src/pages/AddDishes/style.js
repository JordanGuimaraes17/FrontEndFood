import styled from 'styled-components'
export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100dvh;
  grid-template-rows: 5.4rem auto 3.5rem;
`
export const Content = styled.section`
  main {
    grid-area: main;
  }
  form {
    padding: 20px 123px;
    .buttonText {
      font-size: 18px;
      font-weight: 700;
      line-height: 33.6px;
    }
    .avatar {
      align-items: center;
      display: flex;
      gap: 16px;
      padding: 4px 8px;
      align-items: center;
      border-radius: 0.43rem;
      height: 3.5rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      input {
        display: none;
      }

      svg {
        cursor: pointer;
        margin: 0px 10px 0 10px;
      }
    }
    h1 {
      font-size: 32px;
      font-weight: 500;
      line-height: 44.8px;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .input-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .input-wrapper label {
      margin: 8px 0 8px;
    }

    .input-wrapper select {
      height: 3.5rem;
      font-size: 1rem;
      padding: 0.75rem;
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: right 24px top 50%;
    }
    select {
      border: none;
      border-radius: 0.43rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_500};

      > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .col-1 {
      display: flex;
      gap: 22px;
    }
    .col-2 {
      align-items: center;
      display: flex;
      gap: 16px;
      padding: 4px 8px;
      align-items: center;
      border-radius: 0.43rem;
      height: 3.5rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    .price {
      display: flex;
      width: 30%;
      flex-direction: column;
    }
    p {
      margin: 8px 0 8px;
    }

    .button {
      float: right;
      margin-top: 32px;
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
`
export const Header = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  padding: 0 5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  .new {
    width: 17%;
  }
`
