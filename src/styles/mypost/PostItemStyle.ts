import styled from 'styled-components';
import BlueHeartFill from '@/assets/icons/BlueHeartFill.svg';
import BlueHeart from '@/assets/icons/BlueHeart.svg';

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--NS-White);
  margin-bottom: 20px;
  border-radius: 35px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  width: 1170px;
  height: 151px;
`;

export const TextField = styled.div`
  margin-top: 23px;
  margin-bottom: 23px;
  display: flex;
  margin-left: 46px;
  flex-direction: column;
  justify-content: center;
`;

export const PostTopic = styled.h3`
  font: var(--H3);
  color: var(--NS-Black);
`;

export const PostDate = styled.p<{ isTemporary: boolean }>`
  margin-top: -5px;
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
  font: var(--S1);
  margin-top: 4px;
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
  margin-right: 50px;
`;

export const LikeIcon = styled.div<{ liked: boolean }>`
  cursor: pointer;
  width: 35px;
  height: 35px;
  background-image: url(${({ liked }) => (liked ? BlueHeartFill : BlueHeart)});
  background-size: cover;
`;
