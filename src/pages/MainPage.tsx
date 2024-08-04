import React from 'react';
import * as S from '@/styles/main/MainPageStyle';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <S.Section id="service">
          <S.Service>N력 키우기란?</S.Service>
        </S.Section>
        <S.Section id="usage">
          <S.Usage>이용 방법</S.Usage>
        </S.Section>
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
