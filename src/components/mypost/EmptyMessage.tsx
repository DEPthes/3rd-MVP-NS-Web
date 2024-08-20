import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/mypost/EmptyMessageStyle';
import EmptyCharacter from '@/assets/images/EmptyCharacter.svg?react';
import EmptyCharacterN from '@/assets/images/EmptyCharacterN.svg?react';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';

type EmptyMessageProps = {
  isNCharacter: boolean;
  buttonText: string; // 버튼 텍스트
  messageText: string; // 메시지 텍스트
  navigateTo: string; // 이동할 경로
  smallfont: boolean;
};

const EmptyMessage: React.FC<EmptyMessageProps> = ({
  isNCharacter,
  buttonText,
  messageText,
  navigateTo,
  smallfont,
}) => {
  const navigate = useNavigate();
  const { isMobileOrTablet } = useNSMediaQuery();

  return (
    <S.Container>
      <S.EmptyMessageContainer>
        {isNCharacter ? (
          <EmptyCharacterN
            width={isMobileOrTablet ? 160 : 240}
            height={isMobileOrTablet ? 160 : 240}
          />
        ) : (
          <EmptyCharacter
            width={isMobileOrTablet ? 160 : 200}
            height={isMobileOrTablet ? 160 : 200}
          />
        )}
        <S.Message $smallfont={smallfont} $isNCharacter={isNCharacter}>
          {messageText}
        </S.Message>
      </S.EmptyMessageContainer>
      <S.ButtonContainer>
        <S.Button onClick={() => navigate(navigateTo)}>{buttonText}</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default EmptyMessage;
