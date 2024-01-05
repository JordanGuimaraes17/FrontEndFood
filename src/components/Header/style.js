import styled from 'styled-components'
export const Container = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  padding: 0 80px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`
