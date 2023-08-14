import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 4rem 0rem;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const Information = styled.div``;

export const Text = styled.div`
  h1 {
    padding-top: 0.7rem;
    font-size: 1.4rem;
  }
  p {
    padding: 0.5rem 0;
  }
  h4 {
    font-size: 1.2rem;
  }
`;
