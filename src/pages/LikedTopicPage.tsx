import React, { useEffect, useState } from 'react';
import { TTopic, TToicSortType } from '@/types/likedtopic/topic';
import EmptyMessage from '../components/mypost/EmptyMessage';
import SearchInput from '../components/mypost/SearchInput';
import Header from '../components/mypost/Header';
import TopicList from '../components/likedtopic/TopicList';
import * as S from '@styles/mypost/MyPostPageStyle';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import { getLikeTheme } from '@/apis/user/getLikeTheme';
import { getLikeThemeSearch } from '@/apis/user/getLikeThemeSearch';
import { TPagination } from '@/types/pagination';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import Pagination from '@/components/pagination/Pagination';

const LikedTopicPage: React.FC = () => {
  const [topics, setTopics] = useState<TTopic[]>([]); // 주제 목록
  const [filteredTopics, setFilteredTopics] = useState<TTopic[]>([]); // 필터링된 주제 목록
  const [sortType, setSortType] = useState<TToicSortType>('currentLike'); // 정렬 타입 상태, 기본이 좋아요 누른 순
  const [pageNum, setPageNum] = useState(1); // 현재 페이지 번호
  const [pageInfo, setPageInfo] = useState<TPagination | null>(null); // 페이지 정보
  const [searchQuery, setSearchQuery] = useState<string>(''); // 검색어 상태 추가
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false); // 데이터 로딩 상태

  const handleUnauthorized = useHandleUnauthorized();
  const { isMobileOrTablet } = useNSMediaQuery();

  // 좋아요 누른 주제 데이터를 가져오는 함수
  const fetchLikedTopics = async () => {
    setIsDataLoaded(false);
    try {
      const { topics, pageInfo } = await getLikeTheme(
        sortType,
        pageNum,
        handleUnauthorized,
      );
      setTopics(topics);
      setFilteredTopics(topics);
      setPageInfo(pageInfo);
    } catch (error) {
      console.error('Error fetching liked topics:', error);
    } finally {
      setIsDataLoaded(true);
    }
  };

  // 검색 결과를 가져오는 함수
  const fetchSearchResults = async (query: string) => {
    setIsDataLoaded(false);
    try {
      const { topics, pageInfo } = await getLikeThemeSearch(
        query,
        sortType,
        pageNum,
        handleUnauthorized,
      );
      setFilteredTopics(topics);
      setPageInfo(pageInfo);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsDataLoaded(true);
    }
  };

  // 페이지 번호, 정렬 순서가 변경될 때 데이터를 새로 가져옴
  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery); // 검색어가 있으면 getLikeThemeSearch 호출
    } else {
      fetchLikedTopics(); // 검색어가 없으면 getLikeTheme 호출
    }
  }, [sortType, pageNum, searchQuery]);

  // 검색어가 변경될 때 호출되는 함수
  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    setPageNum(1); // 검색 시 페이지를 1로 설정
  };

  // 좋아요 누른 주제 페이지의 정렬 옵션
  const sortOptions: { label: string; value: TToicSortType }[] = [
    { label: '좋아요 누른 순', value: 'currentLike' },
    { label: '좋아요 많은 순', value: 'like' },
    { label: '게시글 많은 순', value: 'board' },
    { label: '최신 순', value: 'date' },
  ];

  return (
    <S.Container>
      <SearchInput
        onSearchResults={handleSearchQueryChange}
        searchQuery={searchQuery} // 현재 검색어를 전달
      />
      <Header
        title={isMobileOrTablet ? '좋아요 누른 주제' : '좋아요 누른 주제 목록'}
        sortType={sortType}
        setSortType={setSortType}
        sortOptions={sortOptions}
      />
      {isDataLoaded ? (
        <S.EmptyState>
          {topics.length === 0 ? (
            <EmptyMessage
              buttonText="주제 보러 가기"
              messageText={`N력을 한껏 키워 줄 주제들이 당신을 기다리고 있어요!`}
              navigateTo="/scenario/topic"
              smallfont={true}
            />
          ) : filteredTopics.length > 0 ? (
            <>
              <TopicList topics={filteredTopics} />
              {pageInfo && (
                <Pagination
                  pageInfo={pageInfo}
                  pageNum={pageNum}
                  setPageNum={setPageNum}
                />
              )}
            </>
          ) : null}
        </S.EmptyState>
      ) : null}{' '}
      {/* 데이터 로딩 중에는 아무것도 렌더링하지 않음 */}
    </S.Container>
  );
};

export default LikedTopicPage;
