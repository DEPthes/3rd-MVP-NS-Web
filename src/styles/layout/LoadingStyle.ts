import { isMobile, isTablet } from '@/hooks/Media';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;

  > svg {
    width: 300px;
    height: 300px;
    animation: ${rotate} 2s linear infinite;
    transition: all 0.3s ease-in-out;

    ${isMobile} {
      width: 160px;
      height: 160px;
    }

    ${isTablet} {
      width: 230px;
      height: 230px;
    }
  }
`;
