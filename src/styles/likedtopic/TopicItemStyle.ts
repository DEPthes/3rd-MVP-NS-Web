import styled from 'styled-components';

export const TopicItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 46px 23px;
  margin-bottom: 1rem;
  border-radius: 35px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 1170px;
  height: 60px;
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TopicTitle = styled.h3`
  font: var(--H3);
  color: var(--NS-Black);
  font-size: 1.3rem;
`;

export const TopicDate = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--Gray1);
`;

export const PostCount = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const TopicLikes = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #777;
`;

export const LikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
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
