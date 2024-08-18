import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/likedtopic/TopicItemStyle';
import { TTopic } from '@/types/likedtopic/topic';
import { postThemeLike } from '@/apis/theme/postThemeLike'; // postThemeLike 함수 임포트
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';

const TopicItem: React.FC<TTopic> = ({
  themeId,
  theme,
  date,
  countBoard,
  countLike,
}) => {
  const handleUnauthorized = useHandleUnauthorized();

  const [liked, setLiked] = useState(true); // 초기 좋아요 상태는 true
  const [likeCount, setLikeCount] = useState(countLike); // 좋아요 수 상태 관리
  const formattedDate = date.split('T')[0].split('-').join('. ');
  const navigate = useNavigate();

  const handleLikeClick = async (event: React.MouseEvent) => {
    event.stopPropagation(); // 클릭 시 페이지 이동을 막음

    const response = await postThemeLike(themeId, handleUnauthorized);

    if (response) {
      setLiked(response.liked); // 서버 응답에 따라 좋아요 상태 업데이트
      setLikeCount(prevCount => prevCount + (response.liked ? 1 : -1)); // 좋아요 수 업데이트
    } else {
      console.error('좋아요 상태 변경에 실패했습니다.');
    }
  };

  const handleTopicClick = () => {
    navigate(`/scenario/topic/${themeId}`); // 클릭 시 해당 주제의 상세 페이지로 이동
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.TopicItemContainer onClick={handleTopicClick}>
      <S.TextField>
        <S.TopicTitle>{theme}</S.TopicTitle>
        <S.TopicDate>발행일: {formattedDate}</S.TopicDate>
        <S.PostCount>게시글 {countBoard}개</S.PostCount>
      </S.TextField>
      <S.LikesContainer>
        <S.LikeIcon liked={liked} onClick={handleLikeClick} />
        <S.TopicLikes>{likeCount}</S.TopicLikes>
      </S.LikesContainer>
    </S.TopicItemContainer>
  );
};

export default TopicItem;
