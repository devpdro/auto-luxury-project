import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  color: #1e1e1f;
  border-bottom: 2px solid #6550f3;
  font-weight: 700;
  position: fixed;
  width: 100vw;
  z-index: 999;
  padding: 1.5rem 0rem;
  font-family: 'Poppins', 'Helvetica';
`;

export const Width = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Box = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  span {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
`;

export const Navbar = styled.ul`
  display: flex;
  list-style: none;
  a {
    text-decoration: none;
    transition: all 0.4s ease;
    &:hover {
      color: #6550f3;
      transform: scale(1.1);
    }
    li {
      color: #1e1e1f;
      margin-left: 0.9rem;
      transition: all 0.4s ease;
      &:hover {
        color: #6550f3;
      }
    }
  }
`;
