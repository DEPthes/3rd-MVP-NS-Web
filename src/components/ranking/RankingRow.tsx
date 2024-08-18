import React from 'react';
import { TUser } from '../../types/ranking/user';
import * as S from '@styles/ranking/RankingRowStyle';

type RankingRowProps = {
  user: TUser;
  rank: React.ReactNode;
  isCurrentUser: boolean;
};

const RankingRow: React.FC<RankingRowProps> = ({
  user,
  rank,
  isCurrentUser,
}) => {
  console.log(user, rank);
  return (
    <S.TableRow>
      <S.TableData1 $isCurrentUser={isCurrentUser}>{rank}위</S.TableData1>
      <S.TableData2 $isCurrentUser={isCurrentUser}>
        {user.nickname}
      </S.TableData2>
      <S.TableData3 $isCurrentUser={isCurrentUser}>{user.point}점</S.TableData3>
    </S.TableRow>
  );
};

export default RankingRow;
