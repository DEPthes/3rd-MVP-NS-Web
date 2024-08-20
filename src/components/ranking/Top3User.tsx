import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/ranking/Top3Uer.Style';

type Top3UserProps = {
  medalEmoji: string;
  userId: string;
  userProfileImage: string;
  point: number;
};

const Top3User: React.FC<Top3UserProps> = ({
  medalEmoji,
  userId,
  userProfileImage,
  point,
}) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/profile/${userId}`);
  };

  return (
    <S.Top3UserContainer>
      <S.Medal>{medalEmoji}</S.Medal>

      <S.UserProfileImage
        src={userProfileImage}
        alt="top3UserProfileImage"
        onClick={handleUserClick}
      />

      <S.UserId>{userId}</S.UserId>
      <S.Point>{point}점</S.Point>
    </S.Top3UserContainer>
  );
};

export default Top3User;
