import styled from 'styled-components'
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
    padding: 0 1.8rem 1.8rem;
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

      section {
        flex: 1;
        .qty {
          border-radius: 20px;
          background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
          display: inline-flex;
          align-items: center;
          gap: 10px;

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

        .box {
          margin-left: 1.25rem;
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
          margin-left: 1.25rem;

          width: 93.5%;
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
          padding: 1.87rem 1.25rem;
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
          padding: 1.87rem 0;
        }
      }
    }
  }
  .product {
    display: flex;
    align-items: center;
    img {
      margin-left: 15px;
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
`
