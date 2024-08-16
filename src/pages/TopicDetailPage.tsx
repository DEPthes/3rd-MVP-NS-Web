import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/TopicDetailPageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';
import { TThemeDetailResponse } from '@/types/mytype';
import Main5Heart from '@assets/icons/Main5Heart.svg?react';
import Main5HeartFill from '@assets/icons/Main5HeartFill.svg?react';
import { getTheme } from '@/apis/theme/getTheme';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';

const TopicDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [topic, setTopic] = useState<TThemeDetailResponse | null>(null);
	const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});
	const [sortType, setSortType] = useState<'date' | 'likeCount'>('date');
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const navigate = useNavigate();
	const handleUnauthorized = useHandleUnauthorized();

	useEffect(() => {
		const fetchTopic = async () => {
			if (id) {
				const response = await getTheme(
					{ themeId: parseInt(id), page: 0, size: 10, sortBy: sortType },
					handleUnauthorized
				);
				if (response) {
					setTopic(response);
					setIsLiked(response.likedTheme);
				} else {
					console.error('주제 가져오기 에러');
				}
			}
		};

		fetchTopic();
	}, [id, sortType, handleUnauthorized]);

	const handleWriteClick = () => {
		navigate('/senario-detail');
	};

	const handleLikeClick = (postId: number) => {
		setLikedPosts((prev) => ({
			...prev,
			[postId]: !prev[postId],
		}));
	};

	const handleSort = (type: 'date' | 'likeCount') => {
		setSortType(type);
	};

	const handleTitleClick = (postId: number) => {
		navigate(`/select-title-detail/${postId}`);
	};

	const handleTopicLikeClick = () => {//이부분 반영이 안되어서 코드 수정 필요!!
		// 좋아요 상태 변경
		setIsLiked((prevIsLiked) => {
			const newIsLiked = !prevIsLiked;

			// 주제의 좋아요 개수 변경
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

			return newIsLiked;
		});
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

	return (
		<S.Container>
			<S.TopicBox>
				<S.Header>주제</S.Header>
				<S.TopicHeader>{topic.content}</S.TopicHeader>
				<S.InfoContainer>
					<S.PublishDate>발행일: {new Date(topic.date).toLocaleDateString()} | </S.PublishDate>
					<S.LikeContainer onClick={handleTopicLikeClick}>
						{isLiked ? <Main5HeartFill title="Liked" /> : <Main5Heart title="Like" />}
						<S.TopicLikeCount>{isLiked ? topic.likeCount + 1 : topic.likeCount}</S.TopicLikeCount>
					</S.LikeContainer>
				</S.InfoContainer>
				<S.WriteButton onClick={handleWriteClick}>글쓰기</S.WriteButton>
			</S.TopicBox>
			<S.ListHeader>
				<S.ListTitle>게시글 목록</S.ListTitle>
				<S.SortOptions>
					<S.SortOption onClick={() => handleSort('date')} isSelected={sortType === 'date'}>
						최신순  |
					</S.SortOption>
					<S.SortOption onClick={() => handleSort('likeCount')} isSelected={sortType === 'likeCount'}>
						좋아요순
					</S.SortOption>
				</S.SortOptions>
			</S.ListHeader>
			<S.PostList>
				{sortedPosts.map((post) => (
					<S.PostBox key={post.boardId}>
						<S.PostTitle onClick={() => handleTitleClick(post.boardId)}>{post.title}</S.PostTitle>
						<S.PostContent>{post.content}</S.PostContent>
						<S.LikeButton onClick={() => handleLikeClick(post.boardId)}>
							<img src={likedPosts[post.boardId] ? BlueHeartFill : BlueHeart} alt="Like" />
							<S.PostLikeCount>{likedPosts[post.boardId] ? post.likeCount + 1 : post.likeCount}</S.PostLikeCount>
						</S.LikeButton>
						<S.PostInfo>
							{post.nickname} | {new Date(post.date).toLocaleDateString()}
						</S.PostInfo>
					</S.PostBox>
				))}
			</S.PostList>
		</S.Container>
	);
};

export default TopicDetailPage;










