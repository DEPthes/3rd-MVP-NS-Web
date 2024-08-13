import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);
  background-color: var(--NS-White);
  border-radius: 100px;

  ${isMobile} {
    width: 328px;
    heigth: 38px;
  }

  ${isTablet} {
    width: 320px;
    heigth: 38px;
  }

  ${isMobileOrTablet} {
    margin-top: 0px;
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  width: 90%;
  padding: 18px 28px;
  border: none;
  font: var(--Input);
  color: var(--NS-Black);
  background-color: transparent;

  &::placeholder {
    font: var(--T2-2);
    color: var(--Gray1);
    ${isMobileOrTablet} {
      font: var(--P-S1);
    }
  }

  ${isMobileOrTablet} {
    padding: 12.03px 20.62px;
    font: var(--P-S1);
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 28px;

  ${isMobile} {
    width: 14px;
    height: 14px;
    margin-right: 19px;
  }

  ${isTablet} {
    width: 14px;
    height: 14px;
    margin-right: 19px;
  }
`;
