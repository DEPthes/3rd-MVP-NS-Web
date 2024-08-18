import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/ScenarioTitlePageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg?react';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg?react';
import SearchIcon from '@assets/icons/Search.svg';
import { TTheme } from '@/types/mytype';
import { getList } from '@/apis/theme/getList';
import { getSearch } from '@/apis/theme/getSearch';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import Pagination from '@/components/pagination/Pagination';
import { postLike } from '@/apis/theme/postLike';
import { TPagination } from '@/types/pagination';

const ScenarioTitlePage: React.FC = () => {
  const [topics, setTopics] = useState<TTheme[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortType, setSortType] = useState<'date' | 'likeCount' | 'boardCount'>(
    'date',
  );
  const [pageInfo, setPageInfo] = useState<TPagination | null>(null);
  const [pageNum, setPageNum] = useState(1); // 기본 값 1

  const navigate = useNavigate();
  const handleUnauthorized = useHandleUnauthorized();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        let response;
        if (searchTerm.trim() === '') {
          response = await getList(pageNum, 5, sortType, handleUnauthorized);
        } else {
          response = await getSearch(
            searchTerm,
            pageNum,
            5,
            sortType,
            handleUnauthorized,
          );
        }

        if (
          response &&
          response.information &&
          response.information.themeList
        ) {
          setTopics(response.information.themeList); // themeList를 사용
          setPageInfo(response.information.pageInfo); // pageInfo 설정
        } else {
          console.error('주제 목록을 불러오지 못했습니다.', response);
        }
      } catch (error) {
        console.error('API 호출 중 에러:', error);
      }
    };

    fetchTopics();
  }, [searchTerm, sortType, pageNum, handleUnauthorized]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (type: string) => {
    setSortType(
      type === '최신순'
        ? 'date'
        : type === '좋아요순'
        ? 'likeCount'
        : 'boardCount',
    );
  };

  const handleLike = async (themeId: number) => {
    try {
      // 좋아요 API 호출
      const response = await postLike(themeId, handleUnauthorized);
      if (response) {
        // 좋아요 숫자를 업데이트
        setTopics(prevTopics =>
          prevTopics.map(topic =>
            topic.themeId === themeId
              ? {
                  ...topic,
                  likeCount: topic.likedTheme
                    ? topic.likeCount - 1
                    : topic.likeCount + 1,
                  likedTheme: !topic.likedTheme,
                }
              : topic,
          ),
        );
      } else {
        console.error('좋아요 처리 실패');
      }
    } catch (error) {
      console.error('좋아요 요청 중 오류 발생:', error);
    }
  };

  const handleTopicClick = (id: number) => {
    navigate(`/scenario/topic/${id}`);
  };

  return (
    <S.Container>
      <S.SearchBar>
        <S.SearchInput
          type="text"
          placeholder="검색할 키워드를 입력하세요"
          value={searchTerm}
          onChange={handleSearch}
        />
        <S.SearchIconWrapper>
          <img src={SearchIcon} alt="Search" />
        </S.SearchIconWrapper>
      </S.SearchBar>
      <S.Header>
        <S.Title>주제 목록</S.Title>
        <S.SortOptions>
          {['최신순', '좋아요순', '게시글순'].map((type, index) => (
            <React.Fragment key={type}>
              <S.SortOption
                onClick={() => handleSort(type)}
                $isSelected={
                  sortType ===
                  (type === '최신순'
                    ? 'date'
                    : type === '좋아요순'
                    ? 'likeCount'
                    : 'boardCount')
                }
              >
                {type}
              </S.SortOption>
              {index < 2 && <S.Divider>|</S.Divider>}
              {/* '|' 기호는 색상이 변하지 않도록 처리 */}
            </React.Fragment>
          ))}
        </S.SortOptions>
      </S.Header>
      <S.TopicBoxs>
        {topics && topics.length > 0 ? (
          topics.map(topic => (
            <S.TopicBox
              key={topic.themeId}
              onClick={() => handleTopicClick(topic.themeId)}
            >
              <S.LeftWrap>
                <S.TopicTitle>{topic.content}</S.TopicTitle>
                <S.TopicDate>발행일 : {topic.date}</S.TopicDate>
                <S.PostCount>게시글 {topic.boardCount}개</S.PostCount>
              </S.LeftWrap>
              <S.RightWrap>
                <S.LikeContainer
                  onClick={e => {
                    e.stopPropagation();
                    handleLike(topic.themeId);
                  }}
                >
                  {topic.likedTheme ? <BlueHeartFill /> : <BlueHeart />}
                  <S.LikeCount>{topic.likeCount}</S.LikeCount>
                </S.LikeContainer>
              </S.RightWrap>
            </S.TopicBox>
          ))
        ) : (
          <div>주제를 불러올 수 없습니다.</div>
        )}
      </S.TopicBoxs>
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

export default ScenarioTitlePage;
