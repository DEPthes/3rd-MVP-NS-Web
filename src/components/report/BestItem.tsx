import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import * as S from '@/styles/report/BestItemStyle';
import { TReportBest } from '@/types/report';
import BlueHeartFillIcon from '@assets/icons/BlueHeartFill.svg?react';
import BlueHeartIcon from '@assets/icons/BlueHeart.svg?react';

const BestItem = ({
  item,
  onProfileClick,
  onPostClick,
  onHeartClick,
}: {
  item: TReportBest;
  onProfileClick: (isCurrentUser: boolean, userId: number) => void;
  onPostClick: (id: number) => void;
  onHeartClick: (id: number, e: React.MouseEvent) => void;
}) => {
  const { isMobileOrTablet } = useNSMediaQuery();

  const formatDate = (boardCreatedAt: string) => {
    const date = new Date(boardCreatedAt);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  };

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
          <p>발행일 : {formatDate(item.boardCreatedAt ?? '')}</p>
        </S.PostLeftWrap>
        <S.PostRightWrap onClick={e => onHeartClick(item.boardId ?? 0, e)}>
          {item.isLiked ? (
            <BlueHeartFillIcon width={isMobileOrTablet ? 14 : 35} />
          ) : (
            <BlueHeartIcon width={isMobileOrTablet ? 14 : 35} />
          )}
          <h5>{item.likeCount}</h5>
        </S.PostRightWrap>
      </S.PostWrap>
    </S.Container>
  );
};

export default BestItem;
