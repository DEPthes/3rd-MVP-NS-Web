import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/likedtopic/TopicItemStyle';
import { TTopic } from '@/types/likedtopic/topic';

const TopicItem: React.FC<TTopic> = ({
  themeId,
  theme,
  date,
  countBoard,
  countLike,
}) => {
  const [liked, setLiked] = useState(false);
  const formattedDate = date.split('T')[0].split('-').join('. ');
  const navigate = useNavigate();
  const handleLikeClick = () => {
    setLiked(!liked); // 클릭 시 좋아요 상태를 토글
  };

  const handleTopicClick = () => {
    navigate(`/scenario/topic/:${themeId}`); // 클릭 시 해당 주제의 상세 페이지로 이동
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.TopicItemContainer onClick={handleTopicClick}>
      {' '}
      {/* 전체 항목에 클릭 이벤트 추가 */}
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
