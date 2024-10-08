import React, { useState } from 'react';
import * as S from '@/styles/ranking/ToggleBarStyle';

const ToggleBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.ToggleBarContainer $isOpen={isOpen}>
      <S.ToggleBarHeader onClick={handleToggle}>
        {isOpen ? '▼ N력은 어떻게 얻나요?' : '▶ N력은 어떻게 얻나요?'}
      </S.ToggleBarHeader>
      {isOpen && (
        <S.ToggleBarContent>
          <S.ToggleBarInput>
            <S.Space>
              <S.Bold>1. 첫 게시글 작성 시 </S.Bold>
              <S.Point>N력 +5</S.Point>
            </S.Space>
            <S.Small>
              *최초 1회만 인정, 지우고 다시 작성 시 중복 획득 불가
            </S.Small>
            <S.Space>
              <S.Bold>2. 오늘의 주제 글 작성 시 </S.Bold>
              <S.Point>N력 +3</S.Point>
            </S.Space>
            <S.Small>*중복 획득 가능</S.Small>
            <S.Space>
              <S.Bold>3. 지난 주제 글 작성 시 </S.Bold>
              <S.Point>N력 +2</S.Point>
            </S.Space>
            <S.Small> *중복 획득 가능</S.Small>
            <S.Space>
              <S.Bold> 4. 특정 주제에 좋아요 눌렀을 때 </S.Bold>
              <S.Point>N력 +1</S.Point>
            </S.Space>
            <S.Small>*하나의 주제에는 최대 1점 획득 가능 (중복 불가)</S.Small>
            <S.Small> *좋아요 취소 시 N력 회수 </S.Small>
            <S.Space>
              <S.Bold> 5. 특정 게시글에 좋아요 눌렀을 때 </S.Bold>
              <S.Point>N력 +1</S.Point>
            </S.Space>
            <S.Small>*N력 = 좋아요 수 </S.Small>
            <S.Space>
              <S.Bold>6. 내 게시글에 좋아요 받았을 때 </S.Bold>
              <S.Point>N력 +1</S.Point>
            </S.Space>
            <S.Small>*N력 = 좋아요 수</S.Small>
            <S.Space>
              <S.Bold> 7. 베스트 게시글 선정 1회당 </S.Bold>
              <S.Point>N력 +5</S.Point>
            </S.Space>
          </S.ToggleBarInput>
        </S.ToggleBarContent>
      )}
    </S.ToggleBarContainer>
  );
};

export default ToggleBar;
