import React, { useEffect, useState } from 'react';
import { TPost, SortType } from '../types/mypost/post';
import { dataList } from '../data/postData';
import EmptyMessage from '../components/mypost/EmptyMessage';
import SortablePostList from '../components/mypost/SortablePostList';
import SearchInput from '../components/mypost/SearchInput';
import Header from '../components/mypost/Header';
import * as S from '@styles/mypost/MyPostPageStyle';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';

const MyPostsPage: React.FC = () => {
  const [postList, setPostList] = useState<TPost[]>([]); // 내가 쓴 글 목록 상태 정의
  const [filteredPostList, setFilteredPostList] = useState<TPost[]>([]); // 필터링 된 글 목록 상태 정의
  const [sortType, setSortType] = useState<SortType>('date'); // 정렬 타입 상태 정의, 기본이 최신(작성)순
  const [excludeTemporary, setExcludeTemporary] = useState<boolean>(false); // 임시 저장 글 제외 여부 상태 정의(default는 해제)
  const loggedInUserId = 'user123'; // 현재 로그인된 아이디

  // 글 목록 데이터 상태 설정
  useEffect(() => {
    let filteredList = dataList
      .flatMap(topic => topic.posts)
      .filter(post => post.postUserId === loggedInUserId);

    if (excludeTemporary) {
      filteredList = filteredList.filter(post => !post.isTemporary);
    }

    setPostList(filteredList);
    setFilteredPostList(filteredList);
  }, [excludeTemporary, loggedInUserId]);

  // 검색어로 키워드 포함하는 글 필터링
  const filterFunction = (post: TPost, query: string): boolean => {
    const topic = dataList.find(topic =>
      topic.posts.some(p => p.postId === post.postId),
    );
    return (
      post.title.includes(query) ||
      (topic ? topic.topic.includes(query) : false)
    );
  };

  // 내가 쓴 글 페이지의 정렬 옵션
  const sortOptions: { label: string; value: SortType }[] = [
    { label: '최신순', value: 'date' },
    { label: '좋아요순', value: 'likes' },
  ];

  const { isMobileOrTablet } = useNSMediaQuery();

  return (
    <S.Container>
      <SearchInput<TPost>
        items={postList}
        onSearchResults={setFilteredPostList}
        filterFunction={filterFunction}
      />
      <Header
        title={isMobileOrTablet ? '내가 쓴 글' : '내가 쓴 글 목록'}
        sortType={sortType}
        setSortType={setSortType}
        sortOptions={sortOptions}
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
      <S.EmptyState>
        {postList.length === 0 ? (
          <EmptyMessage
            buttonText="N력 키우러 가기"
            messageText={`당신의 N력이 궁금하시지 않나요?\n나였다면으로 N력 키우기를 시작해보세요!`}
            navigateTo="/scenario"
          />
        ) : filteredPostList.length > 0 ? (
          <SortablePostList
            posts={filteredPostList}
            sortType={sortType}
            loggedInUserId={loggedInUserId}
            topics={dataList}
          />
        ) : null}
      </S.EmptyState>
    </S.Container>
  );
};

export default MyPostsPage;
