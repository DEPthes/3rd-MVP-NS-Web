import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/profile/ProfilePageStyle';
import { getUser } from '@/apis/user/getUser';
import { TUserData } from '@/types/profile/TUserData';
import ChangeNicknameModal from '@/components/profile/ChangeNicknameModal';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import { patchProfile } from '@/apis/user/patchProfile';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<TUserData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleUnauthorized = useHandleUnauthorized();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUser(handleUnauthorized);
        if (data?.check) {
          setUserData(data);
        } else {
          navigate('/login'); // 인증되지 않은 경우 로그인 페이지로 이동
        }
      } catch (error) {
        console.error('유저 데이터 가져오기 실패:', error);
        navigate('/login'); // 오류 발생 시 로그인 페이지로 이동
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleNicknameChangeSuccess = (newNickname: string) => {
    if (userData) {
      setUserData({
        ...userData,
        information: { ...userData.information, nickname: newNickname },
      });
    }
    setIsModalOpen(false); // 닉네임 변경 성공 시 모달을 닫습니다.
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const isDefault = !file; // 파일이 없으면 기본 이미지 설정

    // 파일 형식 검증
    if (file && !['image/jpeg', 'image/png'].includes(file.type)) {
      alert('PNG 또는 JPG 형식의 파일만 업로드할 수 있습니다.');
      return;
    }

    try {
      const response = await patchProfile(isDefault, file, handleUnauthorized);

      if (response.check) {
        alert('프로필이 변경되었습니다.');

        // 프로필 업데이트 후, 최신 정보를 다시 가져옵니다.
        const updatedUserData = await getUser(handleUnauthorized);
        if (updatedUserData?.check) {
          setUserData(updatedUserData);
        } else {
          console.error('프로필 정보 다시 가져오기 실패');
        }
      } else {
        alert('프로필 변경에 실패했습니다.');
        console.error('프로필 변경 실패:', response);
      }
    } catch (error) {
      console.error('프로필 변경 중 오류 발생:', error);
      alert('프로필 변경에 실패했습니다.');
    }
  };

  const openFilePicker = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/png, image/jpeg'; // png나 jpg로 제한

    fileInput.onchange = event => {
      const e = event as unknown as React.ChangeEvent<HTMLInputElement>;
      handleImageChange(e);
    };

    fileInput.click();
  };

  if (!userData) {
    return <div>로딩중...</div>;
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
          <S.EditOption onClick={openFilePicker}>프로필사진 변경</S.EditOption>{' '}
          <S.EditOption onClick={() => setIsModalOpen(true)}>
            닉네임 수정
          </S.EditOption>
          <ChangeNicknameModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSuccess={handleNicknameChangeSuccess} // 닉네임 변경 성공 시 호출
          />
        </S.EditOptions>
      </S.ProfileSection>
      <S.ButtonSection>
        <S.ActionButton
          onClick={() => {
            navigate('/mypage/myposts');
          }}
        >
          ☞ 내가 쓴 글 ☜
        </S.ActionButton>

        <S.ActionButton2 onClick={() => navigate('/mypage/mylikedposts')}>
          ♡ 좋아요 누른 글 ♥
        </S.ActionButton2>
        <S.ActionButton onClick={() => navigate('/mypage/likedtopics')}>
          ♥ 좋아요 누른 주제 ♡
        </S.ActionButton>
      </S.ButtonSection>
    </S.Container>
  );
};

export default ProfilePage;
