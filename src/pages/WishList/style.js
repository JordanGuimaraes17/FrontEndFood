import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  > header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    font-size: 1.25rem;
    padding: 1.25rem 1.87rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }
    button {
      font-size: 1.12rem;
    }
  }

  main {
    padding: 2rem;
    .page-title {
      font-weight: 700;
      margin: 0 auto;
      font-size: 2.5rem;
      padding: 2.5rem 0;
    }
    .content {
      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
      display: flex;
      flex-wrap: wrap;

      section {
        flex: 3;
        margin-right: 1rem;
        margin-bottom: 1rem;

        .qty {
          border-radius: 14rem;
          background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
          display: inline-flex;
          align-items: center;
          gap: 1rem;

          button {
            padding: 0.62rem 1rem;
            svg {
              font-size: 1.12rem;
            }
          }
        }
      }

      aside {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
        flex: 1;
        margin-left: 1rem;

        .box {
          margin-bottom: 1rem;
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
          header {
            padding: 1rem 1.12rem;
            font-size: 1.12rem;
          }
          .info {
            padding: 1.25rem;
            > div {
              display: flex;
              justify-content: space-between;
              margin-bottom: 0.62rem;
            }
            > button {
              font-size: 1rem;
              color: ${({ theme }) => theme.COLORS.CAKE_200};
            }
          }
          footer {
            font-size: 1.12rem;
            padding: 0.62rem 1.25rem;
            background-color: ${({ theme }) => theme.COLORS.GRAY_300};
          }
        }

        .button-car {
          width: 100%;
          text-transform: uppercase;
        }
      }
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      tr {
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.LIGHT_700};

        th {
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          text-transform: uppercase;
          text-align: left;
          padding: 1rem;
        }
      }
    }
    tbody {
      tr {
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.LIGHT_700};
        &:last-child {
          border: none;
        }
        td {
          padding: 1rem;
        }
      }
    }
  }

  .product {
    display: flex;
    align-items: center;
    img {
      margin-left: 1rem;
      width: 6.25rem;
      height: 6.25rem;
    }
    .info {
      margin-left: 1.25rem;
    }
    .name {
      font-size: 1.25rem;
      margin-bottom: 0.62rem;
    }
    .category {
      font-size: 0.87rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .remove {
    padding: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  }

  .product {
    img {
      margin: 0;
      width: 4rem;
      height: 4rem;
    }
    .name {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .category {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    main {
      padding: 0 4rem 1.2rem;
      .page-title {
        font-size: 2rem;
        padding: 2rem 0;
      }
      .content {
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > header {
      padding: 1rem 1rem;
      font-size: 1rem;
      span {
        font-size: 0.8rem;
      }
      h3 {
        img {
          width: 1.2rem;
        }
        gap: 1rem;
        font-size: 0.8rem;
      }
      button {
        font-size: 0.8rem;
      }
    }
    main {
      padding: 0 0.8rem;
      .page-title {
        font-size: 1.4rem;
        padding: 1rem 0;
      }
      .content {
        section {
          .qty {
            button {
              padding: 0.4rem 0.4rem;
            }
          }
        }
      }
      table {
        thead {
          th {
            font-size: 0.8rem;
            padding: 0.6rem;
          }
        }
        tbody {
          td {
            padding: 1rem;
          }
        }
      }
      table {
        th:nth-child(4),
        td:nth-child(4) {
          display: none; /* Esconde a quarta coluna (Total) */
        }
        tr td:last-child,
        th:last-child {
          display: none; /* Esconde a última célula do cabeçalho e do corpo da tabela */
        }
      }
      .remove {
        display: none; /* Esconde o botão de remover */
      }
    }
  }
`
