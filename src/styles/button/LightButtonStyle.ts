import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 35px;

  font: var(--Button);
  color: var(--NS-Main1);
  border: 1.5px solid var(--NS-Main1);
  background-color: var(--NS-White);

  &:hover {
    background-color: var(--NS-Main4);
  }
`;
