import * as S from '@/styles/signup/SignupInputStyle';
import FieldCheckIcon from '@assets/icons/FieldCheck.svg?react';
import FieldCancelIcon from '@assets/icons/FieldCancel.svg?react';
import { useEffect, useState } from 'react';
import LightButton from '../button/LightButton';

type Props = {
  type: 'text' | 'password';
  text: string;
  setText: (value: string) => void;
  placeholder: string;
  validationFn: (value: string) => boolean;
  duplicateCheckFn?: (value: string) => Promise<boolean>;
  warningMessages: {
    default: string;
    invalid: string;
    duplicate?: string;
    success: string;
  };
  onValidityChange: (isValid: boolean) => void;
};

const SignupInput = ({
  type,
  text,
  setText,
  placeholder,
  validationFn,
  duplicateCheckFn,
  warningMessages,
  onValidityChange,
}: Props) => {
  const [warningText, setWarningText] = useState(warningMessages.default); //경고 메시지
  const [isDuplicate, setIsDuplicate] = useState(true); //중복 체크 상태
  const [duplicateText, setDuplicateText] = useState(''); //중복 체크 성공 텍스트
  const [isDuplicateOn, setIsDuplicateOn] = useState(false); //중복 체크 버튼 활성화 상태
  const [isFocused, setIsFocused] = useState(false); //입력란 포커스 상태
  const [color, setColor] = useState('var(--NS-Main1)'); //입력란 색상 상태
  const [showIcon, setShowIcon] = useState<'Check' | 'Cancel' | ''>(''); //아이콘 표시 상태

  useEffect(() => {
    //입력 값 유효성 검사 함수
    const checkValidity = async () => {
      if (text.length === 0) {
        //입력 값이 비어 있을 때
        setColor('var(--NS-Main1)');
        setWarningText(warningMessages.default);
        setIsDuplicateOn(false);
        setShowIcon('');
      } else if (validationFn(text)) {
        //유효성 검사를 통과한 경우
        if (duplicateCheckFn && text !== duplicateText) {
          //중복 체크 함수가 존재하는 경우, 글자가 변경되었을 때
          setDuplicateText('');
          setIsDuplicate(isDuplicate);
          setWarningText(warningMessages.default);
          setColor('var(--NS-Black)');
          setIsDuplicateOn(true);
          setShowIcon('Cancel');
        } else {
          //중복 체크가 필요없는 경우
          setColor('var(--NS-Main1)');
          setWarningText(warningMessages.success);
          onValidityChange(true);
          setShowIcon('Check');
        }
      } else {
        //유효성 검사를 통과하지 못한 경우
        onValidityChange(false);
        setColor('var(--Red)');
        setWarningText(warningMessages.invalid);
        setIsDuplicateOn(false);
        setShowIcon('Cancel');

        //포커스 상태에 따라 색상 변경
        if (isFocused) {
          setColor('var(--NS-Black)');
        }
      }
    };

    checkValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, text]);

  //중복 체크 함수
  const handleDuplicate = async () => {
    if (warningMessages.duplicate && duplicateCheckFn) {
      const duplicate = await duplicateCheckFn(text);
      setIsDuplicate(duplicate);

      if (duplicate) {
        setColor('var(--Red)');
        setWarningText(warningMessages.duplicate);
        setShowIcon('Cancel');
      } else {
        setColor('var(--NS-Main1)');
        setWarningText(warningMessages.success);
        setDuplicateText(text);
        setShowIcon('Check');
        onValidityChange(true);
      }
    }
  };

  return (
    <>
      <S.ItemWrap color={color}>
        <S.InputWrap color={color}>
          <S.Input
            type={type}
            placeholder={placeholder}
            minLength={1}
            value={text}
            spellCheck={false}
            onChange={event => setText(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            color={color}
          />
          {showIcon === 'Check' ? (
            <FieldCheckIcon style={{ cursor: 'pointer' }} color={color} />
          ) : showIcon === 'Cancel' ? (
            <FieldCancelIcon
              style={{ cursor: 'pointer' }}
              color={color}
              onClick={() => setText('')}
            />
          ) : (
            <></>
          )}
        </S.InputWrap>
        {duplicateCheckFn && (
          <LightButton
            text="중복확인"
            onClick={handleDuplicate}
            isDisabled={!isDuplicateOn}
          />
        )}
      </S.ItemWrap>
      <S.WarningText color={color}>{warningText}</S.WarningText>
    </>
  );
};

export default SignupInput;
