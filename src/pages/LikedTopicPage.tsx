import React, { useEffect, useState } from 'react';
import { TTopic, SortType } from '../types/mypost/post';
import { dataList } from '../data/postData';
import EmptyMessage from '../components/mypost/EmptyMessage';
import SearchInput from '../components/mypost/SearchInput';
import Header from '../components/mypost/Header';
import SortableTopicList from '../components/likedtopic/SortableTopicList';
import * as S from '@styles/mypost/MyPostPageStyle';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';

const LikedTopicPage: React.FC = () => {
  const [topics, setTopics] = useState<TTopic[]>(dataList); // 주제 목록
  const [filteredTopics, setFilteredTopics] = useState<TTopic[]>(dataList); // 필터링된 주제 목록
  const [sortType, setSortType] = useState<SortType>('likedDate'); // 정렬 타입 상태, 기본이 좋아요 누른 날짜순
  const loggedInUserId = 'user13';

  useEffect(() => {
    // 사용자가 좋아요 누른 주제 필터링
    const likedTopics = dataList.filter(topic =>
      topic.topicLikedUserId.includes(loggedInUserId),
    );
    // 필터링된 주제 목록 상태 업데이트
    setTopics(likedTopics);
    setFilteredTopics(likedTopics);
  }, [loggedInUserId]);

  // 주제 목록에서 검색어를 포함하는 주제 필터링
  const filterFunction = (item: TTopic, query: string): boolean => {
    return item.topic.includes(query);
  };

  // 좋아요 누른 주제 페이지의 정렬 옵션
  const sortOptions: { label: string; value: SortType }[] = [
    { label: '좋아요 누른 날', value: 'likedDate' },
    { label: '주제좋아요 수', value: 'topicLikes' },
    { label: '게시글 수', value: 'postCount' },
    { label: '발행일', value: 'topicDate' },
  ];

  const { isMobileOrTablet } = useNSMediaQuery();

  return (
    <S.Container>
      <SearchInput
        items={topics}
        onSearchResults={setFilteredTopics}
        filterFunction={filterFunction}
      />
      <Header
        title={isMobileOrTablet ? '좋아요 누른 주제' : '좋아요 누른 주제 목록'}
        sortType={sortType}
        setSortType={setSortType}
        sortOptions={sortOptions}
      />
      <S.EmptyState>
        {topics.length === 0 ? (
          <EmptyMessage
            buttonText="주제 보러 가기"
            messageText={`N력을 한껏 키워 줄 주제들이 당신을 기다리고 있어요!`}
            navigateTo="/senario-detail"
            smallfont={true}
          />
        ) : filteredTopics.length > 0 ? (
          <SortableTopicList
            topics={filteredTopics}
            sortType={sortType}
            loggedInUserId={loggedInUserId}
          />
        ) : null}
      </S.EmptyState>
    </S.Container>
  );
};

export default LikedTopicPage;
