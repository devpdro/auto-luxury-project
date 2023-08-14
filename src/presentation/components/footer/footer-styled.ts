import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 0;
  border-top: 2px solid #6550f3;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 0rem;
`;

export const Text = styled.div`
  max-width: 600px;
  h1 {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    span {
      display: flex;
      align-items: center;
      padding-right: 0.5rem;
      font-size: 2.2rem;
    }
  }
`;

export const Links = styled.div`
  display: flex;
`;

export const Quicklinks = styled.div`
  h1 {
    font-size: 1.8rem;
  }
  ul {
    list-style: none;
  }
`;

export const Contact = styled.div`
  padding-left: 5rem;
  h1 {
    font-size: 1.8rem;
  }
  ul {
    list-style: none;
  }
`;
