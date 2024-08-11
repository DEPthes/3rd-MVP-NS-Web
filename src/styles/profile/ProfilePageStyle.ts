import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const ProfileSection = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--NS-White);
  border-radius: 35px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const MyPage = styled.div`
  padding: 2rem;
  font: var(--H11);
  color: var(--NS-White);
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
  justify-content: center:
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
  heigth: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: var(--NS-White);
  margin-bottom: 62px;
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 60px;
  color: var(--NS-White);
  font: var(--T2-1);
  background-color: var(--NS-Main1);
  border: none;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: var(--NS-Main-Clicked);
  }
`;

export const ActionButton2 = styled.button`
  width: 100%;
  height: 60px;
  color: var(--NS-White);
  font: var(--T2-1);
  background-color: var(--NS-Main2);
  border: none;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: var(--NS-Main1);
  }
`;
