import styled from 'styled-components';

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  > img {
    width: 122px;
    height: 122px;
    border-radius: 100px;
    background-color: var(--Gray4);
    object-fit: cover;
  }

  > div > p {
    margin-top: 8px;
    font: var(--T5);
    color: var(--NS-Main1);
  }
`;
