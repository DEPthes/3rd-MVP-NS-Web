import React from 'react';
import PostList from './PostList';
import { TPost, TTopic, SortType } from '../../types/mypost/post';
//  포스트 리스트를 주어진 정렬 타입에 따라 정렬하고, 정렬된 포스트 리스트를 PostList 컴포넌트에 전달

type SortablePostListProps = {
  posts: TPost[];
  sortType: SortType;
  loggedInUserId: string;
  topics: TTopic[];
};

const SortablePostList: React.FC<SortablePostListProps> = ({
  posts,
  sortType,
  loggedInUserId,
  topics,
}) => {
  // 포스트 리스트를 정렬하는 함수
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortType === 'date') {
      // 게시일 기준 내림차순 정렬
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortType === 'likedDate') {
      // 좋아요를 누른 날짜 기준 내림차순 정렬
      const aDate = new Date(
        //로그인된 사용자의 인덱스 위치를 찾아 해당 인덱스의 날짜를 가져옴. 없으면 작성된 날짜 값 사용.
        // postLikedUserId 결과가 -1 이나  undefined일 경우 0을 반환
        a.postLikedDate?.[a.postLikedUserId?.indexOf(loggedInUserId) || 0] ||
          a.date,
      ).getTime();
      const bDate = new Date(
        b.postLikedDate?.[b.postLikedUserId?.indexOf(loggedInUserId) || 0] ||
          b.date,
      ).getTime();
      return bDate - aDate;
    } else if (sortType === 'likes') {
      // 좋아요 수 기준 내림차순 정렬
      return (b.likes || 0) - (a.likes || 0);
    } else if (sortType === 'postCount') {
      // 게시글 수 기준 정렬
      return 0;
    } else if (sortType === 'topicDate') {
      // 주제 게시일 기준 정렬
      return 0;
    } else {
      return 0;
    }
  });

  return (
    <PostList
      posts={sortedPosts} // 정렬된 포스트 리스트 전달
      loggedInUserId={loggedInUserId} // 로그인된 사용자 ID 전달
      topics={topics} // 모든 주제 데이터 전달
    />
  );
};

export default SortablePostList;
