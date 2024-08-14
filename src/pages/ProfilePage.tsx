import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/profile/ProfilePageStyle';
import { getUser } from '@/apis/user/getUser';
import { TUserData } from '@/types/profile/TUserData';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<TUserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUser();
      if (data?.check) {
        setUserData(data);
      } else {
        navigate('/login'); // 인증되지 않은 경우 로그인 페이지로 이동
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <S.Content>
        <S.MyPage>마이페이지</S.MyPage>
      </S.Content>
      <S.ProfileSection>
        <S.ProfileImageContainer>
          <S.ProfileImage
            src={userData.information.imageUrl}
            alt="Profileimage"
          />
        </S.ProfileImageContainer>
        <S.Nickname>{userData.information.nickname}</S.Nickname>
        <S.EditOptions>
          <S.EditOption>프로필사진 변경</S.EditOption>
          <S.EditOption>닉네임 수정</S.EditOption>
        </S.EditOptions>
      </S.ProfileSection>
      <S.ButtonSection>
        <S.ActionButton onClick={() => navigate('/profile/myposts')}>
          ☞ 내가 쓴 글 ☜
        </S.ActionButton>
        <S.ActionButton2 onClick={() => navigate('/profile/mylikedposts')}>
          ♡ 좋아요 누른 글 ♥
        </S.ActionButton2>
        <S.ActionButton onClick={() => navigate('/profile/likedtopics')}>
          ♥ 좋아요 누른 주제 ♡
        </S.ActionButton>
      </S.ButtonSection>
    </S.Container>
  );
};

export default ProfilePage;
