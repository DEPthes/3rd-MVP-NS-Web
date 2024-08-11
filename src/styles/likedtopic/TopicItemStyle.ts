import styled from 'styled-components';

export const TopicItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--NS-White);
  margin-bottom: 20px;
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  width: 1170px;
  height: 151px;
`;

export const TextField = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopicTitle = styled.h3`
  font: var(--H3);
  color: var(--NS-Black);
`;

export const TopicDate = styled.p`
  color: var(--Gray1);
`;

export const PostCount = styled.h3`
  color: #333;
`;

export const TopicLikes = styled.p`
  color: var(--NS-Main1);
`;

export const LikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;

export const LikeIcon = styled.div<{ liked: boolean }>`
  cursor: pointer;
  width: 35px;
  height: 35px;
  background-image: url(${({ liked }) =>
    liked
      ? '/src/assets/icons/BlueHeartFill.svg'
      : '/src/assets/icons/BlueHeart.svg'});
  background-size: cover;
`;
