import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyMessageContainer = styled.div`
  margin: 3rem;
  width: 733px;
  height: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  width: 206px;
  height: 206px;
  background-color: white;
`;

export const Message = styled.h2`
  max-width: 450px;
  margin: 3rem;
  font: var(--T2);
  color: var(--NS-White);
  white-space: pre-line; // 줄바꿈을 유지
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
  font: var(--T2);
  color: var(--NS-White);
  background-color: var(--NS-Main1);
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;
