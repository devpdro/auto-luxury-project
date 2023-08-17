import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 4rem 0rem;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.login};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 25px;
  margin-top: 4rem;
  padding: 2rem;
`;

export const Form = styled.div`
  p {
    margin-bottom: 0.8rem;
    font-size: 1rem;
  }
  h6 {
    font-size: 0.9rem;
  }
`;

export const Email = styled.div`
  label {
    font-weight: 700;
    font-size: 1rem;
  }
  input {
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid #201e1e;
    outline: none;
    padding: 0.4rem 0.7rem;
    margin: 0.2rem 0rem 1rem 0rem;
    font-size: 1rem;
    border-radius: 5px;
    display: block;
    width: 100%;
  }
`;

export const Password = styled.div`
  label {
    font-weight: 700;
    font-size: 1rem;
  }
  input {
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid #201e1e;
    outline: none;
    padding: 0.4rem 0.7rem;
    margin: 0.2rem 0rem 1rem 0rem;
    font-size: 1rem;
    border-radius: 5px;
    display: block;
    width: 100%;
  }
`;

export const Submit = styled.div`
  input {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid #201e1e;
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
      border: 2px solid #6550f3;
    }
  }
`;
