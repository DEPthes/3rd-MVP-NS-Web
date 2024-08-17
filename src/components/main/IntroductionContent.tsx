import React from 'react';
import * as S from '@/styles/main/IntroductionContentStyle';

type IntroductionContentProps = {
  emoji: string;
  title?: string;
  content: string;
  usage?: boolean;
};

const IntroductionContent: React.FC<IntroductionContentProps> = ({
  emoji,
  title,
  content,
  usage,
}) => {
  const formattedContent = content.split('\n').map((str, index) => (
    <React.Fragment key={index}>
      {str}
      <br />
    </React.Fragment>
  ));

  return (
    <S.Container>
      <S.Emoji>{emoji}</S.Emoji>
      {title && <S.Title $usage={usage}>{title}</S.Title>}
      <S.Content>{formattedContent}</S.Content>
    </S.Container>
  );
};

export default IntroductionContent;
