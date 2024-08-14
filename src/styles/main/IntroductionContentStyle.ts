import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 350px;
  align-items: center;
  justify-content: center;
  background: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  border-radius: 40px;
`;

export const Emoji = styled.div`
  width: 120px;
  height: 120px;
  font: var(--emoji);
  line-height: 1;
  overflow: hidden;
  margin-bottom: 21px;
`;

export const Title = styled.div`
  font: var(--H2);
  color: var(--NS-Black);
  margin-bottom: 8px;
`;

export const Content = styled.div`
  font: var(--T4);
  color: var(--NS-Black);
`;
