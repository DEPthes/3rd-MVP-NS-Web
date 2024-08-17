import { useRef, useEffect } from 'react';
import * as S from '@/styles/main/MainPageStyle';
import ServiceContent from '@/components/main/ServiceContent';
import IntroductionContainer from '@/components/main/IntroductionContainer';
import UsageContainer from '@/components/main/UsageContainer';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import MainLeftIcon from '@assets/icons/MainLeft.svg?react';
import MainRightIcon from '@assets/icons/MainRight.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { headerState } from '@/recoil/header';

const MainPage = () => {
  const { isDesktop, isMobileOrTablet } = useNSMediaQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const introductionRef = useRef<HTMLDivElement>(null);
  const usageRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const setHeader = useSetRecoilState(headerState);

  useEffect(() => {
    const sections = [
      { id: 'top', ref: topRef },
      { id: 'service', ref: introductionRef },
      { id: 'usage', ref: usageRef },
    ];

    const observer = new IntersectionObserver(
      entries => {
        let isAnySectionVisible = false;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isAnySectionVisible = true;
            setHeader(entry.target.id);

            const newHash =
              entry.target.id === 'top' ? '/' : `#${entry.target.id}`;
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, '', newHash);
            }
          }
        });

        if (!isAnySectionVisible) {
          setHeader('');
        }
      },
      { threshold: 0.5 },
    );

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [setHeader]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#service') {
      introductionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#usage') {
      usageRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <S.Container>
      <S.Content>
        <S.Service ref={topRef} id="top">
          N력 키우기란?
        </S.Service>
        <ServiceContent />
        <S.IntroductionWrap ref={introductionRef} id="service">
          <S.Introduction>서비스 소개</S.Introduction>
          <IntroductionContainer />
        </S.IntroductionWrap>
        <div ref={usageRef} id="usage">
          <S.UsageWrap>
            <S.Usage>N력 키우는 방법</S.Usage>
            <UsageContainer />
          </S.UsageWrap>
          <S.Text>
            지금 바로 N력을 키우며, {isMobileOrTablet && <br />}
            상상력의 세계로 뛰어들어 보세요!
          </S.Text>
          <S.ButtonContainer>
            {isDesktop && <MainLeftIcon />}
            <S.StyledButton onClick={() => navigate('/scenario')}>
              나였다면
            </S.StyledButton>
            {isDesktop && <MainRightIcon />}
          </S.ButtonContainer>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default MainPage;
