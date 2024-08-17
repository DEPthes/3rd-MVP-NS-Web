import { isMobileOrTablet, isTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div<{ usage?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 350px;
  align-items: center;
  justify-content: center;
  background: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  border-radius: 40px;

  ${isMobileOrTablet} {
    width: 320px;
    height: ${({ usage }) => (usage ? '159px' : '141.4px')};
    border-radius: 20px;
  }

  ${isTablet} {
    width: calc(50% - 45px);
    margin-bottom: 10px;

    &:nth-child(3) {
      width: calc(50% - 45px);
      margin-bottom: 0;
      align-self: center;
    }
  }
`;
export const Emoji = styled.div`
  width: 120px;
  height: 120px;
  font: var(--emoji);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  overflow: hidden;
  margin-bottom: 21px;

  ${isMobileOrTablet} {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
    font: var(--emoji-2);
  }
`;

export const Title = styled.div<{ usage?: boolean }>`
  font: var(--H2);
  color: var(--NS-Black);
  margin-bottom: 8px;

  ${isMobileOrTablet} {
    font: var(--P-T1);
    margin-bottom: ${({ usage }) => (usage ? '10px' : '6.4px')};
  }
`;

export const Content = styled.div`
  font: var(--T4);
  color: var(--NS-Black);
  ${isMobileOrTablet} {
    font: var(--P-S1-2);
  }
`;
