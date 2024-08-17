import React, { useState } from 'react';
import * as S from '@/styles/likedtopic/TopicItemStyle';
import { TTopic } from '@/types/likedtopic/topic';

const TopicItem: React.FC<Omit<TTopic, 'themeId'>> = ({
  theme,
  date,
  countBoard,
  countLike,
}) => {
  const [liked, setLiked] = useState(false);
  const formattedDate = date.split('T')[0].split('-').join('. ');

  const handleLikeClick = () => {
    setLiked(!liked); // 클릭 시 좋아요 상태를 토글
  };

  return (
    <S.TopicItemContainer>
      <S.TextField>
        <S.TopicTitle>{theme}</S.TopicTitle>
        <S.TopicDate>발행일: {formattedDate}</S.TopicDate>
        <S.PostCount>게시글 {countBoard}개</S.PostCount>
      </S.TextField>
      <S.LikesContainer>
        <S.LikeIcon liked={liked} onClick={handleLikeClick} />
        <S.TopicLikes>{countLike + (liked ? 1 : 0)}</S.TopicLikes>
      </S.LikesContainer>
    </S.TopicItemContainer>
  );
};

export default TopicItem;
