import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 117px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 53px;
  width: 450px;
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);
  background-color: var(--NS-White);
  border-radius: 100px;
  ${isMobileOrTablet} {
    width: 320px;
    height: 38px;
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  padding: 18px 28px;
  border: none;
  font: var(--Input);
  color: var(--NS-Black);
  background-color: transparent;
  ${isMobileOrTablet} {
    font: var(--P-S1);
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 28px;
  ${isMobileOrTablet} {
    margin-top: 6px;
    justify-content: center;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 22px;
  ${isMobileOrTablet} {
    flex-direction: column; /* 모바일/태블릿에서는 수직 정렬 */
    align-items: flex-start; /* 타이틀을 왼쪽 정렬 */
    margin-bottom: 0; /* 헤더 자체의 margin-bottom을 없앰 */
  }
`;

export const Title = styled.div`
  color: var(--NS-White);
  font: var(--H2);
  ${isMobileOrTablet} {
    font: var(--W1);
    margin-bottom: 32px; 
  }
`;

export const SortOptions = styled.div`
  display: flex;
  gap: 12px;
  color: var(--NS-White);
  font: var(--S1);
  ${isMobileOrTablet} {
    align-self: flex-end; /* 모바일/태블릿에서 오른쪽 정렬 */
    margin-bottom: 10px;
  }
`;

export const SortOption = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  font: var(--W1);
  color: ${({ isSelected }) => (isSelected ? 'var(--NS-Main1)' : 'inherit')};

  &:hover {
    color: var(--NS-Main1);
  }
  &:active {
    color: var(--NS-Main1);
  }
  ${isMobileOrTablet} {
    font: var(--Hy2);
  }
`;

export const TopicBox = styled.div`
  padding: 31px 50px 23px 46px;
  background-color: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  border-radius: 40px;
  margin-bottom: 20px;
  width: 1170px;
  height: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  ${isMobile} {
    width: 320px;
    height: 76px;
    margin-bottom: 10px;
    border-radius: 20px;
  }
  ${isTablet} {
    width: 728px;
    height: 76px;
    margin-bottom: 10px;
    border-radius: 20px;
  }
`;

export const TopicTitle = styled.div`
  font: var(--H3);
  color: var(--NS-Black);
  ${isMobileOrTablet} {
    font: var(--P-S1);
  }
`;

export const TopicDate = styled.div`
  font: var(--S1-1);
  color: var(--Gray1);
  ${isMobileOrTablet} {
    font: var(--P-S2-2);
  }
`;

export const PostCount = styled.div`
  margin-top: 11px;
  font: var(--T4);
  color: var(--NS-Black);
  ${isMobileOrTablet} {
    margin-top: 8px;
    font: var(--P-S2);
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  svg {
    width: 35px;  /* 기본 크기 */
    height: 35px;

    ${isMobileOrTablet} {
      width: 14px;  /* 모바일 및 테블릿에서 크기 줄이기 */
      height: 14px;
    }
  }
`;

export const LikeCount = styled.div`
  color: var(--NS-Main1);
  font: var(--S1);

  ${isMobileOrTablet} {
    font: var(--T5-B);
    margin-top: 4px;  /* 하트와의 간격을 조정 */
  }
`;

