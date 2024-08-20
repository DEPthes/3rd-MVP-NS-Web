import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;

  > h1 {
    font: var(--H1);
    color: var(--NS-White);
    margin-bottom: 64px;
    user-select: none;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--H1-B);
      margin-bottom: 24px;
    }
  }
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 20px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 328px;
    gap: 16px;
  }
`;

export const CheckBoxWrap = styled.div`
  display: flex;
  gap: 30px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 22px;
  }
`;

export const WarningText = styled.p`
  text-align: left;
  margin-top: -13px;
  margin-bottom: -12px;
  font: var(--W1);
  color: var(--Red);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--W1-B);
    margin-top: -16px;
    margin-bottom: -7px;
  }
`;
