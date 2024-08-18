import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 117px;
  transition: all 0.3s ease-in-out;
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
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 320px;
    height: 38px;
    margin-bottom: 32px;
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  padding: 18px 28px;
  border: none;
  font: var(--Input);
  color: var(--NS-Black);
  background-color: transparent;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: var(--Gray1);
  }

  ${isMobileOrTablet} {
    font: var(--P-S1);
    padding: 12px 20px;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 28px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    right: 19px;

    img {
      width: 14px;
      height: 14px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1157px;
  align-items: center;
  margin-bottom: 22px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  ${isMobile} {
    width: 320px;
  }

  ${isTablet} {
    width: 728px;
  }
`;

export const Title = styled.div`
  color: var(--NS-White);
  font: var(--H2);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--W1);
    margin-bottom: 10px;
  }
`;

export const SortOptions = styled.div`
  display: flex;
  gap: 12px;
  color: var(--NS-White);
  font: var(--S1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    align-self: flex-end;
    gap: 5px;
  }
`;

export const SortOption = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;
  font: var(--W1);
  color: ${({ $isSelected }) => ($isSelected ? 'var(--NS-Main1)' : 'inherit')};
  transition: all 0.3s ease-in-out;

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

export const Divider = styled.span`
  color: var(--NS-White);
  font: var(--S1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--Hy2);
  }
`;

export const NoneList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 58px;
  gap: 15px;
  transition: all 0.3s ease-in-out;

  > img {
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

export const TopicBoxs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 10px;
  }
`;

export const TopicBox = styled.div`
  background-color: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  border-radius: 40px;
  width: 1170px;
  height: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 320px;
    height: 76px;
    border-radius: 20px;
  }

  ${isTablet} {
    width: 728px;
    height: 76px;
    border-radius: 20px;
  }
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 46px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    padding-left: 20px;
  }
`;

export const TopicTitle = styled.div`
  font: var(--H3);
  color: var(--NS-Black);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S1);
  }
`;

export const TopicDate = styled.div`
  font: var(--S1-1);
  color: var(--Gray1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S2-2);
  }
`;

export const PostCount = styled.div`
  margin-top: 11px;
  font: var(--T4);
  color: var(--NS-Black);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-top: 8px;
    font: var(--P-S2);
  }
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    padding-right: 18px;
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  svg {
    width: 35px;
    height: 35px;

    ${isMobileOrTablet} {
      width: 14px;
      height: 14px;
    }
  }
`;

export const LikeCount = styled.div`
  color: var(--NS-Main1);
  font: var(--S1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--T5-B);
  }
`;
