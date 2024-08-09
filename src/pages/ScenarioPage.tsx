import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/ScenarioPageStyle';

const ScenarioPage: React.FC = () => {
	const [topic, setTopic] = useState<string>('');
	const navigate = useNavigate();/* 글을 작성하는 페이지로 이동 */

	useEffect(() => {
		const fetchTopic = async () => {
			try {
				const response = await fetch('/dummyData.json');
				const data = await response.json();
				const randomIndex = Math.floor(Math.random() * data.length); // 랜덤 주제 선택
				setTopic(data[randomIndex].title);
			} catch (error) {
				console.error('Error fetching topic:', error);
			}
		};

		fetchTopic();
	}, []);

	return (
		<S.Container>
			<S.Title>나였다면</S.Title>
			<S.TitleMini>N력 키우기의 시작, N 상상력의 첫 질문</S.TitleMini>
			<S.TopicBox>
				<S.TopicHeader>오늘의 주제 :</S.TopicHeader>
				<S.Topic>{topic}</S.Topic>
			</S.TopicBox>
			<S.ButtonContainer>
				<S.ActionButton onClick={() => navigate('/senario-detail', { state: { topic } })}>
					오늘의 주제 쓰러가기
				</S.ActionButton>
				<S.AnotherButton onClick={() => navigate('/scenario-title')}>
					다른 주제 둘러보기
				</S.AnotherButton>
			</S.ButtonContainer>
		</S.Container>
	);
};

export default ScenarioPage;


