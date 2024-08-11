import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 16px;
  }

  > img {
    width: 122px;
    height: 122px;
    border-radius: 100px;
    object-fit: cover;

    ${isMobileOrTablet} {
      width: 64px;
      height: 64px;
    }
  }

  > div > p {
    margin-top: 8px;
    font: var(--T5);
    color: var(--NS-Main1);

    ${isMobileOrTablet} {
      margin-top: 5px;
      font: var(--T5-B);
    }
  }
`;
