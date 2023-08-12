import styled from 'styled-components';

export const Container = styled.div`
  background-color: #09071d;
  color: #fff;
  padding: 1rem 0;
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
  padding: 0 1rem;
  span {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
  }
`;

export const Help = styled.div`
  display: flex;
  span {
    padding-left: 1rem;
  }
`;

export const Login = styled.div`
  display: flex;
  div {
    display: flex;
    span {
      padding-left: 1.5rem;
    }
    h4 {
      padding-left: 0.3rem;
    }
  }
`;
