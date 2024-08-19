import React, { useState, useEffect } from 'react';
import * as S from '@/styles/ranking/RankingPageStyle';
import Top3User from '../components/ranking/Top3User';
import SearchNicknameInput from '../components/ranking/SearchNicknameInput';
import RankingRow from '../components/ranking/RankingRow';
import { TUser, TSortType } from '../types/ranking/user';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import { getRanking } from '@/apis/user/getRanking';
import ToggleBar from '../components/ranking/ToggleBar';

const RankingPage: React.FC = () => {
  const [allUsers, setAllUsers] = useState<TUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<TUser[]>([]);
  const [top3Users, setTop3Users] = useState<TUser[]>([]);
  const [currentUser, setCurrentUser] = useState<TUser | null>(null); // 현재 사용자 저장
  const [sortType, setSortType] = useState<TSortType>('total');
  const { isDesktop, isMobile, isTablet } = useNSMediaQuery();
  const isLoggedIn = !!localStorage.getItem('accessToken');
  const [isSearching, setIsSearching] = useState<boolean>(false); // 검색 상태 추가

  const fetchRankingData = async (type: TSortType) => {
    try {
      const rankingData = await getRanking(
        type.toUpperCase() as 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'TOTAL',
        isLoggedIn,
      );

      if (rankingData) {
        const { top3UserRes, optionRankingRes } = rankingData;
        setTop3Users(top3UserRes);

        let filteredUserList = optionRankingRes;

        if (isLoggedIn) {
          const foundCurrentUser = optionRankingRes.find(
            (user: TUser) => user.isCurrentUser,
          );

          if (foundCurrentUser) {
            setCurrentUser(foundCurrentUser); // 현재 사용자 정보 저장
            filteredUserList = optionRankingRes.filter(
              (user: TUser) => user.userId !== foundCurrentUser.userId,
            ); // 현재 사용자를 제외한 목록 저장
          } else {
            setCurrentUser(null);
          }
        }

        setFilteredUsers(filteredUserList); // 필터링된 목록 저장
        setAllUsers(optionRankingRes); // 전체 사용자 목록 저장
      }
    } catch (error) {
      console.error('Failed to fetch ranking data:', error);
    }
  };

  useEffect(() => {
    fetchRankingData(sortType);
  }, [sortType, isLoggedIn]); // isLoggedIn 상태도 의존성에 추가

  return (
    <S.Container>
      <ToggleBar />
      <S.Wrapper>
        <S.Content>
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
                    point={top3Users[1]?.point}
                  />
                </S.Top2>
              )}
              {top3Users.length > 0 && (
                <S.Top1>
                  <Top3User
                    medalEmoji="🥇"
                    userId={top3Users[0]?.nickname}
                    userProfileImage={top3Users[0]?.imageUrl}
                    point={top3Users[0]?.point}
                  />
                </S.Top1>
              )}
              {top3Users.length > 2 && (
                <S.Top2>
                  <Top3User
                    medalEmoji="🥉"
                    userId={top3Users[2]?.nickname}
                    userProfileImage={top3Users[2]?.imageUrl}
                    point={top3Users[2]?.point}
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
                setIsSearching(true); // 검색 상태로 설정
                const results = allUsers.filter(user =>
                  user.nickname.toLowerCase().includes(nickname.toLowerCase()),
                );
                setFilteredUsers(results);
              }}
              onClearSearch={() => {
                setIsSearching(false); // 검색 상태 해제
                setFilteredUsers(allUsers);
              }} // 검색어가 비워지면 전체 리스트를 복원
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
                {currentUser && !isSearching && (
                  <RankingRow
                    key={currentUser.userId}
                    user={currentUser}
                    isCurrentUser={true}
                    rank={
                      <>
                        <span style={{ fontSize: '14px' }}>마이랭킹</span>
                        <br />
                        {currentUser.ranking}
                      </>
                    }
                  />
                )}
                {filteredUsers.map(user => (
                  <RankingRow
                    key={user.userId}
                    user={user}
                    rank={`${user.ranking}`}
                    isCurrentUser={false}
                  />
                ))}
              </S.TableBody>
            </S.RankingTable>
          </S.RankingContainer>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default RankingPage;
