import React from 'react';
import IntroductionContent from '@/components/main/IntroductionContent';
import * as S from '@/styles/main/IntroductionContainerStyle';

const IntroductionContainer: React.FC = () => {
  return (
    <S.Container>
      <S.TabletWrap>
        <IntroductionContent
          emoji="🤔"
          title="나였다면"
          content="랜덤 주제 글쓰기"
        />
        <IntroductionContent
          emoji="📑"
          title="N 보고서"
          content="주제별 상상력 분석 서비스"
        />
      </S.TabletWrap>
      <IntroductionContent
        emoji="🏆"
        title="인플루N자"
        content="N력 랭킹 서비스"
      />
    </S.Container>
  );
};

export default IntroductionContainer;
