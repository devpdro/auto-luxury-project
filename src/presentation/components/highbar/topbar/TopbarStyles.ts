import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid #6550f3;
  font-weight: 700;
  position: fixed;
  width: 100vw;
  z-index: 999;
  padding: 1.5rem 0rem;
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
      color: ${({ theme }) => theme.colors.tertiary};
      transform: scale(1.1);
    }
    li {
      color: ${({ theme }) => theme.colors.primary};
      margin-left: 0.9rem;
      transition: all 0.4s ease;
      &:hover {
        color: ${({ theme }) => theme.colors.tertiary};
      }
    }
  }
`;
