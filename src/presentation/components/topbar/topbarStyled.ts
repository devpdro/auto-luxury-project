import styled from 'styled-components';

export const Container = styled.div`
  background-color: blue;
  div {
    max-width: ${({ theme }) => theme.width.standard};
    margin: ${({ theme }) => theme.width.margin};
  }
`;
