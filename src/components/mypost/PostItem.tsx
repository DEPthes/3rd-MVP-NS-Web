import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/mypost/PostItemStyle';
import { TPost } from '@/types/mypost/post';
import { postBoardLike } from '@/apis/board/postBoardLike';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import BlueHeartFill from '@/assets/icons/BlueHeartFill.svg';
import BlueHeart from '@/assets/icons/BlueHeart.svg';

const PostItem: React.FC<TPost> = ({
  boardId,
  theme,
  createdDate,
  title,
  countLike,
  published,
  liked = true, // PostList에서 전달된 liked 값을 기본값으로 설정
}) => {
  const handleUnauthorized = useHandleUnauthorized();
  const [likedState, setLikedState] = useState(liked); // 받아온 liked를 초기값으로 설정
  const [likeCount, setLikeCount] = useState(countLike); // 좋아요 수 상태 관리
  const formattedDate = createdDate.split('T')[0].split('-').join('. ');
  const navigate = useNavigate();

  const handleLikeClick = async (event: React.MouseEvent) => {
    event.stopPropagation();

    const newLikedStatus = await postBoardLike(boardId, handleUnauthorized);

    if (newLikedStatus !== undefined) {
      setLikedState(newLikedStatus); // 서버 응답에 따라 좋아요 상태 업데이트
      setLikeCount(prevCount => prevCount + (newLikedStatus ? 1 : -1)); // 좋아요 수 업데이트
    } else {
      console.error('좋아요 상태 변경에 실패했습니다.');
    }
  };

  const handlePostClick = () => {
    navigate(`/scenario/${boardId}`); // post 클릭 시 상세 페이지로 이동
    window.scroll({ top: 0, behavior: 'smooth' });
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
        <S.LikesContainer onClick={handleLikeClick}>
          <img src={likedState ? BlueHeartFill : BlueHeart} alt="Like" />
          <S.PostLikes>{likeCount}</S.PostLikes>
        </S.LikesContainer>
      )}
    </S.Post>
  );
};

export default PostItem;
