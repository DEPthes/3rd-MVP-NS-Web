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
    margin-bottom: 47px;
  }
`;

export const SignupWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: var(--NS-White);
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  padding: 63px 90px 38px;
`;

export const InputWrap = styled.div`
  width: 506px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
