import React from 'react';
import IntroductionContent from '@/components/main/IntroductionContent';
import * as S from '@/styles/main/UsageContainerStyle';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import arrow from '@/assets/images/arrow.svg';

const UsageContainer: React.FC = () => {
  const { isDesktop, isMobileOrTablet } = useNSMediaQuery();

  return (
    <S.Container>
      <IntroductionContent
        emoji="👽"
        title={isMobileOrTablet ? '01' : undefined}
        content={`매일 새로운 주제를 제공하여\n여러분의 상상력을 자극합니다!`}
        usage={true}
      />
      {isDesktop && (
        <S.Arrow>
          <img src={arrow} alt="Arrow" />
        </S.Arrow>
      )}
      <IntroductionContent
        emoji="✨"
        title={isMobileOrTablet ? '02' : undefined}
        content={`주제에 대해 나였다면 어떻게 했을지\n창의적인 아이디어를 표현해보세요!`}
        usage={true}
      />
      {isDesktop && (
        <S.Arrow>
          <img src={arrow} alt="Arrow" />
        </S.Arrow>
      )}
      <IntroductionContent
        emoji="👀"
        title={isMobileOrTablet ? '03' : undefined}
        content={`다른 사람은 어떻게 썼을까?\n상상력을 구경하고 영감을 얻어보세요!`}
        usage={true}
      />
    </S.Container>
  );
};

export default UsageContainer;
