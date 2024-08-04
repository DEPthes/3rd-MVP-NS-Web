import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ScenarioPage: React.FC = () => {
	const [topic, setTopic] = useState<string>('');
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTopic = async () => {
			try {
				const response = await fetch('/dummyData.json');
				const data = await response.json();
				setTopic(data.topic);
			} catch (error) {
				console.error('Error fetching topic:', error);
			}
		};

		fetchTopic();
	}, []);

	return (
		<Container>
			<Title>나였다면</Title>
			<TopicBox>
				오늘의 주제 : <span>{topic}</span>
			</TopicBox>
			<ButtonContainer>
				<ActionButton onClick={() => navigate('/senario-detail')}>오늘의 주제 쓰러가기</ActionButton>
				<AnotherButton>다른 주제 둘러보기</AnotherButton>
			</ButtonContainer>
		</Container>
	);
};

export default ScenarioPage;

// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: transparent; /* 부모 Layout의 배경이 보이도록 설정 */
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
`;

const TopicBox = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px 40px;
  font-size: 18px;
  color: black;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  span {
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AnotherButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px; /* 버튼의 너비 설정 */
  height: 40px; /* 버튼의 높이 설정 */
  font: var(--Button);
  color: var(--NS-Main1);
  border: 1.5px solid var(--NS-Main1);
  background-color: var(--NS-White);
  border-radius: 20px; /* 양 변이 둥근 직사각형 */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--NS-Main4);
  }
`;
