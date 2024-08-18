import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
  margin-bottom: 96px;
  transition: all 0.3s ease-in-out;

  ${isTablet} {
    margin-top: 20px;
  }

  ${isMobile} {
    margin-top: 30px;
  }
`;

export const TopicBox = styled.div`
  background-color: var(--NS-White);
  border-radius: 40px;
  padding: 31px 0 28px;
  text-align: center;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  width: 1170px;
  margin-top: 96px;
  margin-bottom: 20px;
  height: 251px;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 328px;
    height: 138px;
    border-radius: 20px;
    padding: 20px 0 20px;
  }

  ${isTablet} {
    width: 728px;
    height: 138px;
    border-radius: 20px;
    padding: 20px 0 20px;
  }
`;

export const Header = styled.div`
  color: var(--NS-Main1);
  margin-bottom: 4px;
  font: var(--LogoSmall);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--Hy1);
    margin-bottom: 2px;
  }
`;

export const TopicHeader = styled.div`
  font: var(--T1-1);
  color: var(--NS-Main1);
  margin-bottom: 17px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--W1);
    margin-bottom: 2px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 6px;
  }
`;

export const PublishDate = styled.div`
  color: var(--NS-Main2);
  font: var(--S1-1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S2-2);
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--NS-Main2);
  font: var(--S1-1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var (--P-S2-2);
  }

  > svg {
    width: 20px;
    height: 20px;

    ${isMobileOrTablet} {
      width: 10px;
      height: 10px;
    }
  }
`;

export const TopicLikeCount = styled.div`
  margin-left: 4px;
  color: var(--NS-Main2);
  font: var(--S1-1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S2-2);
    margin-left: 2px;
  }
`;

export const WriteButton = styled.button`
  background-color: var(--NS-Main1);
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);
  color: white;
  border: none;
  border-radius: 40px;
  margin-top: 9px;
  cursor: pointer;
  width: 450px;
  height: 60px;
  transition: background-color 0.3s;
  font: var(--Input);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--NS-Main-Clicked);
  }

  ${isMobileOrTablet} {
    width: 254px;
    height: 38px;
    font: var(--P-S1);
    margin-top: 12px;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1170px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  ${isMobile} {
    width: 328px;
  }

  ${isTablet} {
    width: 728px;
  }
`;

export const ListTitle = styled.div`
  font: var(--H2);
  color: var(--NS-White);
  margin-top: 59px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-top: 24px;
    font: var(--W1);
  }
`;

export const SortOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font: var(--S1);
  margin-left: auto;
  margin-top: 59px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: auto;
    height: auto;
    margin-left: 0;
    margin-top: 0;
    align-self: flex-end;
  }
`;

export const SortOption = styled.div<{ $isSelected: boolean }>`
  font: var(--S1);
  color: ${({ $isSelected }) =>
    $isSelected ? 'var(--NS-Main1)' : 'var(--NS-White)'};
  cursor: pointer;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
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
  margin: 0 6px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--Hy2);
    margin: 0 2.5px;
  }
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 10px;
  }
`;

export const PostBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--NS-White);
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  position: relative;
  height: 172px;
  width: 1170px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 320px;
    height: 64px;
    border-radius: 20px;
  }

  ${isTablet} {
    width: 728px;
    height: 64px;
    border-radius: 20px;
  }
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-left: 46px;
  gap: 13px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    padding-left: 20px;
    gap: 4px;
  }
`;

export const PostTitle = styled.div`
  font: var(--H3);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S1);
  }
`;

export const PostContent = styled.div`
  font: var(--T4);
  color: var(--NS-Black);
  white-space: pre-wrap;
  transition: all 0.3s ease-in-out;

  ${isTablet} {
    font: var(--T5);
    width: 545px;
  }

  ${isMobile} {
    font: var(--P-S2-2);
    width: 228px;
  }
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 18px 31px 13px 0;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    justify-content: center;
    padding: 0 18px 0 0;
  }
`;

export const PostInfo = styled.div`
  color: var(--Gray1);
  font: var(--W4);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    display: none;
  }
`;

export const LikeButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  img {
    width: 35px;
    height: 35px;

    ${isMobileOrTablet} {
      width: 14px;
      height: 14px;
    }
  }
`;

export const PostLikeCount = styled.div`
  color: var(--NS-Main1);
  font: var(--S1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--T5-B);
  }
`;
