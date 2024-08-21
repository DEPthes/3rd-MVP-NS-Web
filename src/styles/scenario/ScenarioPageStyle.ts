import styled from 'styled-components';
import { isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  transition: all 0.3s ease-in-out;
`;

export const Title = styled.div`
  color: var(--NS-White);
  font: var(--H1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-bottom: 24px;
    font: var(--Hy3);
  }
`;

export const TitleMini = styled.div`
  color: var(--NS-White);
  margin-bottom: 72px;
  font: var(--N2-1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    display: none;
  }
`;

export const TopicBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 17px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 44px;
  margin-bottom: 63px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  background-color: var(—NS-White);
  width: 1170px;
  min-height: 186px;
  color: var(--NS-Main1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 8px;
    padding: 40px 20px;
    margin-bottom: 20px;
    width: 328px;
    min-height: 122px;
    border-radius: 20px;
  }
`;

export const TopicHeader = styled.div`
  font: var(--LogoSmall);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--Y2);
  }
`;

export const Topic = styled.div`
  font: var(--T1-1);
  word-break: keep-all;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-T1);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 37px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 328px;
    height: 38px;
    font: var(--P-S1);
  }
`;

export const ActionButton = styled.button`
  background-color: var(--NS-Main1);
  color: var(--NS-White);
  border: none;
  border-radius: 100px;
  padding: 10px 20px;
  width: 450px;
  height: 60px;
  transition: background-color 0.3s;
  font: var(--T2);
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);

  &:hover {
    background-color: var(--NS-Main-Clicked);
  }

  ${isMobileOrTablet} {
    width: 328px;
    height: 38px;
    font: var(--P-S1);
  }
`;

export const AnotherButton = styled.button`
  background-color: var(--NS-Main2);
  color: var(--NS-White);
  border: none;
  border-radius: 100px;
  padding: 10px 20px;
  width: 450px;
  height: 60px;
  transition: background-color 0.3s;
  font: var(--T2);
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);

  &:hover {
    background-color: var(--NS-Main1);
  }

  ${isMobileOrTablet} {
    width: 328px;
    height: 38px;
    font: var(--P-S1);
  }
`;
