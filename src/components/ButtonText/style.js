import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};
  border: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  > svg {
    margin-right: 0.5rem;
  }
`
