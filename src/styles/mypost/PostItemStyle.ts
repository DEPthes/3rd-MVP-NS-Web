import styled from 'styled-components';
import BlueHeartFill from '@/assets/icons/BlueHeartFill.svg';
import BlueHeart from '@/assets/icons/BlueHeart.svg';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--NS-White);
  margin-bottom: 20px;
  border-radius: 35px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  width: 1170px;
  height: 151px;

  ${isMobile} {
    width: 328px;
  }

  ${isTablet} {
    width: 728px;
  }

  ${isMobileOrTablet} {
    margin-bottom: 0;
    margin-top: 10px;
    border-radius: 20px;
    height: 72px;
  }
`;

export const TextField = styled.div`
  margin: 31px 0 23px 50px;

  ${isMobileOrTablet} {
    height: auto;
    margin: 16px auto 16px 20px;
  }

  ${isMobile} {
    width: 328px;
  }

  ${isTablet} {
    width: 728px;
  }
`;

export const PostTitle = styled.h3`
  margin-top: 0;
  font: var(--T2);
  color: var(--NS-Black);

  ${isMobileOrTablet} {
    font: var(--P-S3);
    margin-top: 0px;
  }
`;

export const PostDate = styled.p<{
  isTemporary: boolean;
}>`
  margin-top: -5px;
  margin-bottom: 11px;
  font: var(--S1-1);
  color: ${({ isTemporary }) => (isTemporary ? '#EE4B4B' : 'var(--Gray1)')};

  ${isMobileOrTablet} {
    font: var(--P-S2-2);
    margin-top: 0;
    margin-bottom: 8px;
  }
`;

export const PostTopic = styled.h3`
  font: var(--H3);
  color: var(--NS-Black);

  ${isMobileOrTablet} {
    font: var(--P-S1);
  }
`;

export const PostLikes = styled.p`
  color: var(--NS-Main1);
  font: var(--S1);
  margin-top: 4px;

  ${isMobileOrTablet} {
    font: var(--T5-B);
    margin: 0;
  }
`;

export const LikesContainer = styled.div`
  width: 35px;
  height: 59px;
  font: var(--M1-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 46px;
  margin-right: 50px;

  ${isMobileOrTablet} {
    width: 14px;
    height: 23px;
    margin-right: 18px;
    margin-top: 28px;
  }
`;

export const LikeIcon = styled.div<{ liked: boolean }>`
  cursor: pointer;
  width: 35px;
  height: 35px;
  background-image: url(${({ liked }) => (liked ? BlueHeartFill : BlueHeart)});
  background-size: cover;

  ${isMobileOrTablet} {
    width: 14px;
    height: 14px;
  }
`;
