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
    font: var(--M1);
    color: var(--NS-Black);
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--S1);
    }
  }

  > p {
    font: var(--M1-1);
    color: var(--NS-Black);
    margin-top: 24px;
    margin-bottom: 30px;
    transition: all 0.3s ease-in-out;

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

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--NS-White);
  padding: 40px 0;
  text-align: center;
  width: 520px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 320px;
    padding: 20px 0;
  }
`;

export const ModalTitle = styled.h2`
  font: var(--M1);
  color: var(--NS-Black);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-T1);
  }
`;

export const ModalText2Black = styled.p`
  font: var(--M1-1);
  color: var(--NS-Black);
  margin: 16px 0;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-T2);
    width: 260px;

    > span {
      color: var(--Gray1);
    }
  }
`;

export const ModalTextBlack = styled.p`
  font: var(--M1-1);
  color: var(--NS-Black);
  margin: 24px 0 30px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin: 16px 0;
    font: var(--P-T2);
  }
`;

export const ModalTextBlack2 = styled.p`
  font: var(--M1-1);
  color: var(--NS-Black2);
  margin: 24px 0 30px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-T2);
    color: var(--Gray1);
    width: 260px;
    margin: 16px 0;
  }
`;

export const ModalBtn = styled.div`
  display: flex;
  gap: 12px;
  transition: all 0.3s ease-in-out;
`;
