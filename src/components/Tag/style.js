import styled from 'styled-components'

export const Container = styled.span`
  font-size: 0.7rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.3rem;
  margin-right: 0.37rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
`
