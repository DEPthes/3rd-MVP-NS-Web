import React from 'react';
import IntroductionContent from '@/components/main/IntroductionContent';
import * as S from '@/styles/main/IntroductionContainerStyle';

const IntroductionContainer: React.FC = () => {
  return (
    <S.Container>
      <IntroductionContent
        emoji="👽"
        content={`매일 새로운 주제를 제공하여\n여러분의 상상력을 자극합니다!`}
      />
      <IntroductionContent
        emoji="✨"
        content={`주제에 대해 나였다면 어떻게 했을지\n창의적인 아이디어를 표현해보세요!`}
      />
      <IntroductionContent
        emoji="👀"
        content={`다른 사람은 어떻게 썼을까?\n상상력을 구경하고 영감을 얻어보세요!`}
      />
    </S.Container>
  );
};

export default IntroductionContainer;
