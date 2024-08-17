import React from 'react';
import TopicItem from './TopicItem';
import { TTopic } from '@/types/likedtopic/topic';

type TopicListProps = {
  topics: TTopic[];
};

const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  return (
    <div>
      {topics.map(topic => (
        <TopicItem
          key={topic.themeId}
          themeId={topic.themeId}
          theme={topic.theme}
          date={topic.date} // 주제 발행일
          countBoard={topic.countBoard} // 게시글 수
          countLike={topic.countLike} // 주제 좋아요 수
        />
      ))}
    </div>
  );
};

export default TopicList;
