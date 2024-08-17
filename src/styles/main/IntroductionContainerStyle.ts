import styled from 'styled-components';
import { isMobile, isTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  width: 1230px;
  gap: 90px;

  ${isTablet} {
    width: 728px;
    height: 292.8px;
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
