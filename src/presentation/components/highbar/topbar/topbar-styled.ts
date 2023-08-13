import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  color: #8257e5;
  position: fixed;
  width: 100vw;
  z-index: 1;
  padding: 1.5rem 0;
  border-bottom: 3px solid #8257e5;
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

export const Navbar = styled.ul`
  display: flex;
  li {
    text-align: center;
    display: flex;
    margin-left: 2rem;
    font-weight: 600;
    list-style: none;
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
