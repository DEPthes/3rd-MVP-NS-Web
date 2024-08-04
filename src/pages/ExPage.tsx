//예시 페이지
import * as S from '@/styles/ex/ExPageStyle';
import DarkButton from '@/components/button/DarkButton';
import LightButton from '@/components/button/LightButton';

const ExPage = () => {
  return (
    <S.Container>
      예시페이지
      <LightButton
        text="임시저장"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <DarkButton
        text="게시"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </S.Container>
  );
};

export default ExPage;
