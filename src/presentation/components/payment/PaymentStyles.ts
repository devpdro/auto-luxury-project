import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Form = styled.form`
  margin: 0rem 0rem 8rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-weight: 700;
    font-size: 0.9rem;
    padding-top: 0.2rem;
    text-align: center;
  }
`;

export const Button = styled.button`
  background-color: #6550f3;
  color: #fff;
  margin: 0rem 0rem;
  border: 1px solid #6550f3;
  width: 65%;
  padding: 0.4rem 0rem;
  font-size: 1.1rem;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
