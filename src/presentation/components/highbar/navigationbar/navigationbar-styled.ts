import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  /*background-image: linear-gradient(
    185deg,
    #ede5f6,
    #efe6f5,
    #fdf9fb,
    #f1f6ff,
    #ebf0ff,
    #e3ebeb,
    #f6f8ff
  );*/
  padding: 1rem 0;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding: 0rem 1rem;
    list-style: none;
  }
`;
