import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    font: var(--H1);
    color: var(--NS-White);
    user-select: none;
    text-align: center;
    width: 322px;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--W1);
      width: 129px;
    }
  }

  > svg {
    ${isMobileOrTablet} {
      width: 16px;
      height: 16px;
    }
  }
`;
