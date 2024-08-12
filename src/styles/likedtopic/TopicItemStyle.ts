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
  margin-top: 31px;
  margin-left: 50px;
  margin-bottom: 23px;
  display: flex;
  flex-direction: column;
`;

export const TopicTitle = styled.h3`
  font: var(--H3);
  color: var(--NS-Black);
  height: 33px;
`;

export const TopicDate = styled.p`
  height: 28px;
  color: var(--Gray1);
  font: var(--S1-1);
`;

export const PostCount = styled.h3`
  color: var(--NS-Black);
  height: 28px;
  margin-top: 11px;
  font: var(--T4);
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

export const TopicLikes = styled.p`
  color: var(--NS-Main1);
  font: var(--S1);
  margin-top: 4px;
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
