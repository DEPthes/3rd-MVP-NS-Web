import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transition: all 0.3s ease-in-out;
`;

export const WarningText = styled.p<{ color: string }>`
  font: var(--T5);
  color: ${({ color }) => color};
  margin-top: 2px;
  text-align: left;
  height: 34px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--T5-B);
    width: 230px;
    height: 23px;
  }
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
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    border-bottom: 1px solid;
    border-color: ${({ color }) => color};
    width: 237px;
    padding-bottom: 6px;
    margin-bottom: 0px;
  }
`;

export const Input = styled.input<{ color: string }>`
  font: var(--T3-1);
  border: none;
  width: 100%;
  padding-left: 0;
  padding-right: 10px;
  color: ${({ color }) => color};
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: var(--NS-Main1);
  }

  ${isMobileOrTablet} {
    font: var(--P-S1);
  }
`;
