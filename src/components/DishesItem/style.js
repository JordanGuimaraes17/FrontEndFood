import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.COLORS.LIGHT_600};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_600}` : 'none'};
  border-radius: 8px;
  padding: 10px 16px;

  > button {
    border: none;
    background: none;
  }
  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }
  > input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    &&placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    }
  }
`
