import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/ScenarioTitlePageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg?react';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg?react';
import SearchIcon from '@assets/icons/Search.svg';
import { TLikeState, TThemeListResponse } from '@/types/mytype';
import { getList } from '@/apis/theme/getList';
import { getSearch } from '@/apis/theme/getSearch';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';

const ScenarioTitlePage: React.FC = () => {
	const [topics, setTopics] = useState<TThemeListResponse[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [sortType, setSortType] = useState<'date' | 'likeCount' | 'boardCount'>('date');
	const [isLikedTopics, setIsLikedTopics] = useState<TLikeState>({});
	const navigate = useNavigate();
	const handleUnauthorized = useHandleUnauthorized();

	useEffect(() => {
		const fetchTopics = async () => {
			try {
				let response;
				if (searchTerm.trim() === '') {
					// 검색어가 없을 때는 getList 호출
					response = await getList(0, 10, sortType, handleUnauthorized);
				} else {
					// 검색어가 있을 때는 getSearch 호출
					response = await getSearch(searchTerm, 0, 10, sortType, handleUnauthorized);
				}

				if (response) {
					setTopics(response);
				} else {
					console.error('주제 목록을 불러오지 못했습니다.');
				}
			} catch (error) {
				console.error('API 호출 중 에러:', error);
			}
		};

		fetchTopics();
	}, [searchTerm, sortType]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleSort = (type: string) => {
		setSortType(type === '최신순 |' ? 'date' : type === '좋아요순 |' ? 'likeCount' : 'boardCount');
	};

	const handleLike = (topic: string) => {
		setIsLikedTopics(prev => ({
			...prev,
			[topic]: !prev[topic],
		}));
	};

	const handleTopicClick = (id: string) => {
		navigate(`/topic/${id}`);
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
					{['최신순 |', '좋아요순 |', '게시글순 '].map(type => (
						<S.SortOption
							key={type}
							onClick={() => handleSort(type)}
							isSelected={sortType === (type === '최신순 |' ? 'date' : type === '좋아요순 |' ? 'likeCount' : 'boardCount')}
						>
							{type}
						</S.SortOption>
					))}
				</S.SortOptions>
			</S.Header>
			{topics.map((topic, index) => (
				<S.TopicBox key={index} onClick={() => handleTopicClick(topic.content)}>
					<div>
						<S.TopicTitle>{topic.content}</S.TopicTitle>
						<S.TopicDate>발행일: {new Date(topic.date).toLocaleDateString()}</S.TopicDate>
						<S.PostCount>게시글 {topic.boardCount}개</S.PostCount>
					</div>
					<S.LikeContainer
						onClick={e => {
							e.stopPropagation();
							handleLike(topic.content);
						}}
					>
						{isLikedTopics[topic.content] ? <BlueHeartFill /> : <BlueHeart />}
						<S.LikeCount>{topic.likeCount}</S.LikeCount>
					</S.LikeContainer>
				</S.TopicBox>
			))}
		</S.Container>
	);
};

export default ScenarioTitlePage;


