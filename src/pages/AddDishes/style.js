import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  min-height: 100vh;
  grid-template-rows: 5.2rem auto 3.3rem;
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-rows: 4rem auto 2.5rem;
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    grid-template-rows: 4.2rem auto 3rem;
  }
`
export const Content = styled.section`
  main {
    grid-area: main;
  }
  form {
    padding: 0 7.68rem;
    .buttonText {
      margin: 1rem 0 1rem;
      font-size: 1.12rem;
      font-weight: 700;
      line-height: 2.1rem;
    }
    .avatar {
      align-items: center;
      display: flex;
      gap: 1rem;
      padding: 4px 8px;
      align-items: center;
      border-radius: 0.43rem;
      height: 3.5rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      label {
        cursor: pointer;
      }

      input {
        display: none;
      }

      svg {
        cursor: pointer;
        margin: 0px 10px 0 10px;
      }
    }
    h2 {
      margin-bottom: 0.4rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    .input-wrapper2 {
      > div {
        height: 3.5rem;
      }
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .input-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .input-wrapper label {
      margin: 0.62rem 0 0.62rem;
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
      gap: 1.37rem;
    }
    .col-2 {
      align-items: center;
      display: flex;
      gap: 1rem;
      padding: 4px 8px;
      align-items: center;
      border-radius: 0.43rem;
      height: 3.5rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    .price {
      display: flex;
      flex-direction: column;
      > div {
        height: 3.5rem;
      }
    }
    p {
      margin: 0.62rem 0 0.62rem;
    }

    footer {
      margin-top: 1.5rem;
      gap: 1rem;
      display: flex;
      float: right;
    }
    footer button:first-child {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
    footer button:nth-child(2) {
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
    .button {
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    form {
      .button {
        width: 100%;
        margin-bottom: 1rem;
      }
      padding: 0 1.8rem;
      h2 {
        font-size: 1rem;
      }

      .col-1 {
        flex-direction: column;
        gap: 0;
      }
    }
    footer {
      margin-bottom: 1.4rem;
    }
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    form {
      padding: 0.4rem 2.4rem;
      .buttonText {
        font-size: 1rem;
        margin: 0;
      }
      h2 {
        font-size: 1.2rem;
      }

      .avatar {
        height: 3rem;
      }

      .input-wrapper2 {
        > div {
          height: 3rem;
        }
      }
      .input-wrapper select {
        height: 3rem;
      }

      footer {
        margin-bottom: 1.4rem;
      }
    }
  }
`
