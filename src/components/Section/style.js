import styled from 'styled-components'
export const Container = styled.section`
  margin: 28px 0;
  > h2 {
    margin-bottom: 23px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 20px;
    font-weight: 400;
  }
`
