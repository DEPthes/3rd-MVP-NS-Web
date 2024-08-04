import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
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
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--NS-White);
  border-radius: 35px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const MyPage = styled.div`
  padding: 2rem;
  font: var(--T2);
  color: var(--NS-White);
`;

export const Profile = styled.div`
  width: 10rem;
  height: 10rem;
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
  margin: 1rem 0;
  font: var(--H1);
`;

export const EditOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EditOption = styled.div`
  font: var(--S1-1);
  font-size: 0.9rem;
  color: var(--Gray2);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font: var(--T1);
  color: var(--NS-White);
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 3rem;
  color: var(--NS-White);
  font: var(--T1);
  font-size: 1rem;
  background-color: var(--NS-Main1);
  border: none;
  border-radius: 35px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const ActionButton2 = styled(ActionButton)`
  background-color: var(--NS-Main2);
`;
