import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f3f4;
  color: #000;
  padding: 1rem 0;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div``;

export const Text = styled.div``;
