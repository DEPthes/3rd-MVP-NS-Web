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

const TopicDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [topic, setTopic] = useState<TThemeDetailResponse | null>(null);
	const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});
	const [sortType, setSortType] = useState<'date' | 'likeCount'>('date');
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [pageInfo, setPageInfo] = useState<TThemeDetailResponse['pageInfo'] | null>(null);
	const [pageNum, setPageNum] = useState(0); // 기본 값 0
	const navigate = useNavigate();
	const handleUnauthorized = useHandleUnauthorized();

	useEffect(() => {
		const fetchTopic = async () => {
			if (id) {
				const response = await getTheme(
					{ themeId: parseInt(id), page: pageNum + 1, size: 2, sortBy: sortType },
					handleUnauthorized
				);
				if (response) {
					setTopic(response);
					setPageInfo(response.pageInfo);
					setIsLiked(response.likedTheme);
				} else {
					console.error('주제 가져오기 에러');
				}
			}
		};

		fetchTopic();
	}, [id, sortType, pageNum, handleUnauthorized]);

	const handleTopicLikeClick = async (e: React.MouseEvent) => {
		e.stopPropagation(); // 이벤트 전파를 막음

		if (!topic || !topic.themeId) return;

		try {
			const response = await postLike(topic.themeId, handleUnauthorized);
			if (response) {
				const newIsLiked = response.liked;

				setIsLiked(newIsLiked);

				setTopic((prevTopic) => {
					if (prevTopic) {
						const updatedLikeCount = newIsLiked
							? prevTopic.likeCount + 1
							: prevTopic.likeCount - 1;

						return {
							...prevTopic,
							likeCount: updatedLikeCount,
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
		navigate('/scenario/write');
	};

	const handleSort = (type: 'date' | 'likeCount') => {
		setSortType(type);
	};

	const handleTitleClick = (postId: number) => {
		navigate(`/scenario/${postId}`);
	};

	const handleLikeClick = async (postId: number, e: React.MouseEvent) => {
		e.stopPropagation();

		try {
			// 좋아요 API 호출
			const response = await boardLike(postId, handleUnauthorized);

			if (response) {
				// API 응답에 따라 상태 업데이트
				setLikedPosts((prev) => ({
					...prev,
					[postId]: !prev[postId], // 좋아요 상태 토글
				}));

				// 서버 응답에 따라 likeCount 업데이트
				setTopic((prevTopic) => {
					if (prevTopic) {
						return {
							...prevTopic,
							boards: prevTopic.boards.map((board) =>
								board.boardId === postId
									? {
										...board,
										likeCount: likedPosts[postId]
											? board.likeCount - 1
											: board.likeCount + 1,
									}
									: board
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

	if (!topic) {
		return <div>로딩 중...</div>;
	}

	const sortedPosts = [...topic.boards].sort((a, b) => {
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
				<S.TopicHeader>{topic.content}</S.TopicHeader>
				<S.InfoContainer>
					<S.PublishDate>발행일: {new Date(topic.date).toLocaleDateString()} | </S.PublishDate>
					<S.LikeContainer onClick={handleTopicLikeClick} >
						{isLiked ? <Main5HeartFill title="Liked" /> : <Main5Heart title="Like" />}
						<S.TopicLikeCount>{topic.likeCount}</S.TopicLikeCount>
					</S.LikeContainer>
				</S.InfoContainer>
				<S.WriteButton onClick={handleWriteClick}>글쓰기</S.WriteButton>
			</S.TopicBox>
			<S.ListHeader>
				<S.ListTitle>게시글 목록</S.ListTitle>
				<S.SortOptions>
					<S.SortOption onClick={() => handleSort('date')} isSelected={sortType === 'date'}>
						최신순
					</S.SortOption>
					<S.Divider>|</S.Divider> {/* Separate divider for | */}
					<S.SortOption onClick={() => handleSort('likeCount')} isSelected={sortType === 'likeCount'}>
						좋아요순
					</S.SortOption>
				</S.SortOptions>
			</S.ListHeader>
			<S.PostList>
				{sortedPosts.map((post) => (
					<S.PostBox key={post.boardId} onClick={() => handleTitleClick(post.boardId)}>
						<S.PostTitle>{post.title}</S.PostTitle>
						<S.PostContent>{truncateContent(post.content)}</S.PostContent>
						<S.LikeButton onClick={(e) => handleLikeClick(post.boardId, e)}>
							<img src={likedPosts[post.boardId] ? BlueHeartFill : BlueHeart} alt="Like" />
							<S.PostLikeCount>{likedPosts[post.boardId] ? post.likeCount + 1 : post.likeCount}</S.PostLikeCount>
						</S.LikeButton>
						<S.PostInfo>
							{post.nickname} | {new Date(post.date).toLocaleDateString()}
						</S.PostInfo>
					</S.PostBox>
				))}
			</S.PostList>
			{/* 페이징 컴포넌트 */}
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



