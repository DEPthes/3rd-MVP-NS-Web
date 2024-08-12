import React from 'react';
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
  liked,
}) => {
  return (
    <S.TopicItemContainer>
      <S.TextField>
        <S.TopicTitle>{topic}</S.TopicTitle>
        <S.TopicDate>게시일: {publishDate}</S.TopicDate>
        <S.PostCount>게시글 개수: {postCount}</S.PostCount>
      </S.TextField>
      <S.LikesContainer>
        <S.LikeIcon liked={liked} />
        <S.TopicLikes>{topicLikes}</S.TopicLikes>
      </S.LikesContainer>
    </S.TopicItemContainer>
  );
};

export default TopicItem;
