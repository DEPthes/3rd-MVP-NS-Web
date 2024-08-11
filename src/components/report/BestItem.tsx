import * as S from '@/styles/report/BestItemStyle';
import { TReportBest } from '@/types/report';
import HeartIcon from '@assets/icons/BlueHeartFill.svg?react';

const BestItem = ({
  item,
  onProfileClick,
  onPostClick,
}: {
  item: TReportBest;
  onProfileClick: (id: number) => void;
  onPostClick: (id: number) => void;
}) => {
  return (
    <S.Container>
      <S.ProfileWrap onClick={() => onProfileClick(item.profileId)}>
        <img src={item.image} alt="" />
        <h3>{item.nickname}</h3>
        <p>{item.selectLength}회 선정</p>
      </S.ProfileWrap>
      <S.PostWrap onClick={() => onPostClick(item.postId)}>
        <S.PostLeftWrap>
          <h3>{item.title}</h3>
          <p>발행일 : {item.date}</p>
        </S.PostLeftWrap>
        <S.PostRightWrap>
          <HeartIcon />
          <h5>{item.heart}</h5>
        </S.PostRightWrap>
      </S.PostWrap>
    </S.Container>
  );
};

export default BestItem;
