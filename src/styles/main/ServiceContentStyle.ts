import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  width: 987px;
  border-radius: 33.74px;
  background-color: var(--NS-White);
  margin-top: 65px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 320px;
  }

  ${isTablet} {
    width: 650px;
  }

  ${isMobileOrTablet} {
    border-radius: 20px;
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  margin: 52px 0 36.09px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin: 27px 0;
  }
`;

export const HighlightText = styled.span`
  font: var(--LogoMini-2);
  color: var(--NS-Main1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--LogoMini-3);
  }
`;

export const RegularText = styled.p`
  font: var(--M-1);
  color: var(--NS-Black);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--M-3);
  }
`;

export const BoldText = styled.span`
  font: var(--M-2);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--M-4);
  }
`;
