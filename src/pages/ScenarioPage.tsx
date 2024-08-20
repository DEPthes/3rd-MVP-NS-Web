import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/ScenarioPageStyle';
import { getToday } from '@/apis/theme/getToday';
import { TTodayThemeResponse } from '@/types/mytype'; // 타입 임포트
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import Loading from '@/components/layout/Loading';

const ScenarioPage: React.FC = () => {
  const [topic, setTopic] = useState<TTodayThemeResponse | null>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleUnauthorized = useHandleUnauthorized();

  useEffect(() => {
    const fetchTopic = async () => {
      const data: TTodayThemeResponse | undefined = await getToday(
        handleUnauthorized,
      );
      if (data) {
        setTopic(data);
        setIsLoading(false);
      } else {
        console.error('오늘의 주제를 불러오지 못했습니다.');
      }
    };

    fetchTopic();
  }, [handleUnauthorized]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Container>
          <S.Title>나였다면</S.Title>
          <S.TitleMini>N력 키우기의 시작, N 상상력의 첫 질문</S.TitleMini>
          <S.TopicBox>
            <S.TopicHeader>오늘의 주제</S.TopicHeader>
            <S.Topic>{topic?.content}</S.Topic>
          </S.TopicBox>
          <S.ButtonContainer>
            <S.ActionButton
              onClick={() =>
                navigate(`/scenario/write`, {
                  state: { themeId: topic?.themeId },
                })
              }
            >
              오늘의 주제 쓰러가기
            </S.ActionButton>
            <S.AnotherButton onClick={() => navigate('/scenario/topic')}>
              다른 주제 둘러보기
            </S.AnotherButton>
          </S.ButtonContainer>
        </S.Container>
      )}
    </>
  );
};

export default ScenarioPage;
