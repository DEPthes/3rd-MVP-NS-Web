import React, { useState } from 'react';
import * as S from '@/styles/mypost/PostItemStyle';

type PostItemProps = {
  topic: string; // 주제
  date: string; // 작성일
  title: string; // 제목
  likes: number; // 좋아요 수
  isTemporary: boolean; // 임시 저장된 상태인지 여부
  likedUserId: string[]; // 좋아요 한 사용자들의 ID 배열
  loggedInUserId: string; // 현재 로그인된 사용자의 ID
};

// PostItem 컴포넌트 정의
const PostItem: React.FC<PostItemProps> = ({
  topic,
  date,
  title,
  likes,
  isTemporary,
  likedUserId: initialLikedUserId,
  loggedInUserId,
}) => {
  // likedUserId와 likes 상태를 useState로 관리
  const [likedUserId, setLikedUserId] = useState<string[]>(initialLikedUserId);
  const [likeCount, setLikeCount] = useState<number>(likes);

  // 현재 로그인된 사용자가 이 포스트를 좋아요 했는지 여부를 확인
  const liked = likedUserId.includes(loggedInUserId);

  // 좋아요 클릭 핸들러 함수
  const handleLikeClick = () => {
    if (liked) {
      // 이미 좋아요를 눌렀다면 좋아요 취소
      setLikedUserId(likedUserId.filter(id => id !== loggedInUserId));
      setLikeCount(likeCount - 1);
    } else {
      // 좋아요 추가
      setLikedUserId([...likedUserId, loggedInUserId]);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <S.Post>
      <S.TextField>
        <S.PostTopic>{topic}</S.PostTopic>
        {/* 포스트의 날짜를 표시. isTemporary가 true이면 임시저장일 표시 */}
        <S.PostDate isTemporary={isTemporary}>
          {isTemporary ? `임시저장일: ${date}` : `발행일: ${date}`}
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
      </S.TextField>
      <S.LikesContainer>
        {/* 좋아요 아이콘을 표시. 좋아요 누른 상태면 채워진 하트 */}
        <S.LikeIcon liked={liked} onClick={handleLikeClick} />
        <S.PostLikes>{likeCount}</S.PostLikes>
      </S.LikesContainer>
    </S.Post>
  );
};

export default PostItem;
