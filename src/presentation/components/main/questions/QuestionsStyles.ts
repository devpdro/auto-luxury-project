import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
 from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  background-color: #dedde3;
  color: #1e1e1f;
  padding: 10rem 0rem;
  font-family: 'Poppins', 'Helvetica';
`;

export const Width = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.div`
  text-align: center;
  h4 {
    color: #6550f3;
  }
  h1 {
    font-size: 2rem;
  }
`;

export const Box = styled.div`
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin: 8rem 1.5rem 5rem 1.5rem;
  border-radius: 25px;
  h1 {
    padding: 0.8rem 1rem 0.5rem 1rem;
    text-align: left;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export const Line = styled.hr`
  margin: 0.5rem 1rem;
  background-color: red;
`;

export const Answer = styled.p`
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(-10px);
  animation: ${fadeIn} 0.5s forwards;
  padding: 0rem 1rem 0rem 1rem;
`;
