import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 154px;

  > h1 {
    font: var(--H1);
    color: var(--NS-White);
    margin-bottom: 64px;
  }
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 450px;
  gap: 20px;
`;

export const CheckBoxWrap = styled.div`
  display: flex;
  gap: 30px;
`;
