import styled from 'styled-components';

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 29px;
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  background-color: var(--NS-White);
`;

export const Input = styled.input`
  font: var(--Input);
  color: var(--NS-Black);
  border: none;
  width: 100%;
  padding-right: 10px;

  &::placeholder {
    color: var(--NS-Main2);
  }
`;
