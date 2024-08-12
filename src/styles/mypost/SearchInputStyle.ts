import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-top: 117px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 53px;
  width: 450px;
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);
  background-color: var(--NS-White);
  border-radius: 100px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 18px 28px;
  border: none;
  font: var(--Input);
  color: var(--NS-Black);
  background-color: transparent;

  &::placeholder {
    font: var(--T2-2);
    color: var(--Gray1);
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 28px;
`;
