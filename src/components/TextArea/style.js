import styled from 'styled-components'
export const Container = styled.textarea`
  width: 100%;
  height: 10.75rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  border: none;
  resize: none;
  border-radius: 1rem;
  padding: 1.6rem;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
