import React, { useEffect, useState } from 'react';
import { TPost, SortType } from '../types/mypost/post';
import { dataList } from '../data/postData';
import EmptyMessage from '../components/mypost/EmptyMessage';
import SortablePostList from '../components/mypost/SortablePostList';
import SearchInput from '../components/mypost/SearchInput';
import Header from '../components/mypost/Header';
import * as S from '@styles/mypost/MyPostPageStyle';

type LikedPostWithDetails = TPost & {
  likedDate: string[];
};
// 좋아요 누른 날짜 배열을 포함하는 타입

const MyLikedPostPage: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<LikedPostWithDetails[]>([]);
  // 좋아요 누른 글
  const [filteredLikedPosts, setFilteredLikedPosts] = useState<
    LikedPostWithDetails[]
  >([]);
  // 필터링된 좋아요 누른 글
  const [sortType, setSortType] = useState<SortType>('likedDate'); // 최근 관심순이 기본 정렬
  const loggedInUserId = 'user123';

  useEffect(() => {
    const likedPostsWithDetails: LikedPostWithDetails[] = dataList
      .flatMap(topic => topic.posts)
      .filter(post => post.postLikedUserId.includes(loggedInUserId))
      .map(post => ({
        ...post,
        likedDate: post.postLikedDate || [],
      }));

    setLikedPosts(likedPostsWithDetails);
    setFilteredLikedPosts(likedPostsWithDetails);
  }, [loggedInUserId]);

  // 검색어로 글 필터링
  const filterFunction = (
    post: LikedPostWithDetails,
    query: string,
  ): boolean => {
    const topic = dataList.find(topic =>
      topic.posts.some(p => p.postId === post.postId),
    );
    return (
      post.title.includes(query) ||
      (topic ? topic.topic.includes(query) : false)
    );
  };

  // 내가 좋아요 누른 글 페이지의 정렬 옵션
  const sortOptions: { label: string; value: SortType }[] = [
    { label: '좋아요 누른 순', value: 'likedDate' },
    { label: '좋아요 수', value: 'likes' },
    { label: '작성일순', value: 'date' },
  ];

  return (
    <S.Container>
      <S.Content>
        <SearchInput<LikedPostWithDetails>
          items={likedPosts}
          onSearchResults={setFilteredLikedPosts}
          filterFunction={filterFunction}
        />
        <Header
          title="내가 좋아요 누른 글 목록"
          sortType={sortType}
          setSortType={setSortType}
          sortOptions={sortOptions}
        />
        <S.EmptyState>
          {likedPosts.length === 0 ? (
            <EmptyMessage
              buttonText="N력 키우러 가기"
              messageText={`당신처럼 N력이 뛰어난 사람들이 있어요!\n무궁무진한 N들의 글을 열람해보세요!`}
              navigateTo="/scenario"
            />
          ) : filteredLikedPosts.length > 0 ? (
            <SortablePostList
              posts={filteredLikedPosts}
              sortType={sortType}
              loggedInUserId={loggedInUserId}
              topics={dataList}
            />
          ) : null}
        </S.EmptyState>
      </S.Content>
    </S.Container>
  );
};

export default MyLikedPostPage;
