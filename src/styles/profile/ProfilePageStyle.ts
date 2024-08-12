import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  margin: 70px 495px 62px 495px;
`;

export const MyPage = styled.div`
  height: 43px;
  margin: 0 147px 32px 147px;
  font: var(--H11);
  color: var(--NS-White);
`;

export const Content = styled.div``;

export const ProfileSection = styled.div`
  height: 450px;
  background-color: var(--NS-White);
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  margin-bottom: 32px;
  padding-top: 49px;
`;

export const ProfileImageContainer = styled.div`
  width: 251px;
  heigth: 251px;
  margin: 0 99px 17px 100px;
  //border: 1px solid var(--NS-Main2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const EditOptions = styled.div`
  width: 197px;
  heigth: 29px;
  font: var(--T10);
  gap: 22px;
  display: flex;
  margin: 0 126px 49px 127px;
`;

export const EditOption = styled.div`
  font: var(--S1-1);
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
`;
