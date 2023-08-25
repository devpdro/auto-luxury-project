import styled from 'styled-components';

export const Container = styled.div`
  color: #1e1e1f;
  padding: 1rem 0;
  font-family: 'Poppins', 'Helvetica';
  border-top: 2px solid #6550f3;
`;

export const Width = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 2.5rem 0rem;
  @media (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 1099px) {
    justify-content: center !important;
  }
`;

export const Text = styled.div`
  max-width: 700px;
  padding-right: 0.5rem;
  margin-bottom: 1rem;
  h1 {
    color: #6550f3;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    span {
      display: flex;
      align-items: center;
      padding-right: 0.5rem;
      font-size: 2.2rem;
    }
  }
`;

export const Links = styled.div`
  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
  @media (max-width: 1099px) {
    justify-content: space-between;
  }
  display: flex;
  a {
    text-decoration: none;
    color: #1e1e1f;
  }
`;

export const Quicklinks = styled.div`
  h1 {
    font-size: 1.8rem;
    color: #6550f3;
  }
  ul {
    list-style: none;
    li {
      transition: all 0.4s ease;
      &:hover {
        color: #6550f3;
        transform: scale(1.1);
      }
    }
  }
`;

export const Contact = styled.div`
  @media (min-width: 1280px) {
    padding-left: 3.5rem !important;
  }
  padding-left: 1rem;
  span {
    font-size: 1rem;
    padding-right: 0.5rem;
  }
  h1 {
    font-size: 1.8rem;
    color: #6550f3;
  }
  ul {
    list-style: none;
    li {
      transition: all 0.4s ease;
      &:hover {
        color: #6550f3;
        transform: scale(1.1);
      }
    }
  }
`;
