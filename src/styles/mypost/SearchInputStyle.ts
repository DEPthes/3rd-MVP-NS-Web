import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin: 5rem;
  width: 28rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  border-radius: 40px;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  color: #333;
  padding: 0.5rem;

  &::placeholder {
    font: var(--T3);
    color: var(--Gray1);
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
