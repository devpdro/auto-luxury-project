import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
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
  padding: 0.5rem 1rem;
  span {
    font-size: 3rem;
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
    color: #09071d;
  }
  h2 {
    font-size: 1.2rem;
  }
`;

export const Reserve = styled.div`
  display: flex;
  align-items: center;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
`;
