import React from 'react';
import { TTopic, SortType } from '../../types/mypost/post';
import TopicItem from '../likedtopic/TopicItem';

type SortableTopicListProps = {
  topics: TTopic[];
  sortType: SortType;
  loggedInUserId: string;
};

const SortableTopicList: React.FC<SortableTopicListProps> = ({
  topics,
  sortType,
  loggedInUserId,
}) => {
  const sortedTopics = [...topics].sort((a, b) => {
    if (sortType === 'likedDate') {
      // 좋아요 누른 날짜 기준 내림차순 정렬
      return (
        new Date(b.topicLikedDate[0]).getTime() -
        new Date(a.topicLikedDate[0]).getTime()
      );
    } else if (sortType === 'topicDate') {
      // 주제 발행일 기준 내림차순 정렬
      return (
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      );
    } else if (sortType === 'topicLikes') {
      // 좋아요 수 기준 내림차순 정렬
      return b.topicLikes - a.topicLikes;
    } else if (sortType === 'postCount') {
      // 게시글 수 기준 내림차순 정렬
      return b.posts.length - a.posts.length;
    } else {
      return 0;
    }
  });

  return (
    <div>
      {sortedTopics.map(topic => (
        <TopicItem
          key={topic.topicId}
          topic={topic.topic}
          publishDate={topic.publishDate}
          postCount={topic.posts.length}
          topicLikes={topic.topicLikes}
          liked={topic.topicLikedUserId.includes(loggedInUserId)}
        />
      ))}
    </div>
  );
};

export default SortableTopicList;
