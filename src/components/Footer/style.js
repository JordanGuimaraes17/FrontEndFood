import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;
  padding: 1rem 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  > h3 {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 14px;
  }
`
