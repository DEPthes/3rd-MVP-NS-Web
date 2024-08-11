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

export const Button = styled.button`
  margin: 5rem;
  width: 480px;
  height: 56px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: none;
  font: var(--T2-2);
  color: var(--NS-White);
  background-color: var(--NS-Main1);
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;
