import React from 'react';
import * as S from '@/styles/main/ServiceContentStyle';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';

const ServiceContent: React.FC = () => {
  const { isDesktop, isMobileOrTablet } = useNSMediaQuery();
  return (
    <S.Container>
      <S.Content>
        {isDesktop && (
          <S.RegularText>
            <S.HighlightText>N력 키우기</S.HighlightText>는 랜덤 주제 글쓰기
            서비스입니다.
            <br />
            <br />
            MBTI에서 N은 직관주의 성향을 나타내며, 추상적이고 미래지향적입니다.
            <br />
            럭키비키한 상상을 하기도, 별의별 걱정을 사서 하기도 합니다.
            <br />
            그래서 종종 ‘대가리꽃밭’ 이라는 별명으로 불리기도 합니다.
            <br />
            <br />
            하지만 이러한 성향이 나쁜 것은 아닙니다.
            <br />
            <S.BoldText>상상력</S.BoldText>은 누구에게나 중요한 자산이니까요.
            <br />
            <br />
            새로운 아이디어를 탐구하고, 실험하는
            <br />
            미래를 예측하고 창조하는 능력은
            <br />
            상상력의 핵심 요소입니다.
            <br />
            <br />
            N력 키우기에서 당신의 세계를 넓혀보세요!
          </S.RegularText>
        )}

        {isMobileOrTablet && (
          <S.RegularText>
            <S.HighlightText>N력 키우기</S.HighlightText>는 랜덤 주제 글쓰기
            서비스입니다.
            <br />
            <br />
            MBTI에서 N은 직관주의 성향을 나타내며, <br />
            추상적이고 미래지향적입니다.
            <br />
            럭키비키한 상상을 하기도, <br />
            별의별 걱정을 사서 하기도 합니다.
            <br />
            그래서 종종 ‘대가리꽃밭’ 이라는 별명으로
            <br /> 불리기도 합니다.
            <br />
            <br />
            하지만 이러한 성향이 나쁜 것은 아닙니다.
            <br />
            <S.BoldText>상상력</S.BoldText>은 누구에게나 중요한 자산이니까요.
            <br />
            <br />
            새로운 아이디어를 탐구하고, 실험하는
            <br />
            미래를 예측하고 창조하는 능력은
            <br />
            상상력의 핵심 요소입니다.
            <br />
            <br />
            N력 키우기에서 당신의 세계를 넓혀보세요!
          </S.RegularText>
        )}
      </S.Content>
    </S.Container>
  );
};

export default ServiceContent;
