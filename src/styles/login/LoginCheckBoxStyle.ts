import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  ${isMobileOrTablet} {
    gap: 4.3px;
  }
`;

export const LabelText = styled.span`
  color: var(--NS-White);
  font: var(--Label);
  cursor: pointer;
  user-select: none;

  ${isMobileOrTablet} {
    font: var(--P-S2);
  }
`;
