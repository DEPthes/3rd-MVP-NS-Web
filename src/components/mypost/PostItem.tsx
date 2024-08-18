import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/mypost/PostItemStyle';
import { TPost } from '@/types/mypost/post';

const PostItem: React.FC<TPost> = ({
  boardId,
  theme,
  createdDate,
  title,
  countLike,
  published,
}) => {
  console.log('Rendering PostItem:', {
    boardId,
    theme,
    createdDate,
    title,
    countLike,
    published,
  });

  const [liked, setLiked] = useState(false); // 좋아요 상태 관리
  const formattedDate = createdDate.split('T')[0].split('-').join('. ');
  const navigate = useNavigate();

  const handleLikeClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setLiked(!liked); // 클릭 시 좋아요 상태를 토글
  };

  const handlePostClick = () => {
    navigate(`/scenario/${boardId}`); // post 클릭 시 상세 페이지로 이동
  };

  return (
    <S.Post onClick={handlePostClick}>
      <S.TextField>
        <S.PostTopic>{theme}</S.PostTopic>
        <S.PostDate $published={published}>
          {published
            ? `발행일: ${formattedDate}`
            : `임시저장일: ${formattedDate}`}
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
      </S.TextField>
      {published && ( // published가 true일 때만 LikeContainer를 렌더링
        <S.LikesContainer>
          <S.LikeIcon $liked={liked} onClick={handleLikeClick} />
          <S.PostLikes>{countLike + (liked ? 1 : 0)}</S.PostLikes>
        </S.LikesContainer>
      )}
    </S.Post>
  );
};

export default PostItem;
