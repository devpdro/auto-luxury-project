import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  color: #1e1e1f;
  padding: 9rem 0rem;
`;

export const Width = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Box = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  margin: 9rem 0rem 5rem 0rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const Information = styled.div`
  padding-right: 0.5rem;
  @media (max-width: 1000px) {
    text-align: center;
    margin-bottom: 1rem;
    p {
      text-align: left;
    }
  }
  h3 {
    color: #6550f3;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.3rem;
    margin-bottom: 0.7rem;
  }
  p {
    margin-bottom: 0.3rem;
    span {
      padding-right: 0.5rem;
    }
  }
`;

export const Text = styled.div`
  @media (max-width: 1000px) {
    width: 70% !important;
  }
  @media (max-width: 800px) {
    width: 100% !important;
  }
  padding: 0rem 1rem;
  width: 38%;
  h3 {
    margin: 0rem 0rem 1rem 0rem;
    color: #6550f3;
  }
  input {
    width: 100%;
    margin: 0.4rem 0rem;
    padding: 0.4rem 0.7rem;
    border: 1px solid #7e7e7e;
    outline: none;
    font-size: 1.1rem;
    border-radius: 5px;
  }

  textarea {
    width: 100%;
    margin: 0.4rem 0rem 0rem 0rem;
    padding: 0.4rem 0.7rem;
    border: 1px solid #7e7e7e;
    outline: none;
    font-size: 1.1rem;
    border-radius: 5px;
    resize: none;
  }

  button {
    margin: 0.8rem 0rem;
    color: #1e1e1f;
    border: 1px solid #7e7e7e;
    width: 100%;
    padding: 0.4rem 0rem;
    font-size: 1.1rem;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    transition: all 0.4s ease;
    &:hover {
      background-color: #6550f3;
      color: #fff;
      transform: scale(1.1);
      font-weight: 300 !important;
      border: 1px solid #6550f3;
    }
  }
`;
