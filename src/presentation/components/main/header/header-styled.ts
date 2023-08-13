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

export const Text = styled.div`
  margin-bottom: 1.2rem;
  h4 {
    font-size: 1.2rem;
    color: #818181;
  }
  h1 {
    font-size: 4rem;
    background-clip: text;
    background-image: linear-gradient(
      135deg,
      #8257e5,
      #ad98df,
      #7b52d9,
      #5e3fa6
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Input = styled.div`
  margin-bottom: 3.8rem;
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

export const Img = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 400px;
`;
