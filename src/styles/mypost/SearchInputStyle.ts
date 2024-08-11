import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-top: 177px;
  margin-bottom: 53px;
  width: 450px;
  hegith: 60px;
  display: flex;
  padding: 18px 28px;
  align-items: center;
  border-radius: 40px;
  background-color: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  height: 24px;
  border: none;
  outline: none;
  flex: 1;
  font: var(--T2-2);
  color: #333;

  &::placeholder {
    font: var(--T2-2);
    color: var(--Gray1);
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
