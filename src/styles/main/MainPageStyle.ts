import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 136px;
  transition: all 0.3s ease-in-out;

  ${isTablet} {
    margin-top: 20px;
  }

  ${isMobile} {
    margin-top: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease-in-out;
`;

export const Service = styled.div`
  width: 187px;
  height: 43px;
  padding: 0;
  color: var(--NS-White);
  background-color: #5e72eb;
  display: flex;
  justify-content: center;
  align-items: center;
  font: var(--H2-3);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 109px;
    height: 27px;
    font: var(--W1);
  }
`;

export const IntroductionWrap = styled.div`
  padding-top: 57.91px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Introduction = styled.div`
  width: 152px;
  height: 43px;
  padding: 0;
  color: var(--NS-White);
  font: var(--H2-3);
  background-color: #5e72eb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 65px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 89px;
    height: 27px;
    font: var(--W1);
    margin-bottom: 16px;
  }
`;

export const UsageWrap = styled.div`
  padding-top: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    padding-top: 20px;
  }
`;

export const Usage = styled.div`
  width: 202px;
  height: 43px;
  padding: 0;
  font: var(--H2-3);
  background-color: #5e72eb;
  color: var(--NS-White);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 65px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 118px;
    height: 27px;
    font: var(--W1);
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font: var(--H2);
  margin: 40px 0 100px;
  white-space: pre-line;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-T1);
    margin: 16px 0 40px;
  }
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding-bottom: 82px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    padding-bottom: 30px;
  }
`;

export const StyledButton = styled.button`
  width: 102px;
  height: 44px;
  padding: 0;
  font: var(--T2);
  background-color: #ffffff;
  color: #5e72eb;
  border: 3px solid #5e72eb;
  border-radius: 20px;
  margin: 10px 28px 10px 28px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 62px;
    height: 30px;
    border-radius: 0;
    border: 0.8px solid #5e72eb;
    color: #5e72eb;
    font: var(--P-S1);
    margin: 0;
  }
`;
