import React from 'react';
import { TUser } from '../../types/ranking/user';
import * as S from '@styles/ranking/RankingRowStyle';

type RankingRowProps = {
  user: TUser;
  rank: number;
};

const RankingRow: React.FC<RankingRowProps> = ({ user, rank }) => {
  console.log(user, rank); // 콘솔에 출력하여 데이터 확인
  return (
    <S.TableRow>
      <S.TableData1>{rank}위</S.TableData1>
      <S.TableData2>{user.nickname}</S.TableData2>
      <S.TableData3>{user.point}점</S.TableData3>
    </S.TableRow>
  );
};

export default RankingRow;
