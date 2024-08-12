import React, { useState } from 'react';
import * as S from '@/styles/likedtopic/TopicItemStyle';

type TopicItemProps = {
  topic: string;
  publishDate: string;
  postCount: number;
  topicLikes: number;
  liked: boolean;
};

const TopicItem: React.FC<TopicItemProps> = ({
  topic,
  publishDate,
  postCount,
  topicLikes,
  liked: initialLiked,
}) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <S.TopicItemContainer>
      <S.TextField>
        <S.TopicTitle>{topic}</S.TopicTitle>
        <S.TopicDate>발행일: {publishDate}</S.TopicDate>
        <S.PostCount>게시글 {postCount}개</S.PostCount>
      </S.TextField>
      <S.LikesContainer>
        <S.LikeIcon liked={liked} onClick={handleLikeClick} />
        <S.TopicLikes>{topicLikes + (liked ? 1 : 0)}</S.TopicLikes>
      </S.LikesContainer>
    </S.TopicItemContainer>
  );
};

export default TopicItem;
