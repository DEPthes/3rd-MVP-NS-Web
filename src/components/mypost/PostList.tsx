import React from 'react';
import PostItem from './PostItem';
import { TPost, TTopic } from '../../types/mypost/post';
//정렬된 포스트들을 화면에 렌더링하는 컴포넌트.
//포스트들의 배열을 받아서 각 포스트를 개별 PostItem 컴포넌트로 전달

type PostListProps = {
  posts: TPost[]; // 렌더링할 포스트들의 배열
  loggedInUserId: string; // 현재 로그인된 사용자의 ID
  topics: TTopic[]; // 모든 주제 데이터
};

// PostList 컴포넌트 정의
const PostList: React.FC<PostListProps> = ({
  posts,
  loggedInUserId,
  topics,
}) => {
  return (
    <div>
      {posts.map(post => {
        // 각 포스트가 속한 주제를 찾음
        const topic =
          topics.find(t => t.posts.some(p => p.postId === post.postId))
            ?.topic || 'Unknown Topic';

        // PostItem 컴포넌트를 사용하여 각 포스트를 렌더링
        return (
          <PostItem
            key={post.postId}
            topic={topic}
            date={post.date}
            title={post.title}
            likes={post.likes}
            isTemporary={post.isTemporary}
            likedUserId={post.postLikedUserId}
            loggedInUserId={loggedInUserId}
          />
        );
      })}
    </div>
  );
};

export default PostList;
