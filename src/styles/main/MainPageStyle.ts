import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 136px;

  ${isTablet} {
    width: 728px;
    height: 1297.8px;
    margn: 20px 36px 30px;
  }

  ${isMobile} {
    width: 320px;
    heigth: 1618px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Service = styled.div`
  width: 187px;
  height: 43px;
  color: var(--NS-White);
  background-color: #5e72eb;
  display: flex;
  justify-content: center;
  align-items: center;
  font: var(--H2-3);

  ${isMobileOrTablet} {
    width: 109px;
    height: 27px;
    font: var(--W1);
  }
`;

export const Introduction = styled.div`
  width: 152px;
  height: 43px;
  color: var(--NS-White);
  font: var(--H2-3);
  background-color: #5e72eb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 107.91px 0 65px;

  ${isMobileOrTablet} {
    width: 89px;
    height: 27px;
    font: var(--W1);
    margin: 40px 0 16px;
  }
`;

export const Usage = styled.div`
  width: 202px;
  height: 43px;
  font: var(--H2-3);
  background-color: #5e72eb;
  color: var(--NS-White);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 134px 0 65px;

  ${isMobileOrTablet} {
    width: 118px;
    height: 27px;
    font: var(--W1);
    margin: 40px 0 16px;
  }
`;

export const Text = styled.p`
  font: var(--H2);
  margin: 40px 0 251px;

  ${isMobileOrTablet} {
    font: var(--P-T1);
    margin: 16px 0 40px;
    white-space: pre-line;
  }
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 592.5px;
  margin-bottom: 82px;
  ${isMobileOrTablet} {
    margin: 30px;
  }
`;

export const StyledButton = styled.button`
  width: 102px;
  height: 44px;
  font: var(--T2);
  background-color: #ffffff;
  color: #5e72eb;
  border: 3px solid #5e72eb;
  border-radius: 20px;
  margin: 10px 28px 10px 28px;
  cursor: pointer;

  ${isMobileOrTablet} {
    width: 62px;
    height: 30px;
    border-radius: 0;
    border: 0.8px solid #5e72eb;
    color: #5e72eb;
    font: var(--P-S1);
    padding: 0;
    margin: 0;
  }
`;
