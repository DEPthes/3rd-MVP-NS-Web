import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/TopicDetailPageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';
import Main5Heart from '@assets/icons/Main5Heart.svg?react';
import Main5HeartFill from '@assets/icons/Main5HeartFill.svg?react';
import { TThemeDetailResponse } from '@/types/mytype';
import { getTheme } from '@/apis/theme/getTheme';
import { postLike } from '@/apis/theme/postLike';
import { boardLike } from '@/apis/board/boardLike';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import Pagination from '@/components/pagination/Pagination';
import { TPagination } from '@/types/pagination';
import EmptyCharacter from '@assets/images/empty_character.svg?react';

const TopicDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [topic, setTopic] = useState<TThemeDetailResponse | null>(null);
  const [sortType, setSortType] = useState<'date' | 'likeCount'>('date');
  const [pageInfo, setPageInfo] = useState<TPagination | null>(null);
  const [pageNum, setPageNum] = useState(1); // 기본 값 1
  const navigate = useNavigate();
  const handleUnauthorized = useHandleUnauthorized();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopic = async () => {
      setLoading(true);
      try {
        if (id) {
          const response = await getTheme(
            {
              themeId: parseInt(id),
              page: pageNum,
              size: 5,
              sortBy: sortType,
            },
            handleUnauthorized,
          );
          if (response) {
            setTopic(response);
            setPageInfo(response.pageInfo);
          } else {
            console.error('주제 가져오기 에러');
          }
        }
      } catch (error) {
        console.error('API 호출 중 에러:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [id, sortType, pageNum, handleUnauthorized]);

  const handleTopicLikeClick = async (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 전파를 막음

    if (!topic) return;

    try {
      const response = await postLike(topic.themeId, handleUnauthorized);
      if (response) {
        setTopic(prevTopic => {
          if (prevTopic) {
            return {
              ...prevTopic,
              likeCount: topic.likedTheme
                ? topic.likeCount - 1
                : topic.likeCount + 1,
              likedTheme: !topic.likedTheme,
            };
          }
          return prevTopic;
        });
      } else {
        console.error('좋아요 처리 실패');
      }
    } catch (error) {
      console.error('좋아요 요청 중 오류 발생:', error);
    }
  };

  const handleWriteClick = () => {
    navigate(`/scenario/write/${id}`);
  };

  const handleSort = (type: 'date' | 'likeCount') => {
    setSortType(type);
  };

  const handleTitleClick = (postId: number) => {
    navigate(`/scenario/${postId}`);
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const handleLikeClick = async (postId: number, e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      // 좋아요 API 호출
      const response = await boardLike(postId, handleUnauthorized);

      if (response) {
        // API 응답에 따라 상태 업데이트
        setTopic(prevTopic => {
          if (prevTopic) {
            return {
              ...prevTopic,
              boards: prevTopic.boards.map(board =>
                board.boardId === postId
                  ? {
                      ...board,
                      likeCount: board.likedBoard
                        ? board.likeCount - 1
                        : board.likeCount + 1,
                      likedBoard: !board.likedBoard,
                    }
                  : board,
              ),
            };
          }
          return prevTopic;
        });
      }
    } catch (error) {
      console.error('좋아요 요청 중 오류 발생:', error);
    }
  };

  const sortedPosts =
    topic &&
    [...topic.boards].sort((a, b) => {
      if (sortType === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortType === 'likeCount') {
        return b.likeCount - a.likeCount;
      }
      return 0;
    });

  const truncateContent = (content: string) => {
    const maxLength = 50;
    if (content.length > maxLength) {
      return (
        <>
          {content.slice(0, maxLength)}
          <span style={{ color: 'var(--Gray1)' }}>...더보기</span>
        </>
      );
    }
    return content;
  };

  return (
    <S.Container>
      <S.TopicBox>
        <S.Header>주제</S.Header>
        <S.TopicHeader>{topic?.content}</S.TopicHeader>
        <S.InfoContainer>
          <S.PublishDate>
            발행일 : {topic && new Date(topic.date).toLocaleDateString()}
          </S.PublishDate>
          <S.PublishDate>|</S.PublishDate>
          <S.LikeContainer onClick={handleTopicLikeClick}>
            {topic?.likedTheme ? (
              <Main5HeartFill title="Liked" />
            ) : (
              <Main5Heart title="Like" />
            )}
            <S.TopicLikeCount>{topic?.likeCount}</S.TopicLikeCount>
          </S.LikeContainer>
        </S.InfoContainer>
        <S.WriteButton onClick={handleWriteClick}>글쓰기</S.WriteButton>
      </S.TopicBox>
      <S.ListHeader>
        <S.ListTitle>게시글 목록</S.ListTitle>
        <S.SortOptions>
          <S.SortOption
            onClick={() => handleSort('date')}
            $isSelected={sortType === 'date'}
          >
            최신순
          </S.SortOption>
          <S.Divider>|</S.Divider>
          <S.SortOption
            onClick={() => handleSort('likeCount')}
            $isSelected={sortType === 'likeCount'}
          >
            좋아요순
          </S.SortOption>
        </S.SortOptions>
      </S.ListHeader>
      {loading ? (
        <></>
      ) : !topic || sortedPosts?.length === 0 ? (
        <S.NoneList>
          <EmptyCharacter />
          <p>주제에 대한 글이 없어요</p>
        </S.NoneList>
      ) : (
        <S.PostList>
          {sortedPosts?.map(post => (
            <S.PostBox
              key={post.boardId}
              onClick={() => handleTitleClick(post.boardId)}
            >
              <S.LeftWrap>
                <S.PostTitle>{post.title}</S.PostTitle>
                <S.PostContent>{truncateContent(post.content)}</S.PostContent>
              </S.LeftWrap>
              <S.RightWrap>
                <S.LikeButton onClick={e => handleLikeClick(post.boardId, e)}>
                  <img
                    src={post.likedBoard ? BlueHeartFill : BlueHeart}
                    alt="Like"
                  />
                  <S.PostLikeCount>{post.likeCount}</S.PostLikeCount>
                </S.LikeButton>
                <S.PostInfo>
                  {post.nickname} | {new Date(post.date).toLocaleDateString()}
                </S.PostInfo>
              </S.RightWrap>
            </S.PostBox>
          ))}
        </S.PostList>
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

export default TopicDetailPage;
