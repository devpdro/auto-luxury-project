import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.quinary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 8rem 0rem;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Title = styled.div`
  text-align: center;
  h4 {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  h1 {
    margin-bottom: 2.5rem;
    font-size: 2rem;
  }
`;

export const Box = styled.div`
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin: 0rem 10rem;
  transition: all 0.4 ease;
  h1 {
    padding: 1rem;
    text-align: left;
    font-size: 1.4rem;
  }
`;
