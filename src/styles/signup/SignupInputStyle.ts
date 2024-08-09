import styled from 'styled-components';

export const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const WarningText = styled.p<{ color: string }>`
  font: var(--T5);
  color: ${({ color }) => color};
  margin-top: 2px;
  text-align: left;
  height: 34px;
`;

export const InputWrap = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid;
  border-color: ${({ color }) => color};
  width: 405px;
  padding-bottom: 10px;
  margin-bottom: 0px;
`;

export const Input = styled.input<{ color: string }>`
  font: var(--T3-1);
  border: none;
  width: 100%;
  padding-right: 10px;
  background-color: transparent;
  color: ${({ color }) => color};

  &::placeholder {
    color: var(--NS-Main1);
  }
`;
