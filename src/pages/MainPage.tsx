import React, { useRef, useEffect } from 'react';
import * as S from '@/styles/main/MainPageStyle';
import { useNavigate, useLocation } from 'react-router-dom';
import ServiceContent from '@/components/main/ServiceContent';
import IntroductionContainer from '@/components/main/IntroductionContainer';
import UsageContainer from '@/components/main/UsageContainer';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isDesktop, isMobileOrTablet } = useNSMediaQuery();

  const introductionRef = useRef<HTMLDivElement>(null);
  const usageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state?.scrollToIntroduction) {
      introductionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.state?.scrollToUsage) {
      usageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <S.Container>
      <S.Content>
        <S.Service>N력 키우기란?</S.Service>
        <ServiceContent />
        {/* ref와 id 설정 */}
        <S.Introduction ref={introductionRef} id="service-introduction">
          서비스 소개
        </S.Introduction>
        <IntroductionContainer />
        <S.Usage ref={usageRef} id="usage">
          N력 키우는 방법
        </S.Usage>
        <UsageContainer />
        <S.Text>
          {isMobileOrTablet
            ? `지금 바로 N력을 키우며, \n상상력의 세계로 뛰어들어 보세요! `
            : '지금 바로 N력을 키우며, 상상력의 세계로 뛰어들어 보세요!'}
        </S.Text>
        <S.ButtonContainer>
          {isDesktop && <img src="/src/assets/icons/☞.svg" alt="right-icon" />}
          <S.StyledButton onClick={() => navigate('/scenario')}>
            나였다면
          </S.StyledButton>
          {isDesktop && <img src="/src/assets/icons/☜.svg" alt="left-icon" />}
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
};

export default MainPage;
