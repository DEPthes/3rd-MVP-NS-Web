import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/ScenarioTitlePageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg?react';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg?react';
import SearchIcon from '@assets/icons/Search.svg';
import { TLikeState, TTheme } from '@/types/mytype';
import { getList } from '@/apis/theme/getList';
import { getSearch } from '@/apis/theme/getSearch';
import { postLike } from '@/apis/theme/postLike';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';

const ScenarioTitlePage: React.FC = () => {
	const [topics, setTopics] = useState<TTheme[]>([]);
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
					response = await getList(1, 10, sortType, handleUnauthorized);
				} else {
					response = await getSearch(searchTerm, 1, 10, sortType, handleUnauthorized);
				}

				if (response && response.information && response.information.themeList) {
					setTopics(response.information.themeList);
				} else {
					console.error('주제 목록을 불러오지 못했습니다.', response);
				}
			} catch (error) {
				console.error('API 호출 중 에러:', error);
			}
		};

		fetchTopics();
	}, [searchTerm, sortType, handleUnauthorized]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleSort = (type: string) => {
		setSortType(type === '최신순' ? 'date' : type === '좋아요순' ? 'likeCount' : 'boardCount');
	};

	const handleLike = async (themeId: number, content: string) => {
		try {
			const response = await postLike(themeId, handleUnauthorized);
			if (response) {
				setIsLikedTopics(prev => ({
					...prev,
					[content]: response.liked,
				}));

				// 좋아요 숫자를 업데이트
				setTopics(prevTopics =>
					prevTopics.map(topic =>
						topic.themeId === themeId
							? { ...topic, likeCount: response.liked ? topic.likeCount + 1 : topic.likeCount - 1 }
							: topic
					)
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
								$isSelected={sortType === (type === '최신순' ? 'date' : type === '좋아요순' ? 'likeCount' : 'boardCount')}
							>
								{type}
							</S.SortOption>
							{index < 2 && <S.Divider>|</S.Divider>} {/* '|' 기호는 색상이 변하지 않도록 처리 */}
						</React.Fragment>
					))}
				</S.SortOptions>
			</S.Header>
			{topics && topics.length > 0 ? (
				topics.map((topic) => (
					<S.TopicBox key={topic.themeId} onClick={() => handleTopicClick(topic.themeId)}>
						<div>
							<S.TopicTitle>{topic.content}</S.TopicTitle>
							<S.TopicDate>발행일: {topic.date}</S.TopicDate>
							<S.PostCount>게시글 {topic.boardCount}개</S.PostCount>
						</div>
						<S.LikeContainer
							onClick={e => {
								e.stopPropagation();
								handleLike(topic.themeId, topic.content);
							}}
						>
							{isLikedTopics[topic.content] ? <BlueHeartFill /> : <BlueHeart />}
							<S.LikeCount>{topic.likeCount}</S.LikeCount>
						</S.LikeContainer>
					</S.TopicBox>
				))
			) : (
				<div>주제를 불러올 수 없습니다.</div>
			)}
		</S.Container>
	);
};

export default ScenarioTitlePage;









