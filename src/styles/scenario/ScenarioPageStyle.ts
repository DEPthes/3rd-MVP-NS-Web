import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Title = styled.div`
  color: white;
  font: var(--H1);
`;

export const TitleMini = styled.div`
  color: white;
  margin-bottom: 72px;
  font: var(--N2-1);
`;

export const TopicBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
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
`;

export const TopicHeader = styled.div`
  font: var(--LogoSmall);
`;

export const Topic = styled.div`
  font: var(--T1-1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 37px;
`;

export const ActionButton = styled.button`
  background-color: var(--NS-Main1);
  color: white;
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
`;

export const AnotherButton = styled.button`
  background-color: var(--NS-Main2);
  color: white;
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
`;