import React, { useState } from 'react';
import * as S from '@/styles/mypost/PostItemStyle';
import { TPost } from '@/types/mypost/post';

const PostItem: React.FC<Omit<TPost, 'boardId'>> = ({
  theme,
  createdDate,
  title,
  countLike,
  published,
}) => {
  const [liked, setLiked] = useState(false); // 좋아요 상태 관리
  const formattedDate = createdDate.split('T')[0].split('-').join('. ');

  const handleLikeClick = () => {
    setLiked(!liked); // 클릭 시 좋아요 상태를 토글
  };

  return (
    <S.Post>
      <S.TextField>
        <S.PostTopic>{theme}</S.PostTopic>
        <S.PostDate $published={published}>
          {!published
            ? `임시저장일: ${formattedDate}`
            : `발행일: ${formattedDate}`}
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
      </S.TextField>
      <S.LikesContainer>
        <S.LikeIcon liked={liked} onClick={handleLikeClick} />
        {/* 클릭 핸들러 추가 */}
        <S.PostLikes>{countLike + (liked ? 1 : 0)}</S.PostLikes>
        {/* 좋아요 상태에 따라 좋아요 수 변경 */}
      </S.LikesContainer>
    </S.Post>
  );
};

export default PostItem;
