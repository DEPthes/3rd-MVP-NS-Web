import EmptyCharacter from '@assets/images/EmptyCharacter.svg?react';
import * as S from '@styles/layout/LoadingStyle';

const Loading = () => {
  return (
    <S.LoadingContainer>
      <EmptyCharacter />
    </S.LoadingContainer>
  );
};

export default Loading;
