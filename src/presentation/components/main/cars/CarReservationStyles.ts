import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.quinary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10rem 0 6rem 0rem;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div``;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0rem 1rem;
`;

export const Details = styled.div`
  text-align: center;
  margin: 0rem 1rem 2rem 1rem;
  padding: 2rem;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  h1 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  img {
    width: 300px;
    height: 150px;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
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
`;
