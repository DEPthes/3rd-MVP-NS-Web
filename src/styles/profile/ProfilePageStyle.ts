import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  width: 450px;
  margin: 70px 495px 62px 495px;

  ${isMobileOrTablet} {
    width: 328px;
    heigth: 527px;
  }

  ${isMobile} {
    margin: 30px 16ox 168px 16px;
  }

  ${isTablet} {
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

export const Content = styled.div``;

export const MyPage = styled.div`
  height: 43px;
  margin: 0 147px 32px 147px;
  font: var(--H11);
  color: var(--NS-White);

  ${isMobileOrTablet} {
    font: var(--H1-B);
    height: 22px;
    margin: 0 0 24px 0;
    text-align: center;
  }
`;

export const ProfileSection = styled.div`
  height: 450px;
  background-color: var(--NS-White);
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  margin-bottom: 32px;
  padding-top: 49px;

  ${isMobileOrTablet} {
    width: 100%;
    height: 282px;
    margin: 0 0 24px 0;
    padding-top: 32px;
  }
`;

export const ProfileImageContainer = styled.div`
  width: 251px;
  heigth: 251px;
  margin: 0 99px 17px 100px;
  //border: 1px solid var(--NS-Main2);
  border-radius: 50%;

  ${isMobileOrTablet} {
    width: 150px;
    height: 150px;
    margin: 0 89px 20px 89px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nickname = styled.h2`
  font: var(--H4-2);
  margin: 0 184px 17px 183px;

  ${isMobileOrTablet} {
    font: var(--M1-2);
    margin: 0;
    text-align: center;
  }
`;

export const EditOptions = styled.div`
  width: 197px;
  heigth: 29px;
  font: var(--T6);
  gap: 22px;
  display: flex;
  margin: 0 126px 49px 127px;

  ${isMobileOrTablet} {
    font: var(--P-S2);
    width: 125px;
    heigth: 22px;
    padding: 0;
    margin: 9px 101.5px;
    gap: 16px;
  }
`;

export const EditOption = styled.div`
  color: var(--Gray2);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonSection = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: var(--NS-White);

  ${isMobileOrTablet} {
    width: 100%;
    heigth: 134px;
    gap: 0;
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 60px;
  color: var(--NS-White);
  font: var(--S1-4);
  background-color: var(--NS-Main1);
  border: none;
  border-radius: 40px;
  cursor: pointer;
  padding: 0;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  &:hover {
    background-color: var(--NS-Main-Clicked);
  }

  ${isMobileOrTablet} {
    font: var(--P-S1);
    width: 100%;
    height: 38px;
    margin: 0 0 10px 0;
  }
`;

export const ActionButton2 = styled.button`
  width: 100%;
  height: 60px;
  color: var(--NS-White);
  font: var(--S1-4);
  background-color: var(--NS-Main2);
  padding: 0;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);

  &:hover {
    background-color: var(--NS-Main1);
  }

  ${isMobileOrTablet} {
    font: var(--P-S1);
    width: 100%;
    height: 38px;
    margin: 0 0 10px 0;
  }
`;
