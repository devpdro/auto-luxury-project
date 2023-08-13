import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f3f4;
  color: #000;
  padding: 1rem 0;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  margin: 3.5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Details = styled.input`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1rem 1.5rem;
  color: #818181;
  border-radius: 10px;
  background-color: #f4f3f4;
  border: 2px solid #8257e5;
  outline: none;
  margin-right: 1rem;
`;

export const Reserve = styled.input`
  padding: 1rem 1.5rem;
  color: #fff;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  font-family: 'Poppins', sans-serif;
  border: none;
  outline: none;
  background-color: #8257e5;
`;
