import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    font: var(--H1);
    color: var(--NS-White);
    user-select: none;
    text-align: center;
    width: 322px;
  }
`;
