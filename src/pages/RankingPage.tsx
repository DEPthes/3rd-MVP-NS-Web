import React, { useState } from 'react';
import * as S from '@/styles/ranking/RankingPageStyle';
import Top3User from '../components/ranking/Top3User';
import SearchNicknameInput from '../components/ranking/SearchNicknameInput';
import { TUser, SortType } from '../types/ranking/user';
import { UserList } from '../data/userData';
import SortableUserList from '../components/ranking/SortableUserList';
import RankingRow from '../components/ranking/RankingRow';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';

const RankingPage: React.FC = () => {
  const [filteredUsers, setFilteredUsers] = useState<TUser[]>(UserList);
  const [sortedUsers, setSortedUsers] = useState<TUser[]>(UserList);
  const [sortType, setSortType] = useState<SortType>('total');

  const handleSearchResults = (results: TUser[]) => {
    setFilteredUsers(results); // 검색 결과를 상태에 저장하는 함수
  };
  const { isDesktop, isMobileOrTablet } = useNSMediaQuery();

  return (
    <S.Container>
      {/* 정렬 필터 링크를 표시 */}
      <S.FilterLinks>
        {['total', 'daily', 'weekly', 'monthly'].map((option, index) => (
          // 각 정렬 옵션을 위한 필터링 링크
          <React.Fragment key={option}>
            <S.FilterLink
              isSelected={sortType === option} // 현재 선택된 정렬 타입에 스타일 적용
              onClick={event => {
                event.preventDefault();
                setSortType(option as SortType); // 정렬 타입을 설정
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

      <S.Top3Container>
        <S.Top3Title>Top 3</S.Top3Title>

        {/* 사용자 정렬하고 결과 업데이트 */}
        <SortableUserList
          users={UserList}
          filter={sortType}
          onSorted={setSortedUsers}
        />
        {/* Top 3 유저 프로필 */}
        <S.Top3UserProfile>
          <S.Top2>
            <Top3User
              medalEmoji="🥈"
              userId={sortedUsers[1]?.userNickname}
              userProfileImage={sortedUsers[1]?.profileImg}
            />
          </S.Top2>
          <S.Top1>
            <Top3User
              medalEmoji="🥇"
              userId={sortedUsers[0]?.userNickname}
              userProfileImage={sortedUsers[0]?.profileImg}
            />
          </S.Top1>
          <S.Top2>
            <Top3User
              medalEmoji="🥉"
              userId={sortedUsers[2]?.userNickname}
              userProfileImage={sortedUsers[2]?.profileImg}
            />
          </S.Top2>
        </S.Top3UserProfile>
        {isDesktop && (
          <S.Podium src="/src/assets/images/podium.svg" alt="podiumimg" />
        )}
        {isMobileOrTablet && (
          <S.Podium src="/src/assets/images/smallpodium.svg" />
        )}
      </S.Top3Container>
      <S.SearchContainer>
        <SearchNicknameInput
          users={sortedUsers} // 정렬된 사용자 목록에서 검색
          onSearchResults={handleSearchResults} // 검색 결과를 처리
        />
      </S.SearchContainer>

      {/* 순위 테이블 */}
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
              <RankingRow
                key={user.userId}
                user={user}
                rank={sortedUsers.findIndex(u => u.userId === user.userId) + 1} // 정렬된 사용자 목록에서의 순위
                sortType={sortType} // 현재 정렬 타입에 따라 점수 표시
              />
            ))}
          </S.TableBody>
        </S.RankingTable>
      </S.RankingContainer>
    </S.Container>
  );
};

export default RankingPage;
