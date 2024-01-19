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
    .buttonText {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 700;
      line-height: 33.6px;
    }
    display: flex;
    flex-direction: column;
    padding: 20px 80px;

    .input-wrapper label {
      margin-bottom: 8px;
    }

    .input-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
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
      margin-bottom: 32px;
      display: flex;
      gap: 22px;
    }
    .col-2 {
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

    .button {
      margin-top: 32px;
      align-self: flex-end;
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
`
