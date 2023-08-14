import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.quinary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1.2rem 0rem 0rem 0rem;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  span {
    color: ${({ theme }) => theme.colors.tertiary};
    display: flex;
    align-items: center;
    padding-right: 1rem;
    font-size: 3rem;
  }
  h2 {
    font-size: 1rem;
  }
`;

export const Reserve = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
    transform: scale(1.1);
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
    transform: scale(1.1);
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
    transform: scale(1.1);
  }
`;
