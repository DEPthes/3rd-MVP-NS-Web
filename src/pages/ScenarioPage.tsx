import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/ScenarioPageStyle';
import { getToday } from '@/apis/theme/getToday';
import { TTodayThemeResponse } from '@/types/mytype'; // 타입 임포트
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';

const ScenarioPage: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const navigate = useNavigate();

  const handleUnauthorized = useHandleUnauthorized(); // handleUnauthorized 콜백 생성. getToday오류 방지 위해.

  useEffect(() => {
    const fetchTopic = async () => {
      const data: TTodayThemeResponse | undefined = await getToday(
        handleUnauthorized,
      );
      if (data) {
        setTopic(data.content);
      } else {
        console.error('오늘의 주제를 불러오지 못했습니다.');
      }
    };

    fetchTopic();
  }, [handleUnauthorized]);

  return (
    <S.Container>
      <S.Title>나였다면</S.Title>
      <S.TitleMini>N력 키우기의 시작, N 상상력의 첫 질문</S.TitleMini>
      <S.TopicBox>
        <S.TopicHeader>오늘의 주제</S.TopicHeader>
        <S.Topic>{topic}</S.Topic>
      </S.TopicBox>
      <S.ButtonContainer>
        <S.ActionButton
          onClick={() => navigate('/scenario/write', { state: { topic } })}
        >
          오늘의 주제 쓰러가기
        </S.ActionButton>
        <S.AnotherButton onClick={() => navigate('/scenario/topic')}>
          다른 주제 둘러보기
        </S.AnotherButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ScenarioPage;
