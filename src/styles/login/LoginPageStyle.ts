import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;

  > h1 {
    font: var(--H1);
    color: var(--NS-White);
    margin-bottom: 64px;
  }
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 20px;
`;

export const CheckBoxWrap = styled.div`
  display: flex;
  gap: 30px;
`;

export const WarningText = styled.p`
  text-align: left;
  margin-top: -13px;
  margin-bottom: -12px;
  font: var(--W1);
  color: var(--Red);
`;
