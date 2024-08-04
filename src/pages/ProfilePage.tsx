import React from 'react';
import * as S from '@/styles/profilepage/ProfilePageStyle';

const ProfilePage: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.MyPage>마이페이지</S.MyPage>
        <S.ProfileSection>
          <S.Profile>
            <S.ProfileImage src="" alt="Profileimage" />
          </S.Profile>
          <S.Nickname>닉네임</S.Nickname>
          <S.EditOptions>
            <S.EditOption>프로필사진 변경</S.EditOption>
            <S.EditOption>닉네임 수정</S.EditOption>
          </S.EditOptions>
        </S.ProfileSection>
        <S.ButtonSection>
          <S.ActionButton>☞ 내가 쓴 글 ☜</S.ActionButton>
          <S.ActionButton2>♡ 좋아요 누른 글 ♥</S.ActionButton2>
          <S.ActionButton>♥ 좋아요 누른 주제 ♡</S.ActionButton>
        </S.ButtonSection>
      </S.Content>
    </S.Container>
  );
};

export default ProfilePage;
