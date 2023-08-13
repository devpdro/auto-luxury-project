import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.quinary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 6rem 0;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Text = styled.div`
  h1 {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      135deg,
      #6550f3,
      #5e3fa6,
      #6550f3,
      #5e3fa6
    );
    background-clip: text;
    font-size: 4rem;
  }
  h4 {
    padding-bottom: 2.5rem;
    font-size: 1.1rem;
  }
`;

export const Input = styled.div`
  padding-bottom: 3.2rem;
`;

export const Details = styled.input`
  background-color: ${({ theme }) => theme.colors.quinary};
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
  margin-right: 1rem;
  padding: 0.6rem 1.3rem;
  border: 2px solid #6550f3;
  border-radius: 25px;
  font-weight: 700;
`;

export const Reserve = styled.input`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.6rem 1.3rem;
  border-radius: 25px;
  border: 2px solid #6550f3;
  outline: none;
`;
