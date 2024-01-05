import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.LIGHT_100 : theme.COLORS.TOMATO_100};
  border: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`
