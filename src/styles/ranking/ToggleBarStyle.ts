import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const ToggleBarContainer = styled.div<{ $isOpen: boolean }>`
  margin-top: 70px;
  width: 600px;
  cursor: pointer;
  transition: height 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ $isOpen }) => ($isOpen ? '764px;' : '40px')};
  z-index: 10;

  ${isMobileOrTablet} {
    width: 320px;
    height: ${({ $isOpen }) => ($isOpen ? '405px;' : '19px')};
  }

  ${isMobile} {
    margin-top: 30px;
  }

  ${isTablet} {
    margin-top: 20px;
  }
`;

export const ToggleBarHeader = styled.div`
  color: var(--NS-White);
  display: flex;
  align-items: center;
  border: 1px dashed var(--NS-White);
  border-radius: 20px;
  background-color: transparent;
  justify-content: center;
  font: var(--M1-2);
  padding: 4px 9px;

  ${isMobileOrTablet} {
    border: none;
    font: var(--P-T1);
  }
`;

export const ToggleBarContent = styled.div`
  width: 600px;
  height: 720px;
  margin-top: 22px;
  background-color: var(--NS-White);
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);

  ${isMobileOrTablet} {
    width: 320px;
    height: 380px;
    border-radius: 20px;
    margin-top: 6px;
  }
`;

export const ToggleBarInput = styled.div`
  justify-content: center;
  text-align: center;
  margin: 58px;
  color: var(--Gray1);
  gap: 10px;
  display: flex;
  flex-direction: column;
  font: var(--P-T1);

  ${isMobileOrTablet} {
    font: var(--V3);
    gap: 0;
    margin: 34px;
  }
`;

export const Bold = styled.span`
  font: var(--T3-1);
  display: inline;
  color: var(--NS-Black);

  ${isMobileOrTablet} {
    font: var(--V2);
  }
`;

export const Point = styled.span`
  display: inline;
  font: var(--LogoMini-5);
  color: var(--NS-Main1);

  ${isMobileOrTablet} {
    font: var(--LogoMini-6);
  }
`;

export const Space = styled.div`
  margin-top: 32px;

  &:first-child {
    margin-top: 0; /* 첫 번째 Space 요소에만 margin-top 제거 */
  }
  ${isMobileOrTablet} {
    margin-top: 16px;
  }
`;

export const Small = styled.div`
  height: 16px;
`;
