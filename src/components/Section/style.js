import styled from 'styled-components'
export const Container = styled.section`
  margin: 28px 0;
  > h2 {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
    line-height: 44.8px;
  }
`
