import React from 'react';
import * as S from '@/styles/ranking/Top3Uer.Style';

type Top3UserProps = {
  medalEmoji: string;
  userId: string;
  userProfileImage: string;
};

const Top3User: React.FC<Top3UserProps> = ({
  medalEmoji,
  userId,
  userProfileImage,
}) => {
  return (
    <S.Top3UserContainer>
      <S.Medal>{medalEmoji}</S.Medal>
      <S.TopCircle>
        <S.UserProfileImage src={userProfileImage} alt="top3UserProfileImage" />
      </S.TopCircle>
      <S.UserId>{userId}</S.UserId>
    </S.Top3UserContainer>
  );
};

export default Top3User;
