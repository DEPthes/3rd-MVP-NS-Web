import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  padding-bottom: 70px;

  ${isMobileOrTablet} {
    gap: 0;
  }

  > svg {
    width: 200px;
    height: 200px;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      width: 120px;
      height: 120px;
    }
  }

  > h1 {
    font: var(--NotFound);
    color: var(--NS-White);
    margin-top: 55px;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--NotFoundMini);
      margin-top: 35px;
    }
  }
`;
