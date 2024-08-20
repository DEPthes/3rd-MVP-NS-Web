import React, { useCallback, useEffect, useState } from 'react';
import * as S from '@styles/mypost/MyPostPageStyle';
import { getBoard } from '@/apis/user/getBoard';
import { getSearch } from '@/apis/user/getSearch';
import { TPost, TMyPostSortType } from '../types/mypost/post';
import PostList from '../components/mypost/PostList';
import SearchInput from '../components/mypost/SearchInput';
import Header from '../components/mypost/Header';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import { TPagination } from '@/types/pagination';
import Pagination from '@/components/pagination/Pagination';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import EmptyMessage from '@/components/mypost/EmptyMessage';
import CheckBoxDefault from '@/assets/icons/CheckBoxDefault.svg?react';
import CheckBoxVariant from '@/assets/icons/CheckBoxVariant.svg?react';
import Loading from '@/components/layout/Loading';
import EmptyCharacter from '@assets/images/EmptyCharacterN.svg?react';

const MyPostsPage: React.FC = () => {
  const [postList, setPostList] = useState<TPost[]>([]);
  const [filteredPostList, setFilteredPostList] = useState<TPost[]>([]);
  const [sortType, setSortType] = useState<TMyPostSortType>('date');
  const [excludeTemporary, setExcludeTemporary] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState(1);
  const [pageInfo, setPageInfo] = useState<TPagination | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const handleUnauthorized = useHandleUnauthorized();

  // 게시글 데이터를 가져오는 함수
  const fetchPosts = useCallback(async () => {
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
      setIsLoading(false);
    }
  }, [excludeTemporary, sortType, pageNum, handleUnauthorized]);

  // 검색 결과를 가져오는 함수
  const fetchSearchResults = useCallback(
    async (query: string) => {
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
        setIsLoading(false);
      }
    },
    [excludeTemporary, sortType, pageNum, handleUnauthorized],
  );

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery); // 검색어가 있으면 getSearch 호출
    } else {
      fetchPosts(); // 검색어가 없으면 getBoard 호출
    }
  }, [searchQuery, fetchPosts, fetchSearchResults]);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    setPageNum(1); // 검색 시 페이지를 1로 설정
  };

  const { isMobileOrTablet } = useNSMediaQuery();

  return (
    <S.Container>
      <SearchInput
        onSearchResults={handleSearchQueryChange}
        searchQuery={searchQuery}
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
          <S.CheckboxContainer
            onClick={() => setExcludeTemporary(!excludeTemporary)}
          >
            {excludeTemporary ? <CheckBoxVariant /> : <CheckBoxDefault />}
            <p>임시 저장된 글 제외</p>
          </S.CheckboxContainer>
        }
      />
      {isLoading ? (
        <Loading />
      ) : (
        <S.EmptyState>
          {filteredPostList.length > 0 ? (
            <PostList posts={filteredPostList} />
          ) : postList.length === 0 ? (
            <EmptyMessage
              isNCharacter={true}
              buttonText="N력 키우러 가기"
              messageText={
                isMobileOrTablet
                  ? '나였다면으로 N력을 키워보세요!'
                  : '당신의 N력이 궁금하시지 않나요?\n나였다면으로 N력 키우기를 시작해보세요!'
              }
              navigateTo="/scenario"
              smallfont={false}
            />
          ) : (
            <S.NoneList>
              <EmptyCharacter />
              <p>검색 결과가 없어요</p>
            </S.NoneList>
          )}
        </S.EmptyState>
      )}
      {pageInfo && (
        <Pagination
          pageInfo={pageInfo}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      )}
    </S.Container>
  );
};

export default MyPostsPage;
