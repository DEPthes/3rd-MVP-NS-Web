import React from 'react';
import * as S from '@/styles/main/MainPageStyle';
import { useNavigate } from 'react-router-dom';
import ServiceContent from '@/components/main/ServiceContent';
import IntroductionContainer from '@/components/main/IntroductionContainer';
import UsageContainer from '@/components/main/UsageContainer';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <S.Service>N력 키우기란?</S.Service>
        <ServiceContent />
        <S.Introduction>서비스 소개</S.Introduction>
        <IntroductionContainer />
        <S.Usage>N력 키우는 방법</S.Usage>
        <UsageContainer />
        <S.Text>
          지금 바로 N력을 키우며, 상상력의 세계로 뛰어들어 보세요!
        </S.Text>
        <S.Footer>
          <img src="/src/assets/icons/☞.svg" alt="right-icon" />
          <S.StyledButton onClick={() => navigate('/scenario')}>
            나였다면
          </S.StyledButton>
          <img src="/src/assets/icons/☜.svg" alt="left-icon" />
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};

export default MainPage;
