import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 55px;
  margin-bottom: 38px;

  ${isMobileOrTablet} {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  > svg {
    width: 22px;
    height: 22px;

    ${isMobileOrTablet} {
      width: 13px;
      height: 13px;
    }
  }
`;

export const PageNumWrap = styled.div`
  display: flex;
  gap: 13px;
  margin: 0 15px;

  ${isMobileOrTablet} {
    gap: 10px;
    margin: 0 8px;
  }
`;

export const PageNumText = styled.button<{ $isOn: boolean }>`
  padding: 0;
  border: none;
  background-color: transparent;
  font: var(--T4);
  color: ${({ $isOn }) =>
    $isOn ? 'var(--NS-Main-Clicked)' : 'var(--NS-Main2)'};

  &:hover {
    color: var(--NS-Main-Clicked);
  }

  ${isMobileOrTablet} {
    font: var(--P-S1-2);
  }
`;
