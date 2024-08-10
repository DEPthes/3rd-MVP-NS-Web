import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--NS-White);
  width: 520px;
  padding-top: 40px;
  padding-bottom: 40px;

  > h1 {
    font: var(--M1);
    color: var(--NS-Black);
  }

  > p {
    font: var(--M1-1);
    color: var(--NS-Black);
    margin-top: 24px;
    margin-bottom: 30px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 12px;
`;
