import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  width: 987px;
  height: 528.09px;
  border-radius: 33.74px;
  background-color: var(--NS-White);
  margin-top: 65px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);

  ${isMobile} {
    width: 320px;
    height: 344px;
    margin: 16px 0;
  }

  ${isTablet} {
    height: 344px;
    width: 650px;
    margin: 16px 39px;
  }
`;

export const Content = styled.div`
  margin: 52px 127px 36.09px;
  ${isMobileOrTablet} {
    margin: 27px 21px;
  }

  ${isMobile} {
    width: 278px;
    height: 290px;
  }
`;

export const HighlightText = styled.span`
  font: var(--LogoMini-2);
  color: var(--NS-Main1);

  ${isMobileOrTablet} {
    font: var(--LogoMini-3);
  }
`;

export const RegularText = styled.p`
  font: var(--M-1);
  color: var(--NS-Black);
  margin: 10px 0;
  white-space: pre-line;

  ${isMobileOrTablet} {
    font: var(--M-3);
  }
`;

export const BoldText = styled.span`
  font: var(--M-2);
  ${isMobileOrTablet} {
    font: var(--M-4);
  }
`;
