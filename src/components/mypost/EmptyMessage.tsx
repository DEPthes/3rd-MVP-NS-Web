import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/mypost/EmptyMessageStyle';

// EmptyMessageProps 타입 정의
type EmptyMessageProps = {
  buttonText: string; // 버튼 텍스트
  messageText: string; // 메시지 텍스트
  navigateTo: string; // 이동할 경로
};

const EmptyMessage: React.FC<EmptyMessageProps> = ({
  buttonText,
  messageText,
  navigateTo,
}) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.EmptyMessageContainer>
        <S.Image>
          <img src="" alt="character img" />
        </S.Image>
        <S.Message>{messageText}</S.Message>
      </S.EmptyMessageContainer>
      <S.ButtonContainer>
        <S.Button onClick={() => navigate(navigateTo)}>{buttonText}</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default EmptyMessage;

// 스타일 컴포넌트 정의
