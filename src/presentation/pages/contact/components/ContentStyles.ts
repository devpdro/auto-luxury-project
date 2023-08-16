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
  justify-content: space-around;
  margin: 9rem 0rem 5rem 0rem;
`;

export const Information = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.3rem;
    margin-bottom: 0.7rem;
  }
  p {
    margin-bottom: 0.3rem;
    span {
      padding-right: 0.5rem;
    }
  }
`;

export const Text = styled.div`
  padding: 0rem 1rem;
  width: 500px;
  h3 {
    margin: 0rem 0rem 1rem 0rem;
    color: ${({ theme }) => theme.colors.tertiary};
  }
  input {
    width: 100%;
    margin: 0.4rem 0rem;
    padding: 0.2rem 0.7rem;
    border: 1px solid #7e7e7e;
    outline: none;
    font-size: 1rem;
    border-radius: 5px;
  }

  textarea {
    width: 100%;
    margin: 0.4rem 0rem 0rem 0rem;
    padding: 0.2rem 0.7rem;
    border: 1px solid #7e7e7e;
    outline: none;
    font-size: 1rem;
    border-radius: 5px;
    resize: none;
  }

  button {
    margin: 0.8rem 0rem;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid #7e7e7e;
    width: 100%;
    padding: 0.4rem 0rem;
    font-size: 1rem;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    transition: all 0.4s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiary};
      color: ${({ theme }) => theme.colors.secondary};
      transform: scale(1.1);
      font-weight: 300 !important;
      border: 1px solid #6550f3;
    }
  }
`;
