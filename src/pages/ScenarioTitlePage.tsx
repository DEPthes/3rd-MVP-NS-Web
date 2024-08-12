import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/ScenarioTitlePageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg?react';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg?react';
import SearchIcon from '@assets/icons/Search.svg';
import { TTopic, TLikeState, TLikeDates } from '@/types';

const ScenarioTitlePage: React.FC = () => {
	const [topics, setTopics] = useState<TTopic[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [sortType, setSortType] = useState<string>('최신순 |');
	const [isLikedTopics, setIsLikedTopics] = useState<TLikeState>({});
	const [likeDates, setLikeDates] = useState<TLikeDates>({});
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTopics = async () => {
			try {
				const response = await fetch('/dummyData.json');
				const data = await response.json();
				setTopics(data);
			} catch (error) {
				console.error('주제 가져오기 에러:', error);
			}
		};

		fetchTopics();
	}, []);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleSort = (type: string) => {
		setSortType(type);
	};

	const handleLike = (topic: string) => {
		setIsLikedTopics(prev => ({
			...prev,
			[topic]: !prev[topic],
		}));
		setLikeDates(prev => ({
			...prev,
			[topic]: new Date(),
		}));
	};

	const handleTopicClick = (id: string) => {
		navigate(`/topic/${id}`);
	};

	const filteredTopics = topics
		.filter(topic => topic.title.includes(searchTerm))
		.sort((a, b) => {
			switch (sortType) {
				case '최신순 |':
					return (
						new Date(b.publishDate).getTime() -
						new Date(a.publishDate).getTime()
					);
				case '좋아요순 |':
					return b.likes - a.likes;
				case '게시글순 |':
					return b.posts.length - a.posts.length;
				case '최근 관심순 |':
					return (
						(likeDates[b.title]?.getTime() || 0) -
						(likeDates[a.title]?.getTime() || 0)
					);
				default:
					return 0;
			}
		});

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
					{['최신순 |', '좋아요순 |', '게시글순 |', '최근 관심순 '].map(
						type => (
							<S.SortOption
								key={type}
								onClick={() => handleSort(type)}
								isSelected={sortType === type} // 선택된 옵션인지 확인
							>
								{type}
							</S.SortOption>
						),
					)}
				</S.SortOptions>
			</S.Header>
			{filteredTopics.map(topic => (
				<S.TopicBox key={topic.id} onClick={() => handleTopicClick(topic.id)}>
					<div>
						<S.TopicTitle>{topic.title}</S.TopicTitle>
						<S.TopicDate>
							발행일: {new Date(topic.publishDate).toLocaleDateString()}
						</S.TopicDate>
						<S.PostCount>게시글 {topic.posts.length}개</S.PostCount>
					</div>
					<S.LikeContainer
						onClick={e => {
							e.stopPropagation();
							handleLike(topic.title);
						}}
					>
						{isLikedTopics[topic.title] ? <BlueHeartFill /> : <BlueHeart />}
						<S.LikeCount>{topic.likes}</S.LikeCount>
					</S.LikeContainer>
				</S.TopicBox>
			))}
		</S.Container>
	);
};

export default ScenarioTitlePage;

