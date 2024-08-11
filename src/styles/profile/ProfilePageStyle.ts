import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  margin-bottom: 62px;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileSection = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--NS-White);
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  margin-bottom: 32px;
`;

export const MyPage = styled.div`
  margin-bottom: 32px;
  font: var(--H11);
  color: var(--NS-White);
  margin-top: 70px;
`;

export const Profile = styled.div`
  width: 251px;
  height: 251px;
  border: 1px solid var(--NS-Main2);
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
  margin: 17px 0 17px 0;
`;

export const EditOptions = styled.div`
  width: 197px;
  heigth: 29px;
  gap: 22px;
  font: var(--T10);
  display: flex;
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
  align-items: center;
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
