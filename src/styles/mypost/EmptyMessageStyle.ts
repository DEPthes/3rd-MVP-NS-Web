import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 128px;
`;

export const EmptyMessageContainer = styled.div`
  width: 733px;
  height: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  width: 212px;
  height: 206px;
  background-color: white;
`;

export const Message = styled.h2`
  max-width: 492px;
  margin-left: 29px;
  font: var(--H2-2);
  color: var(--NS-White);
  white-space: pre-line;
`;

export const ButtonContainer = styled.div`
  width: 450px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 62px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 40px;
  border: none;
  font: var(--T2-2);
  color: var(--NS-White);
  background-color: var(--NS-Main1);
  cursor: pointer;
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);
`;
