import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 훅을 임포트
import * as S from '@/styles/mypost/PostItemStyle';
import { TPost } from '@/types/mypost/post';

const PostItem: React.FC<TPost> = ({
  boardId, // boardId 추가
  theme,
  createdDate,
  title,
  countLike,
  published,
}) => {
  const [liked, setLiked] = useState(false); // 좋아요 상태 관리
  const formattedDate = createdDate.split('T')[0].split('-').join('. ');
  const navigate = useNavigate();

  const handleLikeClick = () => {
    setLiked(!liked); // 클릭 시 좋아요 상태를 토글
  };

  const handlePostClick = () => {
    navigate(`/scenario/:${boardId}`); // post 클릭 시 상세 페이지로 이동
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.Post onClick={handlePostClick}>
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
        <S.PostLikes>{countLike + (liked ? 1 : 0)}</S.PostLikes>
      </S.LikesContainer>
    </S.Post>
  );
};

export default PostItem;
