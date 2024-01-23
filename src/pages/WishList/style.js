import styled from 'styled-components'

export const Container = styled.div`
  > header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    font-size: 24px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }

  main {
    padding: 0 30px;
    .page-title {
      font-size: 40px;
      padding: 50px 0;
      text-align: center;
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
        background: ${({ theme }) => theme.COLORS.GRAY_300};

        .box {
        }
        > button {
          text-transform: uppercase;
        }
        min-width: 250px;
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
      width: 50px;
      height: 50px;
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
