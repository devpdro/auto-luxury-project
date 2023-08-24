import styled from 'styled-components';

export const Container = styled.div`
  background-color: #dedde3;
  color: #1e1e1f;
  padding: 1.5rem 0;
  font-family: 'Poppins', 'Helvetica';
`;

export const Width = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin-top: 3.2rem;
  text-align: center;
  h4 {
    color: #6550f3;
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
    justify-content: center;
    align-items: center;
    padding-left: 3rem;
    margin: 1rem;
    padding: 1rem;
    width: 45%;
    box-shadow:
      rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.4s ease;
    &:hover {
      background-color: #1e1e1f;
      color: #6550f3;
      transform: scale(1.1);
    }
    span {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      padding-right: 0.5rem;
      color: #6550f3;
    }
    h5 {
      font-size: 1rem;
    }
  }
`;

export const Img = styled.div``;
