import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 18px;
  border-radius: 40px;
  box-shadow: 0px 0px 14px rgba(148, 153, 183, 0.5);
  color: var(--NS-White);
  font: var(--BigButton);
  background-color: var(--NS-Main1);
  user-select: none;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S1);
    padding: 12px;
  }

  &:disabled {
    background-color: var(--Gray2);
  }

  &:hover {
    background-color: var(--NS-Main-Clicked);
  }

  &:disabled:hover {
    background-color: var(--Gray2);
  }
`;
