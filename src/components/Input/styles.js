import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border-radius: 0.43rem;

  > input {
    height: 3.5rem;
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
