import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.quinary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1.5rem 0;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Title = styled.div`
  margin-top: 3.2rem;
  text-align: center;
  h4 {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  h1 {
    font-size: 2rem;
  }
`;

export const Box = styled.div`
  margin: 9rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.div`
  max-width: 700px;
  h1 {
    font-size: 1.7rem;
  }
  p {
    font-weight: 500;
  }
`;

export const Information = styled.div`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 2rem;
  display: flex;
  div {
    display: flex;
    align-items: center;
    padding-left: 3rem;
    margin: 1rem;
    width: 45%;
    span {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      padding-right: 0.5rem;
      color: ${({ theme }) => theme.colors.tertiary};
    }
    h5 {
      font-size: 1rem;
    }
  }
`;

export const Img = styled.div``;
