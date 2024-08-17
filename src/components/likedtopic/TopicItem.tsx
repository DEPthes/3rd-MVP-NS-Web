import React from 'react';
import * as S from '@/styles/likedtopic/TopicItemStyle';
import { TTopic } from '@/types/likedtopic/topic';

const TopicItem: React.FC<Omit<TTopic, 'themeId'>> = ({
  theme,
  date,
  countBoard,
  countLike,
}) => {
  const formattedDate = date.split('T')[0].split('-').join('. ');

  return (
    <S.TopicItemContainer>
      <S.TextField>
        <S.TopicTitle>{theme}</S.TopicTitle>
        <S.TopicDate>발행일: {formattedDate}</S.TopicDate>
        <S.PostCount>게시글 {countBoard}개</S.PostCount>
      </S.TextField>
      <S.LikesContainer>
        <S.LikeIcon liked={false} />
        <S.TopicLikes>{countLike}</S.TopicLikes>
      </S.LikesContainer>
    </S.TopicItemContainer>
  );
};

export default TopicItem;
