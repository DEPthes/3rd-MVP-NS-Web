import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 35px;

  font: var(--Button);
  color: var(--NS-White);
  border: none;
  background-color: var(--NS-Main1);

  &:hover {
    background-color: var(--NS-Main-Clicked);
  }

  &:disabled {
    color: var(--Gray2);
    border: 2px solid var(--Gray2);
    background-color: var(--NS-White);
  }

  &:disabled:hover {
    color: var(--Gray2);
    border: 2px solid var(--Gray2);
    background-color: var(--NS-White);
  }
`;
