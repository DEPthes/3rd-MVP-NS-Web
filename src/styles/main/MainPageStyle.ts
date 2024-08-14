import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 136px;
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
`;

export const Text = styled.p`
  font: var(--H2);
  margin: 40px 0 251px;
`;

export const Footer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 592.5px;
  margin-bottom: 82px;
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
`;
