import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 75.5px 0;
  align-items: center;
  justify-content: center;
  background: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  border-radius: 40px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 320px;
    padding: 16px 0;
    border-radius: 20px;
  }
`;

export const Emoji = styled.div`
  font: var(--emoji);
  margin-bottom: 21px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--emoji-2);
    margin-bottom: 10px;
  }
`;

export const Title = styled.div<{ $usage?: boolean }>`
  font: var(--H2);
  color: var(--NS-Black);
  margin-bottom: 8px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-T1);
    margin-bottom: ${({ $usage }) => ($usage ? '10px' : '6.4px')};
  }
`;

export const Content = styled.div`
  font: var(--T4);
  color: var(--NS-Black);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S1-2);
  }
`;
