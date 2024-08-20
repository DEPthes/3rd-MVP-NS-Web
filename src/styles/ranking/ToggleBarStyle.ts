import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const ToggleBarContainer = styled.div<{ $isOpen: boolean }>`
  margin-top: 70px;
  width: 600px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: height 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: ${({ $isOpen }) => ($isOpen ? '764px;' : '40px')};

  ${isMobileOrTablet}
  width: 320px;
  height: ${({ $isOpen }) => ($isOpen ? '412px;' : '19px')};
`;

export const ToggleBarHeader = styled.div`
  width: 231px;
  heigth: 30px;
  font-size: 16px;
  color: var(--NS-White);
  display: flex;
  align-items: center;
  border: 1px dashed var(--NS-White);
  border-radius: 20px;
  background-color: transparent;
  justify-content: center;
  font: var(--M1-2);
  padding: 4px;
  ${isMobile} {
    width: 328px;
    height: 19px;
  }
  ${isTablet} {
    width: 320px;
    height: 19px;
  }

  ${isMobileOrTablet} {
    border: none;
    font: var(--P-T1);
  }
`;

export const ToggleBarContent = styled.div`
  width: 600px;
  height: 720px;
  margin-top: 10px;
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
  width: 385px;
  height: 604px;
  margin: 58px 107.5px;
  text-align: center;
  color: var(--Gray1);
  gap: 10px;
  display: flex;
  flex-direction: column;
  font: var(--P-T1);

  ${isMobileOrTablet} {
    font: var(--V3);
    width: 248px;
    height: 312px;
    margin: 32px 36px;
    gap: 8px;
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
