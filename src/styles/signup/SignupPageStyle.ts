import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 25px;

  > h1 {
    font: var(--H1);
    color: var(--NS-White);
    margin-bottom: 47px;
    user-select: none;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--H1-B);
      margin-bottom: 24px;
    }
  }
`;

export const SignupWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: var(--NS-White);
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  padding: 63px 90px 38px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    border-radius: 20px;
    padding: 46px 19px 40px;
  }
`;

export const InputWrap = styled.div`
  width: 506px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 290px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 14px;
    margin-top: 10px;
  }
`;
