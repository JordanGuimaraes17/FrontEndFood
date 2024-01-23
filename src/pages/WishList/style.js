import styled from 'styled-components'
export const Container = styled.div`
  > header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    font-size: 20px;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    button {
      font-size: 18px;
    }
  }

  main {
    padding: 0 30px 30px;
    .page-title {
      font-weight: 700;
      margin: 0 auto;
      font-size: 40px;
      padding: 40px 0;
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
            padding: 10px 15px;
            svg {
              font-size: 18px;
            }
          }
        }
      }
      aside {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

        .box {
          margin-left: 20px;
          margin-bottom: 15px;
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
          header {
            padding: 15px 20px;
            font-size: 18px;
          }
          .info {
            padding: 20px;
            > div {
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
            }
            > button {
              font-size: 16px;
              color: ${({ theme }) => theme.COLORS.CAKE_200};
            }
          }
          footer {
            font-size: 18px;
            padding: 10px 20px;
            background-color: ${({ theme }) => theme.COLORS.GRAY_300};
          }
        }
        .button-car {
          margin-left: 20px;

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
          padding: 30px 10px;
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
          padding: 30px 0;
        }
      }
    }
  }
  .product {
    display: flex;
    align-items: center;
    img {
      margin-left: 15px;
      width: 80px;
      height: 80px;
    }
    .info {
      margin-left: 20px;
    }
    .name {
      font-size: 20px;
      margin-bottom: 10px;
    }
    .category {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  .remove {
    padding: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  }
`
