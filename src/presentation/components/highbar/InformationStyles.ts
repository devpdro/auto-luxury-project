import styled from 'styled-components';

export const Container = styled.div`
  background-color: #dedde3;
  color: #1e1e1f;
  padding: 1.7rem 0rem 0rem 0rem;
  font-family: 'Poppins', 'Helvetica';
`;

export const Width = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Box = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 4.5rem;
  @media (max-width: 800px) {
    display: none;
  }
  a {
    text-decoration: none;
    color: #1e1e1f;
  }
  span {
    color: #6550f3;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    font-size: 3rem;
  }
  h2 {
    font-size: 1rem;
  }
`;

export const Reserve = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  &:hover {
    color: #6550f3;
    transform: scale(1.1);
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  &:hover {
    color: #6550f3;
    transform: scale(1.1);
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  &:hover {
    color: #6550f3;
    transform: scale(1.1);
  }
`;
