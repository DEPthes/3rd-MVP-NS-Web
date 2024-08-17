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
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const isDefault = !file; // 파일이 없으면 기본 이미지 설정

    try {
      const response = await patchProfile(isDefault, file);
      if (response.check) {
        alert('프로필이 변경되었습니다.'); // 성공 시 메시지 출력
        // 필요한 경우 userData를 업데이트하는 로직 추가 가능
      } else {
        alert('프로필 변경에 실패했습니다.');
      }
    } catch (error) {
      console.error('프로필 변경 중 오류 발생:', error);
      alert('프로필 변경에 실패했습니다.');
    }
  };

  const openFilePicker = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';

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
            console.log('Navigating with userId:', userData.information.userId);
            navigate('/mypage/myposts', {
              state: { userId: userData.information.userId },
            });
          }}
        >
          ☞ 내가 쓴 글 ☜
        </S.ActionButton>

        <S.ActionButton2
          onClick={() =>
            navigate('/mypage/mylikedposts', {
              state: { userId: userData.information.userId },
            })
          }
        >
          ♡ 좋아요 누른 글 ♥
        </S.ActionButton2>
        <S.ActionButton
          onClick={() =>
            navigate('/mypage/likedtopics', {
              state: { userId: userData.information.userId },
            })
          }
        >
          ♥ 좋아요 누른 주제 ♡
        </S.ActionButton>
      </S.ButtonSection>
    </S.Container>
  );
};

export default ProfilePage;
