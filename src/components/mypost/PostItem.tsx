import React from 'react';
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
  likedUserId,
  loggedInUserId,
}) => {
  // 현재 로그인된 사용자가 이 포스트를 좋아요 했는지 여부를 확인
  const liked = likedUserId.includes(loggedInUserId);

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
        <S.LikeIcon liked={liked} />
        <S.PostLikes>{likes}</S.PostLikes>
      </S.LikesContainer>
    </S.Post>
  );
};

export default PostItem;
