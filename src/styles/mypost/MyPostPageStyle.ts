import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  margin-top: 117px;
  margin-bottom: 63px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  ${isTablet} {
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 1170px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  ${isMobile} {
    width: 328px;
  }

  ${isTablet} {
    width: 728px;
  }
`;

export const Title = styled.div`
  color: var(--NS-White);
  margin-right: auto;
  transition: all 0.3s ease-in-out;
`;

export const CheckboxContainer = styled.div`
  margin-top: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 34px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  ${isMobileOrTablet} {
    margin-top: 10px;
    margin-right: 0;
  }

  > p {
    font: var(--S1);
    color: var(--NS-White);
    margin-left: 8px;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--P-S2-2);
      margin-left: 2px;
    }
  }

  > svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      width: 11.51px;
      height: 11.51px;
    }
  }
`;

export const FilterLinks = styled.div`
  display: flex;
  align-items: center;
  font: var(--S1-);
  transition: all 0.3s ease-in-out;

  span {
    margin: 0 6px;
    color: var(--NS-White);
  }

  ${isMobileOrTablet} {
    font: var(--P-S2-2);
  }
`;

export const FilterLink = styled.a<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) =>
    $isSelected ? 'var(--NS-Main1)' : 'var(--NS-White)'};
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--NS-Main1);
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

export const NoneList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 58px;
  gap: 15px;
  transition: all 0.3s ease-in-out;

  > svg {
    width: 200px;
    height: 200px;

    ${isMobileOrTablet} {
      width: 160px;
      height: 160px;
    }
  }

  > p {
    font: var(--T2);
    color: var(--NS-White);
  }
`;
