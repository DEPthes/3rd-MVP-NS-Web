import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--NS-White);
  width: 520px;
  padding: 40px 0;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 328px;
    padding: 30px 0;
  }

  > h1 {
    transition: all 0.3s ease-in-out;
    font: var(--M1);
    color: var(--NS-Black);

    ${isMobileOrTablet} {
      font: var(--S1);
    }
  }

  > p {
    transition: all 0.3s ease-in-out;
    font: var(--M1-1);
    color: var(--NS-Black);
    margin-top: 24px;
    margin-bottom: 30px;

    ${isMobileOrTablet} {
      font: var(--M1-B);
      margin: 10px 0px;
    }
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 12px;
  transition: all 0.3s ease-in-out;
`;
