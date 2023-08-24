import styled from 'styled-components';

export const Container = styled.div`
  background-color: #dedde3;
  color: #1e1e1f;
  padding: 1rem 0;
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
  margin: 0rem 1rem 2rem 1rem;
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
  &:hover {
    transform: scale(1.1);
  }
`;
