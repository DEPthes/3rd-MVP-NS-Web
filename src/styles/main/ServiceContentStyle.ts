import styled from 'styled-components';

export const Container = styled.div`
  width: 987px;
  height: 528.09px;
  border-radius: 33.74px;
  background-color: var(--NS-White);
  margin-top: 65px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
`;

export const Content = styled.div`
  margin: 52px 127px 36.09px;
`;

export const HighlightText = styled.span`
  font: var(--LogoMini-2);
  color: var(--NS-Main1);
`;

export const RegularText = styled.p`
  font: var(--T4);
  color: var(--NS-Black);
  margin: 10px 0;
  white-space: pre-line;
`;

export const BoldText = styled.span`
  font: var(--T4-1);
`;
