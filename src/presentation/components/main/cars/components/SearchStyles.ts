import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 0rem;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0rem;
  text-align: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h4 {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  h1 {
    margin-bottom: 2.5rem;
    font-size: 2rem;
  }
`;

export const Details = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid #6550f3;
  max-width: 140px;
  padding: 0.5rem 1rem;
  outline: none;
  margin: 0rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
`;

export const Reserve = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  border: 2px solid #6550f3;
  max-width: 200px;
  padding: 0.5rem 1rem;
  outline: none;
  margin: 0rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    padding-right: 0.2rem;
  }
`;
