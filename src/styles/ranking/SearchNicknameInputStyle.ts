import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 430px;
  height: 59px;
  display: flex;
  align-items: center;
  border-radius: 40px;
  padding: 13px 28px;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  margin-left: auto;
`;

export const SearchInput = styled.input`
  width: 92px;
  height: 28px;
  border: none;
  outline: none;
  flex: 1;
  color: var(--NS-Black);
  font: var(--T2-2);

  &::placeholder {
    font: var(--T2-2);
    color: var(--Gray1);
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
