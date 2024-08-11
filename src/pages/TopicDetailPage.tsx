
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/TopicDetailPageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';
import { TPost, TTopic } from '@/types';
import Main5Heart from '@assets/icons/Main5Heart.svg?react';
import Main5HeartFill from '@assets/icons/Main5HeartFill.svg?react';

const TopicDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [topic, setTopic] = useState<TTopic | null>(null);
	const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});
	const [sortType, setSortType] = useState<string>('최신순');
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTopic = async () => {
			try {
				const response = await fetch('/dummyData.json');
				const data: TTopic[] = await response.json();
				const foundTopic = data.find((t: TTopic) => t.id === id);
				setTopic(foundTopic || null);
			} catch (error) {
				console.error('주제 가져오기 에러:', error);
			}
		};

		fetchTopic();
	}, [id]);

	const handleWriteClick = () => {
		navigate('/senario-detail');
	};

	const handleLikeClick = (postId: string) => {
		setLikedPosts((prev) => ({
			...prev,
			[postId]: !prev[postId],
		}));
	};

	const handleSort = (type: string) => {
		setSortType(type);
	};

	const handleTitleClick = (postId: string) => {
		navigate(`/select-title-detail/${postId}`);
	};

	const handleTopicLikeClick = () => {
		setIsLiked(!isLiked);
	};

	if (!topic) {
		return <div>로딩 중...</div>;
	}

	const posts = Array.isArray(topic.posts) ? topic.posts : [];

	const sortedPosts = [...posts].sort((a, b) => {
		if (sortType === '최신순') {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		} else if (sortType === '좋아요순') {
			return (b.likes + (likedPosts[b.id] ? 1 : 0)) - (a.likes + (likedPosts[a.id] ? 1 : 0));
		}
		return 0;
	});
	return (
		<S.Container>
			<S.TopicBox>
				<S.Header>주제</S.Header>
				<S.TopicHeader>{topic.title}</S.TopicHeader>
				<S.InfoContainer>
					<S.PublishDate>발행일: {new Date(topic.publishDate).toLocaleDateString()} | </S.PublishDate>
					<S.LikeContainer onClick={handleTopicLikeClick}>
						{isLiked ? <Main5HeartFill title="Liked" /> : <Main5Heart title="Like" />}
						<S.LikeCount>{isLiked ? topic.likes + 1 : topic.likes}</S.LikeCount>
					</S.LikeContainer>
				</S.InfoContainer>
				<S.WriteButton onClick={handleWriteClick}>글쓰기</S.WriteButton>
			</S.TopicBox>
			<S.ListHeader>
				<S.ListTitle>게시글 목록</S.ListTitle>
				<S.SortOptions>
					<S.SortOption onClick={() => handleSort('최신순')}>최신순  |</S.SortOption>
					<S.SortOption onClick={() => handleSort('좋아요순')}>좋아요순</S.SortOption>
				</S.SortOptions>
			</S.ListHeader>
			<S.PostList>
				{sortedPosts.map((post: TPost) => (
					<S.PostBox key={post.id}>
						<S.PostTitle onClick={() => handleTitleClick(post.id)}>{post.title}</S.PostTitle>
						<S.PostContent>{post.text}</S.PostContent>
						<S.LikeButton onClick={() => handleLikeClick(post.id)}>
							<img src={likedPosts[post.id] ? BlueHeartFill : BlueHeart} alt="Like" />
							<S.LikeCount>{likedPosts[post.id] ? post.likes + 1 : post.likes}</S.LikeCount>
						</S.LikeButton>
						<S.PostInfo>
							{post.author} | {new Date(post.date).toLocaleDateString()}
						</S.PostInfo>
					</S.PostBox>
				))}
			</S.PostList>
		</S.Container>
	);
};

export default TopicDetailPage;








