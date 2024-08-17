import React from 'react';
import * as S from '@/styles/mypost/PostItemStyle';
import { TPost } from '@/types/mypost/post';

const PostItem: React.FC<Omit<TPost, 'boardId'>> = ({
  theme,
  createdDate,
  title,
  countLike,
  published,
}) => {
  const formattedDate = createdDate.split('T')[0].split('-').join('. ');

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
        <S.LikeIcon liked={false} />
        <S.PostLikes>{countLike}</S.PostLikes>
      </S.LikesContainer>
    </S.Post>
  );
};

export default PostItem;
