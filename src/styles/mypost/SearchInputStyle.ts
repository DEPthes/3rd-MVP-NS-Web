import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-top: 117px;
  margin-bottom: 53px;
  width: 430px;
  hegith: 60px;
  display: flex;
  padding: 18px 28px;
  border-radius: 40px;
  background-color: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  width: 218px;
  height: 24px;
  flex: 1;
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
