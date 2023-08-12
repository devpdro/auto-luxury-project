import styled from 'styled-components';

export const Container = styled.div`
  background-color: #09071d;
  color: #fff;
  padding: 0.9rem 0;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  span {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }
`;

export const Help = styled.div`
  display: flex;
  h4 {
    padding: 0 1rem;
  }
`;

export const Login = styled.div`
  display: flex;
  div {
    display: flex;
    span {
      padding-left: 0.8rem;
    }
    h4 {
      padding: 0 1rem 0 0.3rem;
    }
  }
`;
