import styled from 'styled-components';
import BlueHeartFill from '@/assets/icons/BlueHeartFill.svg';
import BlueHeart from '@/assets/icons/BlueHeart.svg';

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--NS-White);
  margin-bottom: 20px;
  border-radius: 35px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 1170px;
  height: 151px;
`;

export const TextField = styled.div`
  margin-top: 23px;
  margin-bottom: 23px;
  display: flex;
  margin-left: 46px;
  flex-direction: column;
  align-items: flex;
  justify-content: center;
`;

export const PostTopic = styled.h3`
  font: var(--H3);
  color: var(--NS-Black);
`;

export const PostDate = styled.p<{ isTemporary: boolean }>`
  font: var(--S1-1);
  color: ${({ isTemporary }) => (isTemporary ? '#EE4B4B' : 'var(--Gray1)')};
`;

export const PostTitle = styled.h3`
  margin-top: 11px;
  font: var(--T2);
  color: var(--NS-Black);
`;

export const PostLikes = styled.p`
  color: var(--NS-Main1);
`;

export const LikesContainer = styled.div`
  width: 35px;
  height: 59px;
  font: var(--M1-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 46px;
  margin-right: 46px;
`;

export const LikeIcon = styled.div<{ liked: boolean }>`
  cursor: pointer;
  width: 35px;
  height: 35px;
  background-image: url(${({ liked }) => (liked ? BlueHeartFill : BlueHeart)});
  background-size: cover;
`;
