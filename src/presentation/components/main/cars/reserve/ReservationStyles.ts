import styled, { keyframes } from 'styled-components';

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const slideEnter = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideExit = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  color: #1e1e1f;
  padding: 6.4rem 0rem 0rem 0rem;
  font-family: 'Poppins', 'Helvetica';
`;

export const Width = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Box = styled.div``;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0rem 1rem;
`;

export const Details = styled.div`
  text-align: center;
  margin: 0rem 1rem 3.5rem 1rem;
  padding: 1.5rem 2rem 1rem 2rem;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  h1 {
    margin-top: 1rem;
    font-size: 1.8rem;
  }
  h5 {
    margin-top: 0.4rem;
    font-size: 1.1rem;
  }
  img {
    width: 300px;
    height: 150px;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h6 {
    display: flex;
    font-size: 1.1rem;
    margin: 0.4rem 0rem 1rem 0rem;
    span {
      display: flex;
      align-items: center;
      padding-right: 0.1rem;
      font-size: 1.1rem;
    }
  }
`;

export const Button = styled.button`
  background-color: #6550f3;
  color: #fff;
  border: 2px solid #6550f3;
  max-width: 200px;
  padding: 0.5rem 1rem;
  outline: none;
  margin: 0rem auto;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease;
  &.cancel {
    background-color: red;
    border: 2px solid red;
  }
`;

export const Launcher = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  div {
    position: absolute;
    top: 33%;
    left: 44%;
    animation: ${rotate} 2s linear infinite;
    border: 4px solid #fff;
    border-top: 4px solid #000;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-right: 15px;
  }
`;

export const Progress = styled.div`
  background-color: #c58320;
  animation: ${slideEnter} 1s ease both;
  border: 2px solid #dedde3;
  position: fixed;
  bottom: 0%;
  left: 36%;
  width: 30%;
  margin-bottom: 2rem;
  padding: 1.5rem;
  z-index: 999;
  border-radius: 15px;
  &.slideExit {
    animation: ${slideExit} 0.8s ease both;
  }
  div {
    text-align: center;
    color: #fff;
    p {
      color: #fff;
    }
    h6 {
      color: red;
    }
  }
`;

export const Conclusion = styled.div`
  background-color: #60c060;
  animation: ${slideEnter} 1s ease both;
  border: 1px solid #dedde3;
  position: fixed;
  bottom: 0%;
  left: 36%;
  width: 30%;
  margin-bottom: 2rem;
  padding: 1.5rem;
  z-index: 999;
  border-radius: 15px;
  div {
    text-align: center;
    color: #fff;
    p {
      color: #fff;
    }
  }
`;

export const Reserve = styled.div`
  font-weight: 700;
  margin-top: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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

export const ButtonSubmit = styled.button`
  background-color: #6550f3;
  color: #fff;
  border: 2px solid #6550f3;
  width: 50%;
  padding: 0.5rem 1rem;
  outline: none;
  margin: 0rem auto;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
