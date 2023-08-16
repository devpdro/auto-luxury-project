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
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const Map = styled.div`
  margin-right: 4rem;
  padding: 1rem 0rem 1rem 1rem;
  position: relative;
  max-height: 500px;
  width: 100%;
`;

export const Text = styled.div`
  span {
    font-size: 1rem;
    padding-right: 0.5rem;
  }
  h1 {
    color: ${({ theme }) => theme.colors.tertiary};
    padding-top: 0.7rem;
    font-size: 1.4rem;
  }
  p {
    padding: 0.2rem 0;
  }
  h4 {
    color: ${({ theme }) => theme.colors.tertiary};
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;
