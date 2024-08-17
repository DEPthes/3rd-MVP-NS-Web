import React from 'react';
import PostItem from './PostItem';
import { TPost } from '@/types/mypost/post';

type PostListProps = {
  posts: TPost[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <PostItem
          key={post.boardId} // 고유한 ID로 key 설정
          boardId={post.boardId} // boardId를 PostItem에 전달
          theme={post.theme}
          createdDate={post.createdDate} // createdDate를 사용
          title={post.title}
          countLike={post.countLike} // countLike를 사용
          published={post.published}
        />
      ))}
    </div>
  );
};

export default PostList;
