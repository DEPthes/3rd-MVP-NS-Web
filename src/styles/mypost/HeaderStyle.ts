import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Header = styled.div`
  display: flex;
  width: 1159px;
  height: 35px;
  margin: 53px 5px 20px 6px;

  ${isMobile} {
    flex-wrap: wrap;
    width: 328px;
    height: auto;
    margin: 0;
  }

  ${isTablet} {
    flex-wrap: wrap;
    width: 728px;
    height: auto;
    margin: 0;
  }
  ${isMobileOrTablet} {
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font: var(--H2);
  color: var(--NS-White);
  margin-right: auto;
  margin-bottom: 13px;

  ${isMobileOrTablet} {
    font: var(--S1);
    width: 100%;
    order: 0;
    margin-bottom: 10px;
    margin: 0;
  }
`;

export const FilterLinks = styled.div`
  display: flex;
  margin: 14px 0 2px 0;
  font: var(--W1);

  span {
    margin: 0 12px;
    color: var(--NS-White);
    ${isMobileOrTablet} {
      margin: 0 5px;
    }
  }

  ${isMobileOrTablet} {
    font: var(--P-S3);
    margin-left: auto;
    margin-top: 10px;
  }
`;

export const FilterLink = styled.a<{ isSelected: boolean }>`
  color: ${({ isSelected }) =>
    isSelected ? 'var(--NS-Main1)' : 'var(--NS-White)'};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--NS-Main1);
  }
`;
