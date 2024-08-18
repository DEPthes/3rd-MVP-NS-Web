import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import * as S from '@/styles/report/BestItemStyle';
import { TReportBest } from '@/types/report';
import HeartIcon from '@assets/icons/BlueHeartFill.svg?react';

const BestItem = ({
  item,
  onProfileClick,
  onPostClick,
}: {
  item: TReportBest;
  onProfileClick: (isCurrentUser: boolean, userId: number) => void;
  onPostClick: (id: number) => void;
}) => {
  const { isMobileOrTablet } = useNSMediaQuery();

  return (
    <S.Container>
      {!isMobileOrTablet && (
        <S.ProfileWrap
          onClick={() =>
            onProfileClick(item.isCurrentUser ?? false, item.userId ?? 0)
          }
        >
          <img src={item.imageUrl ?? ''} alt="" />
          <h3>{item.nickname}</h3>
          <p>{item.bestSelectionCount}회 선정</p>
        </S.ProfileWrap>
      )}
      <S.PostWrap onClick={() => onPostClick(item.boardId ?? 0)}>
        <S.PostLeftWrap>
          <h3>{item.title}</h3>
          <p>발행일 : {item.boardCreatedAt}</p>
        </S.PostLeftWrap>
        <S.PostRightWrap>
          <HeartIcon width={isMobileOrTablet ? 14 : 35} />
          <h5>{item.likeCount}</h5>
        </S.PostRightWrap>
      </S.PostWrap>
    </S.Container>
  );
};

export default BestItem;
