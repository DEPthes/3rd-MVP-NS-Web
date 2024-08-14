import styled from 'styled-components';
import { isMobile, isTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  width: 1230px;

  ${isTablet} {
    width: 728px;
    max-height: 328px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    row-gap: 0;
  }
  ${isMobile} {
    display: flex;
    flex-direction: column;
    width: 320px;
    gap: 10px;
  }
`;

export const Arrow = styled.div`
  width: 43.3px;
  height: 27px;
  margin: 153px 32px 0 31px;
`;
