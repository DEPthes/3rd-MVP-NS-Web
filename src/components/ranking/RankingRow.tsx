import React from 'react';
import { TUser, SortType } from '../../types/ranking/user';
import * as S from '@styles/ranking/RankingRowStyle';

type RankingRowProps = {
  user: TUser;
  rank: number;
  sortType: SortType;
};

const RankingRow: React.FC<RankingRowProps> = ({ user, rank, sortType }) => {
  const score =
    sortType === 'total'
      ? user.totalScore
      : sortType === 'daily'
      ? user.dailyScore
      : sortType === 'weekly'
      ? user.weeklyScore
      : user.monthlyScore;

  return (
    <S.TableRow>
      <S.TableData>{rank}위</S.TableData>
      <S.TableData>{user.userNickname}</S.TableData>
      <S.TableData>{score}점</S.TableData>
    </S.TableRow>
  );
};

export default RankingRow;
