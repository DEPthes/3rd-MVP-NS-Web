import React, { useCallback, useEffect, useState } from 'react';
import { TPost } from '../types/mypost/post';
import { TMyLikedPostSortType } from '@/types/mylikedpost/likedpost';
import EmptyMessage from '../components/mypost/EmptyMessage';
import PostList from '../components/mypost/PostList';
import SearchInput from '../components/mypost/SearchInput';
import Header from '../components/mypost/Header';
import Pagination from '../components/pagination/Pagination';
import * as S from '@styles/mypost/MyPostPageStyle';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import { getLikeBoard } from '@/apis/user/getLikeBoard';
import { getLikeBoardSearch } from '@/apis/user/getLikeBoardSearch';
import { TPagination } from '@/types/pagination';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import EmptyCharacter from '@assets/images/EmptyCharacter.svg?react';
import Loading from '@/components/layout/Loading';

const MyLikedPostPage: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<TPost[]>([]);
  const [filteredLikedPosts, setFilteredLikedPosts] = useState<TPost[]>([]);
  const [sortType, setSortType] = useState<TMyLikedPostSortType>('currentLike'); // 기본 정렬 기준
  const [pageNum, setPageNum] = useState(1);
  const [pageInfo, setPageInfo] = useState<TPagination | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(''); // 검색어 상태 추가
  const [isLoading, setIsLoading] = useState(true);
  const { isMobileOrTablet } = useNSMediaQuery();
  const handleUnauthorized = useHandleUnauthorized();

  // 좋아요 누른 게시글 데이터를 가져오는 함수
  const fetchLikedPosts = useCallback(async () => {
    try {
      const { posts, pageInfo } = await getLikeBoard(
        sortType,
        pageNum,
        handleUnauthorized,
      );
      setLikedPosts(posts);
      setFilteredLikedPosts(posts);
      setPageInfo(pageInfo);
    } catch (error) {
      console.error('Error fetching liked posts:', error);
    } finally {
      setIsLoading(false);
    }
  }, [handleUnauthorized, pageNum, sortType]);

  // 검색 결과를 가져오는 함수
  const fetchSearchResults = useCallback(
    async (query: string) => {
      try {
        const { posts, pageInfo } = await getLikeBoardSearch(
          query,
          sortType,
          pageNum,
          handleUnauthorized,
        );
        setFilteredLikedPosts(posts);
        setPageInfo(pageInfo);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [sortType, pageNum, handleUnauthorized],
  );

  // 페이지 번호, 정렬 순서가 변경될 때 데이터를 새로 가져옴
  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery); // 검색어가 있으면 getLikeBoardSearch 호출
    } else {
      fetchLikedPosts(); // 검색어 없으면 getLikeBoard 호출
    }
  }, [searchQuery, fetchLikedPosts, fetchSearchResults]);

  // 검색어가 변경될 때 호출
  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    setPageNum(1); // 검색 시 페이지를 1로 설정
  };

  // 정렬 옵션
  const sortOptions: { label: string; value: TMyLikedPostSortType }[] = [
    { label: '좋아요 누른 순', value: 'currentLike' },
    { label: '좋아요수', value: 'like' },
    { label: '작성일순', value: 'date' },
  ];

  return (
    <S.Container>
      <SearchInput
        onSearchResults={handleSearchQueryChange}
        searchQuery={searchQuery}
      />
      <Header
        title={isMobileOrTablet ? '좋아요 누른 글' : '내가 좋아요 누른 글 목록'}
        sortType={sortType}
        setSortType={setSortType}
        sortOptions={sortOptions}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <S.EmptyState>
          {likedPosts.length === 0 ? (
            <EmptyMessage
              isNCharacter={false}
              buttonText="주제 보러 가기"
              messageText={`당신처럼 N력이 뛰어난 사람들이 있어요!\n무궁무진한 N들의 글을 열람해보세요!`}
              navigateTo="/scenario/topic"
              smallfont={false}
            />
          ) : filteredLikedPosts.length > 0 ? (
            <PostList posts={filteredLikedPosts} />
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

export default MyLikedPostPage;
