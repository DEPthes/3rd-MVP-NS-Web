import styled from 'styled-components';
import { isMobile, isMobileOrTablet, isTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 31px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const TabletWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 31px;
  transition: all 0.3s ease-in-out;

  ${isTablet} {
    gap: 10px;
  }

  ${isMobile} {
    flex-direction: column;
    gap: 10px;
  }
`;