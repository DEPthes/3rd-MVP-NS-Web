import * as S from '@/styles/signup/ProfileUploadStyle';
import { SetStateAction, useRef } from 'react';
import LightButton from '../button/LightButton';

const ProfileUpload = ({
  profileImage,
  setProfileImage,
}: {
  profileImage: string;
  setProfileImage: React.Dispatch<SetStateAction<string>>;
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onAddPicture = () => {
    inputFileRef.current?.click();
  };

  //프로필 이미지 변경
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log('파일이 선택되지 않았습니다.');
      return;
    }

    const file = e.target.files[0];

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  return (
    <S.ImageWrap>
      <img src={profileImage} alt="" />
      <div>
        <LightButton text="업로드" onClick={onAddPicture} />
        <input
          id="fileInput"
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: 'none', visibility: 'hidden' }}
          ref={inputFileRef}
          onChange={handleFileChange}
        />
        <p>업로드 가능한 확장자: png, jpg</p>
      </div>
    </S.ImageWrap>
  );
};

export default ProfileUpload;
