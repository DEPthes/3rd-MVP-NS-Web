import { getNickname } from '@/apis/auth/getNickname';
import { getUsername } from '@/apis/auth/getUsername';
import { postSignup } from '@/apis/auth/postSignup';
import DarkButton from '@/components/button/DarkButton';
import LightButton from '@/components/button/LightButton';
import BackDrop from '@/components/layout/BackDrop';
import SignupModal from '@/components/modal/SignupModal';
import ProfileUpload from '@/components/signup/ProfileUpload';
import SignupInput from '@/components/signup/SignupInput';
import * as S from '@/styles/signup/SignupPageStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '@assets/images/Profile.png';

const SignupPage = () => {
  const navigate = useNavigate();
  const [idText, setIdText] = useState(''); //아이디
  const [passwordText, setPasswordText] = useState(''); //비밀번호
  const [passwordConfirmText, setPasswordConfirmText] = useState(''); //비밀번호 확인
  const [nicknameText, setNicknameText] = useState(''); //닉네임
  const [validity, setValidity] = useState({
    id: false,
    password: false,
    passwordConfirm: false,
    nickname: false,
  }); //입력 값 유효성
  const [isModal, setIsModal] = useState(false); //회원가입 성공 모달창
  const [profileImage, setProfileImage] = useState(Profile); //프로필 이미지
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null); //프로필 이미지 파일

  //유효성 업데이트
  const handleValidityChange = (key: string, isValid: boolean) => {
    setValidity(prev => ({ ...prev, [key]: isValid }));
  };

  //유효성 검사
  const validateId = (value: string) =>
    /^(?=.*[a-z])(?=.*\d)[a-z0-9]{6,10}$/.test(value);
  const validatePassword = (value: string) => {
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*.]/.test(value);

    const countValidTypes = [
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecialChar,
    ].filter(Boolean).length;

    return value.length >= 8 && countValidTypes >= 3;
  };
  const validatePasswordConfirm = (value: string) => value === passwordText;
  const validateNickname = (value: string) => /^[가-힣]{1,8}$/.test(value);

  //아이디 중복 체크 함수
  const checkDuplicateId = async (value: string) => {
    const response = await getUsername({ username: value });
    if (response) {
      return !response.information.available;
    }
    return false;
  };

  //닉네임 중복 체크 함수
  const checkDuplicateNickname = async (value: string) => {
    const response = await getNickname({ nickname: value });
    if (response) {
      return !response.information.available;
    }
    return false;
  };

  //회원가입 함수
  const handleSignup = async () => {
    const response = await postSignup({
      username: idText,
      password: passwordText,
      checkPassword: passwordConfirmText,
      nickname: nicknameText,
      image: profileImageFile,
    });
    if (response.check) {
      setIsModal(true);
    }
  };

  return (
    <>
      <S.Container>
        <h1>회원가입</h1>
        <S.SignupWrap>
          <S.InputWrap>
            <SignupInput
              type="text"
              text={idText}
              setText={setIdText}
              placeholder="아이디"
              validationFn={validateId}
              duplicateCheckFn={checkDuplicateId}
              onValidityChange={isValid => handleValidityChange('id', isValid)}
              warningMessages={{
                default:
                  '영어(소문자), 숫자를 조합하여 6~10자 이내로 입력해주세요',
                invalid:
                  '영어(소문자), 숫자를 조합하여 6~10자 이내로 입력해주세요',
                duplicate: '사용할 수 없는 아이디입니다',
                success: '사용할 수 있는 아이디입니다',
              }}
            />
            <SignupInput
              type="password"
              text={passwordText}
              setText={setPasswordText}
              placeholder="비밀번호"
              validationFn={validatePassword}
              onValidityChange={isValid =>
                handleValidityChange('password', isValid)
              }
              warningMessages={{
                default:
                  '알파벳 대·소문자, 숫자, 특수문자 중 3종류 이상을 조합하여, 최소 8자리 이상의 길이로 구성해주세요',
                invalid:
                  '알파벳 대·소문자, 숫자, 특수문자 중 3종류 이상을 조합하여, 최소 8자리 이상의 길이로 구성해주세요',
                success: '사용 가능한 비밀번호입니다',
              }}
            />
            <SignupInput
              type="password"
              text={passwordConfirmText}
              setText={setPasswordConfirmText}
              placeholder="비밀번호 확인"
              validationFn={validatePasswordConfirm}
              onValidityChange={isValid =>
                handleValidityChange('passwordConfirm', isValid)
              }
              warningMessages={{
                default: '',
                invalid: '비밀번호가 일치하지 않습니다',
                success: '비밀번호가 일치합니다',
              }}
            />
            <SignupInput
              type="text"
              text={nicknameText}
              setText={setNicknameText}
              placeholder="닉네임"
              validationFn={validateNickname}
              duplicateCheckFn={checkDuplicateNickname}
              onValidityChange={isValid =>
                handleValidityChange('nickname', isValid)
              }
              warningMessages={{
                default: '한글 1~8글자 이내로 입력해주세요',
                invalid: '한글 1~8글자 이내로 입력해주세요',
                duplicate: '닉네임을 사용할 수 없습니다',
                success: '사용 가능한 닉네임입니다',
              }}
            />
          </S.InputWrap>
          <ProfileUpload
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            setProfileImageFile={setProfileImageFile}
          />
        </S.SignupWrap>
        <S.ButtonWrap>
          <LightButton text="취소" onClick={() => navigate('/login')} />
          <DarkButton
            text="회원가입"
            onClick={handleSignup}
            isDisabled={!Object.values(validity).every(Boolean)}
          />
        </S.ButtonWrap>
      </S.Container>
      {isModal && <BackDrop children={<SignupModal />} isOpen={isModal} />}
    </>
  );
};

export default SignupPage;
