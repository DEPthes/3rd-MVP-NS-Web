import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1159px;
  height: 35px;
  margin: 53px 5px 20px 6px;

  ${isMobile} {
    flex-wrap: wrap;
    width: 328px;
    height: auto; /* 자동 높이 설정 */
    margin: 0;
  }

  ${isTablet} {
    flex-wrap: wrap;
    width: 728px;
    height: auto; /* 자동 높이 설정 */
    margin: 0;
  }
`;

export const Title = styled.h2`
  font: var(--H2);
  color: var(--NS-White);
  margin-right: auto;
  margin-bottom: 13px;

  ${isMobile} {
    width: 100%;
    order: 0; /* 모바일에서 Title을 첫 번째 요소로 배치 */
    margin-bottom: 10px; /* 아래 요소와 간격 추가 */
    margin: 0;
    font: var(--S1);
  }

  ${isTablet} {
    width: 100%;
    order: 0; /* 태블릿에서 Title을 첫 번째 요소로 배치 */
    margin-bottom: 10px; /* 아래 요소와 간격 추가 */
    margin: 0;
  }

  ${isMobileOrTablet} {
    font: var(--S1);
  }
`;

export const FilterLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 14px 0 2px 0px;
  font: var(--W1);

  span {
    margin: 0 12px;
    color: var(--NS-White);
    ${isMobileOrTablet} {
      margin: 0 5px;
    }
  }

  ${isMobileOrTablet} {
    font: var(--P-S2-2);
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

  ${isMobile} {
  }

  ${isTablet} {
  }
`;
