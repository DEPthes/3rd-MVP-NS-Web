import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Button = styled.button<{ isSmall: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 35px;

  font: var(--Button);
  color: var(--NS-White);
  border: none;
  background-color: var(--NS-Main1);
  padding: 0;

  ${isMobileOrTablet} {
    width: ${({ isSmall }) => (isSmall ? 43 : 62)}px;
    height: ${({ isSmall }) => (isSmall ? 20 : 30)}px;
    font: var(${({ isSmall }) => (isSmall ? '--P-S2' : '--P-S1')});
  }

  &:hover {
    background-color: var(--NS-Main-Clicked);
  }

  &:disabled {
    color: var(--Gray2);
    border: 2px solid var(--Gray2);
    background-color: var(--NS-White);

    ${isMobileOrTablet} {
      border: 1px solid var(--Gray2);
    }
  }

  &:disabled:hover {
    color: var(--Gray2);
    border: 2px solid var(--Gray2);
    background-color: var(--NS-White);

    ${isMobileOrTablet} {
      border: 1px solid var(--Gray2);
    }
  }
`;
