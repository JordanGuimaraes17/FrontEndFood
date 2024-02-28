import styled from 'styled-components'
export const Container = styled.textarea`
  width: 100%;
  min-height: 10rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  border: none;
  resize: none;
  border-radius: 0.7rem;
  padding: 1rem;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
