import styled from 'styled-components';
import { isMobile, isMobileOrTablet, isTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 93px;
  margin-bottom: 63px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-bottom: 30px;
  }

  ${isMobile} {
    margin-top: 60px;
  }

  ${isTablet} {
    margin-top: 20px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 54px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-bottom: 32px;
  }
`;

export const ProfileCircle = styled.img`
  width: 251px;
  height: 251px;
  background-color: var(--NS-White);
  border-radius: 50%;
  object-fit: cover; /* 이미지가 동그란 영역에 맞게 조정 */
  margin-bottom: 17px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 150px;
    height: 150px;
    margin-bottom: 12px;
  }
`;

export const ProfileNickname = styled.div`
  color: var(--NS-White);
  font: var(--H4);
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap; /* 텍스트가 한 줄에 나타나도록 설정 */
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--H2);
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
  overflow-wrap: break-word;
  width: 930px;
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

export const LikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-right: 18px;
  }

  img {
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
