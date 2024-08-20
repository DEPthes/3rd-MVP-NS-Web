import styled from 'styled-components';
import { isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  margin: 70px 0 62px 0;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MyPage = styled.div`
  font: var(--H11);
  color: var(--NS-White);
  margin-bottom: 32px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--H1-B);
    margin-bottom: 24px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  padding: 49px 0;
  background-color: var(--NS-White);
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  margin-bottom: 32px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 328px;
    padding: 32px 0;
    margin-bottom: 24px;
    border-radius: 20px;
  }
`;

export const ProfileImage = styled.img`
  width: 251px;
  height: 251px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 150px;
    height: 150px;
  }
`;

export const Nickname = styled.h2`
  font: var(--H4-2);
  margin-top: 17px;
  margin-bottom: 17px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--M1-2);
    margin-top: 20px;
    margin-bottom: 9px;
    text-align: center;
  }
`;

export const EditOptions = styled.div`
  display: flex;
  justify-content: center;
  font: var(--T6);
  gap: 22px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S2);
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
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: var(--NS-White);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 10px;
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
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--NS-Main-Clicked);
  }

  ${isMobileOrTablet} {
    font: var(--P-S1);
    width: 100%;
    height: 38px;
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
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--NS-Main1);
  }

  ${isMobileOrTablet} {
    font: var(--P-S1);
    width: 100%;
    height: 38px;
  }
`;
