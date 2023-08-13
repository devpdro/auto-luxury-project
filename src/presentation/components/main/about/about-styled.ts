import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid red;
  color: #8257e5;
  padding: 1.5rem 0;
  border-bottom: 3px solid #8257e5;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  margin-top: 3rem;
  display: flex;
`;

export const Text = styled.div``;

export const Information = styled.div`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 1rem;
  display: flex;
  border: 1px solid blue;
  div {
    margin: 1rem;
    width: 45%;
    border: 1px solid red;
  }
`;

export const Img = styled.div``;
