import React, { useEffect, useState } from 'react';
import * as S from '@styles/mypost/MyPostPageStyle';
import { getBoard } from '@/apis/user/getBoard';
import { getSearch } from '@/apis/user/getSearch';
import { TPost, TMyPostSortType } from '../types/mypost/post';
import EmptyMessage from '../components/mypost/EmptyMessage';
import PostList from '../components/mypost/PostList';
import SearchInput from '../components/mypost/SearchInput';
import Header from '../components/mypost/Header';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import { TPagination } from '@/types/pagination';
import Pagination from '@/components/pagination/Pagination';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';

const MyPostsPage: React.FC = () => {
  const [postList, setPostList] = useState<TPost[]>([]);
  const [filteredPostList, setFilteredPostList] = useState<TPost[]>([]);
  const [sortType, setSortType] = useState<TMyPostSortType>('date');
  const [excludeTemporary, setExcludeTemporary] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState(1);
  const [pageInfo, setPageInfo] = useState<TPagination | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(''); // 검색어 상태
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false); // 데이터 로딩 상태
  const handleUnauthorized = useHandleUnauthorized();

  // 게시글 데이터를 가져오는 함수
  const fetchPosts = async () => {
    setIsDataLoaded(false);
    try {
      const { posts, pageInfo } = await getBoard(
        excludeTemporary,
        sortType,
        pageNum,
        handleUnauthorized,
      );
      setPostList(posts);
      setFilteredPostList(posts);
      setPageInfo(pageInfo);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsDataLoaded(true);
    }
  };

  // 검색 결과를 가져오는 함수
  const fetchSearchResults = async (query: string) => {
    setIsDataLoaded(false);
    try {
      const { posts, pageInfo } = await getSearch(
        query,
        excludeTemporary,
        sortType,
        pageNum,
        handleUnauthorized,
      );
      setFilteredPostList(posts);
      setPageInfo(pageInfo);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsDataLoaded(true);
    }
  };

  // 페이지 번호, 정렬 순서, 임시 저장 제외 여부가 변경될 때 데이터를 새로 가져옴
  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery); // 검색어가 있으면 getSearch 호출
    } else {
      fetchPosts(); // 검색어가 없으면 getBoard 호출
    }
  }, [excludeTemporary, sortType, pageNum, searchQuery]);

  // 검색어가 변경될 때 호출되는 함수
  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    setPageNum(1); // 검색 시 페이지를 1로 설정
  };

  const { isMobileOrTablet, isMobile } = useNSMediaQuery();

  return (
    <S.Container>
      <SearchInput
        onSearchResults={handleSearchQueryChange}
        searchQuery={searchQuery} // 현재 검색어를 전달
      />
      <Header<TMyPostSortType>
        title={isMobileOrTablet ? '내가 쓴 글' : '내가 쓴 글 목록'}
        sortType={sortType}
        setSortType={setSortType}
        sortOptions={[
          { label: '최신순', value: 'date' },
          { label: '좋아요순', value: 'likes' },
        ]}
        checkbox={
          <S.CheckboxContainer>
            <S.CustomCheckbox
              type="checkbox"
              id="excludeTemp"
              checked={excludeTemporary}
              onChange={() => setExcludeTemporary(!excludeTemporary)}
            />
            <label htmlFor="excludeTemp">임시 저장된 글 제외</label>
          </S.CheckboxContainer>
        }
      />
      {isDataLoaded ? (
        <S.EmptyState>
          {filteredPostList.length > 0 ? ( // 검색 결과가 있을 때만 리스트와 페이징 렌더링
            <>
              <PostList posts={filteredPostList} />
              {pageInfo && (
                <Pagination
                  pageInfo={pageInfo}
                  pageNum={pageNum}
                  setPageNum={setPageNum}
                />
              )}
            </>
          ) : postList.length === 0 ? ( // 작성한 포스트가 없을 때
            <EmptyMessage
              buttonText="N력 키우러 가기"
              messageText={
                isMobile
                  ? '나였다면으로 N력을 키워보세요!'
                  : '당신의 N력이 궁금하시지 않나요?\n나였다면으로 N력 키우기를 시작해보세요!'
              }
              navigateTo="/scenario"
              smallfont={false}
            />
          ) : null}
        </S.EmptyState>
      ) : null}{' '}
    </S.Container>
  );
};

export default MyPostsPage;
