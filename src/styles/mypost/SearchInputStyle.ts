import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-top: 117px;
  width: 450px;
  heigth: 60px;
  padding: 18px 28px;
  display: flex;
  border-radius: 40px;
  background-color: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);
`;

export const Input = styled.input`
  width: 218px;
  height: 24px;
  flex: 1;
  padding: 0;
  border: none;
  outline: none;
  display: flex;
  font: var(--T2-2);
  color: var(--NS-Black);

  &::placeholder {
    font: var(--T2-2);
    color: var(--Gray1);
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 152px;
`;
