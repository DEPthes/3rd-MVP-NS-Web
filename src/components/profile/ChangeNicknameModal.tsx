import React, { useState } from 'react';
import * as S from '@/styles/profile/ChangeNicknameModalStyle';
import LightButton from '@/components/button/LightButton';
import FieldCancelRedIcon from '@/assets/icons/FieldCancelRed.svg';
import FieldCheckIcon from '@/assets/icons/FieldCheck.svg';
import FieldCancelIcon from '@/assets/icons/FieldCancel.svg';
import { patchNickname } from '@/apis/user/patchNickname';
import { postPassword } from '@/apis/user/postPassword';
import DarkButton from '../button/DarkButton';
import { getNickname } from '@/apis/auth/getNickname';

type ChangeNicknameModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newNickname: string) => void;
};

const ChangeNicknameModal: React.FC<ChangeNicknameModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');
  const [passwordValidationColor, setPasswordValidationColor] =
    useState('var(--NS-Main1)');
  const [validationMessage, setValidationMessage] = useState(
    '*한글 1글자~10글자 이내로 입력해주세요',
  ); // 초기 메시지 설정
  const [validationColor, setValidationColor] = useState('var(--NS-Main1)');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const [isPasswordVerified, setIsPasswordVerified] = useState(false); // 비밀번호 확인 상태

  const validateNickname = (nickname: string) => {
    const isValid = /^[가-힣]{1,10}$/.test(nickname);
    setIsNicknameValid(isValid);

    if (nickname.length === 0) {
      setValidationMessage('*한글 1글자~10글자 이내로 입력해주세요');
      setValidationColor('var(--NS-Main1)'); // 기본 색상
    } else if (!isValid) {
      setValidationMessage('한글 1글자~10글자 이내로 입력해주세요');
      setValidationColor('var(--NS-Black)'); // 입력이 시작되면 검정색으로 변경
    } else {
      setValidationMessage(''); // 유효한 입력이면 메시지를 숨깁니다.
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
    validateNickname(value);
    setIsSaveEnabled(false); // 닉네임이 변경되면 수정 버튼 비활성화
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordValidationMessage(''); // 입력 중일 때 메시지 초기화
    setPasswordValidationColor('var(--NS-Black)'); // 입력 중일 때 색상 설정
    setIsPasswordVerified(false); // 입력 중일 때는 비밀번호 확인 상태 초기화
  };

  const clearNicknameInput = () => {
    setNickname(''); // 닉네임 필드만 초기화
    setValidationMessage('');
    setValidationColor('var(--NS-Main1)');
    setIsNicknameValid(false);
    setIsSaveEnabled(false);
  };

  const clearPasswordInput = () => {
    setPassword(''); // 비밀번호 필드 초기화
    setPasswordValidationMessage('');
    setPasswordValidationColor('var(--NS-Main1)');
    setIsPasswordVerified(false); // 비밀번호 확인 상태 초기화
  };

  const clearInput = () => {
    clearNicknameInput();
    clearPasswordInput();
  };

  const handlePasswordVerification = async () => {
    try {
      const passwordCheck = await postPassword(password);
      if (passwordCheck.check && passwordCheck.information) {
        setIsPasswordVerified(true); // 비밀번호 확인 성공
        setPasswordValidationColor('var(--NS-Main1)');
      } else {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }
    } catch (error: any) {
      setPasswordValidationMessage(
        error.message || '비밀번호가 일치하지 않습니다.',
      );
      setPasswordValidationColor('#EE4B4B'); // 비밀번호 불일치 시
      setIsPasswordVerified(false);
    }
  };

  const handleDuplicateCheck = async () => {
    if (isNicknameValid) {
      try {
        const response = await getNickname({ nickname });
        console.log('Nickname Check Response:', response); // 반환된 결과를 콘솔에 출력

        if (response?.information?.available) {
          setValidationMessage('사용 가능한 닉네임입니다.');
          setValidationColor('var(--NS-Main1)');
          setIsSaveEnabled(true); // 중복 확인이 성공하면 수정 버튼 활성화
        } else {
          setValidationMessage('이미 사용 중인 닉네임입니다.');
          setValidationColor('#EE4B4B');
          setIsSaveEnabled(false);
        }
      } catch (error: any) {
        console.error('Error during nickname check:', error);
        setValidationMessage('닉네임 중복 확인에 실패했습니다.');
        setValidationColor('#EE4B4B');
        setIsSaveEnabled(false);
      }
    }
  };

  const handleSave = async () => {
    if (isSaveEnabled) {
      try {
        await patchNickname(nickname); // 닉네임 변경 API 호출
        onSuccess(nickname); // 성공적으로 닉네임 변경 시 콜백 호출
        handleModalClose(); // 닉네임이 성공적으로 변경되면 모달 닫기
      } catch (error: any) {
        setValidationMessage(error.message || '닉네임 변경에 실패했습니다.');
        setValidationColor('#EE4B4B'); // 오류 발생 시
      }
    }
  };

  const handleModalClose = () => {
    clearInput(); // 모든 필드 초기화
    onClose(); // 모달 닫기
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Title>닉네임 수정</S.Title>

        {!isPasswordVerified ? (
          <S.PasswordContainer>
            <S.PasswordSection $color={passwordValidationColor}>
              <S.Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="비밀번호"
                $color={passwordValidationColor}
              />
              {password.length > 0 && passwordValidationColor !== '#EE4B4B' && (
                <>
                  {!isPasswordVerified && (
                    <S.Icon
                      src={FieldCancelIcon}
                      alt="clear"
                      onClick={clearPasswordInput}
                    />
                  )}
                  {isPasswordVerified && (
                    <S.Icon src={FieldCheckIcon} alt="check" />
                  )}
                </>
              )}
              {passwordValidationColor === '#EE4B4B' && (
                <S.Icon src={FieldCancelRedIcon} onClick={clearPasswordInput} />
              )}
            </S.PasswordSection>
            {passwordValidationMessage && (
              <S.PasswordValidationMessage $color={passwordValidationColor}>
                {passwordValidationMessage}
              </S.PasswordValidationMessage>
            )}
            <S.PButtonContainer>
              <LightButton text="취소" onClick={handleModalClose} />
              <DarkButton
                text="확인"
                onClick={handlePasswordVerification}
                isDisabled={!password} // 비밀번호가 입력되었을 때만 활성화
              />
            </S.PButtonContainer>
          </S.PasswordContainer>
        ) : (
          <>
            <S.InputContainer>
              <S.ChangeContainer>
                <S.InputSection $color={validationColor}>
                  <S.Input
                    type="text"
                    value={nickname}
                    onChange={handleNicknameChange}
                    placeholder="변경할 닉네임"
                    $color={validationColor}
                  />
                  {nickname.length > 0 &&
                    validationColor === 'var(--NS-Black)' && (
                      <S.Icon
                        src={FieldCancelIcon}
                        alt="clear"
                        onClick={clearNicknameInput} // 닉네임만 초기화
                      />
                    )}
                  {validationColor === 'var(--NS-Main1)' && isSaveEnabled && (
                    <S.Icon src={FieldCheckIcon} />
                  )}
                  {validationColor === '#EE4B4B' && (
                    <S.Icon
                      src={FieldCancelRedIcon}
                      onClick={clearNicknameInput}
                    />
                  )}
                </S.InputSection>
                <S.DButtonContainer>
                  <LightButton
                    text="중복 확인"
                    onClick={handleDuplicateCheck}
                    isDisabled={!isNicknameValid} // 닉네임이 유효할 때만 활성화
                  />
                </S.DButtonContainer>
              </S.ChangeContainer>
              <S.ValidationMessage $color={validationColor}>
                {validationMessage}
              </S.ValidationMessage>
            </S.InputContainer>

            <S.ButtonContainer>
              <LightButton text="취소" onClick={handleModalClose} />
              <DarkButton
                text="확인"
                onClick={handleSave}
                isDisabled={!isSaveEnabled}
              />
            </S.ButtonContainer>
          </>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default ChangeNicknameModal;
