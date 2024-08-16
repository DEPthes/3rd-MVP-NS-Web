import React, { useState, useEffect } from 'react';
import * as S from '@/styles/ranking/RankingPageStyle';
import Top3User from '../components/ranking/Top3User';
import SearchNicknameInput from '../components/ranking/SearchNicknameInput';
import RankingRow from '../components/ranking/RankingRow';
import { TUser, TSortType } from '../types/ranking/user';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import { getRanking } from '@/apis/user/getRanking';

const RankingPage: React.FC = () => {
  const [allUsers, setAllUsers] = useState<TUser[]>([]);
  const [top3Users, setTop3Users] = useState<TUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<TUser[]>([]);
  const [sortType, setSortType] = useState<TSortType>('total');
  const { isDesktop, isMobile, isTablet } = useNSMediaQuery();

  const fetchRankingData = async (type: TSortType) => {
    const rankingData = await getRanking(
      type.toUpperCase() as 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'TOTAL',
    );
    if (rankingData) {
      setTop3Users(rankingData.top3UserRes);
      setAllUsers(rankingData.optionRankingRes);

      // 현재 사용자 찾기
      const currentUser = rankingData.optionRankingRes.find(
        (user: TUser) => user.isCurrentUser,
      );

      // 현재 사용자가 있는 경우, 가장 위에 배치
      if (currentUser) {
        setFilteredUsers([
          currentUser,
          ...rankingData.optionRankingRes.filter(
            (user: TUser) => !user.isCurrentUser,
          ),
        ]);
      } else {
        setFilteredUsers(rankingData.optionRankingRes);
      }
    }
  };

  useEffect(() => {
    fetchRankingData(sortType);
  }, [sortType]);

  return (
    <S.Container>
      <S.FilterLinks>
        {['total', 'daily', 'weekly', 'monthly'].map((option, index) => (
          <React.Fragment key={option}>
            <S.FilterLink
              $isSelected={sortType === option}
              onClick={event => {
                event.preventDefault();
                setSortType(option as TSortType);
              }}
            >
              {option === 'total'
                ? '누적'
                : option === 'daily'
                ? '일간'
                : option === 'weekly'
                ? '주간'
                : '월간'}
            </S.FilterLink>
            {index < 3 && <S.Separator>|</S.Separator>}
          </React.Fragment>
        ))}
      </S.FilterLinks>

      {/* Top 3 유저 프로필 */}
      <S.Top3Container>
        <S.Top3Title>Top 3</S.Top3Title>

        <S.Top3UserProfile>
          {top3Users.length > 1 && (
            <S.Top2>
              <Top3User
                medalEmoji="🥈"
                userId={top3Users[1]?.nickname}
                userProfileImage={top3Users[1]?.imageUrl}
              />
            </S.Top2>
          )}
          {top3Users.length > 0 && (
            <S.Top1>
              <Top3User
                medalEmoji="🥇"
                userId={top3Users[0]?.nickname}
                userProfileImage={top3Users[0]?.imageUrl}
              />
            </S.Top1>
          )}
          {top3Users.length > 2 && (
            <S.Top2>
              <Top3User
                medalEmoji="🥉"
                userId={top3Users[2]?.nickname}
                userProfileImage={top3Users[2]?.imageUrl}
              />
            </S.Top2>
          )}
        </S.Top3UserProfile>

        {isDesktop && (
          <S.Podium src="/src/assets/images/podium.svg" alt="podiumimg" />
        )}
        {isMobile && <S.Podium src="/src/assets/images/smallpodium.svg" />}

        {isTablet && <S.Podium src="/src/assets/icons/PodiumTablet.svg" />}
      </S.Top3Container>

      {/* 닉네임 검색 */}
      <S.SearchContainer>
        <SearchNicknameInput
          onSearchResults={nickname => {
            const results = allUsers.filter(user =>
              user.nickname.toLowerCase().includes(nickname.toLowerCase()),
            );
            setFilteredUsers(results);
          }}
          onClearSearch={() => setFilteredUsers(allUsers)} // 검색어가 비워지면 전체 리스트를 복원
        />
      </S.SearchContainer>

      {/* 전체 랭킹 테이블 */}
      <S.RankingContainer>
        <S.RankingTable>
          <S.TableHeader>
            <S.TableRow>
              <S.TableHeaderItem1>순위</S.TableHeaderItem1>
              <S.TableHeaderItem2>닉네임</S.TableHeaderItem2>
              <S.TableHeaderItem3>점수</S.TableHeaderItem3>
            </S.TableRow>
          </S.TableHeader>
          <S.TableBody>
            {filteredUsers.map(user => (
              <RankingRow key={user.userId} user={user} rank={user.ranking} />
            ))}
          </S.TableBody>
        </S.RankingTable>
      </S.RankingContainer>
    </S.Container>
  );
};

export default RankingPage;
