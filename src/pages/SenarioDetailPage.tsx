import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BlueHeart from '@assets/icons/BlueHeart.svg'; // 직접 import
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg'; // 직접 import
import { TTopicData } from '@types';
import LightButton from '@components/button/LightButton'; // 버튼 컴포넌트 import
import DarkButton from '@components/button/DarkButton'; // 버튼 컴포넌트 import

const SenarioDetailPage: React.FC = () => {
	const [topic, setTopic] = useState<string>('');
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [title, setTitle] = useState<string>('');
	const [text, setText] = useState<string>('');
	const [isSaveModalVisible, setIsSaveModalVisible] = useState<boolean>(false);
	const [isSaveCompleteModalVisible, setIsSaveCompleteModalVisible] = useState<boolean>(false);
	const [isPostModalVisible, setIsPostModalVisible] = useState<boolean>(false);
	const [isPostCompleteModalVisible, setIsPostCompleteModalVisible] = useState<boolean>(false);

	useEffect(() => {
		const fetchTopic = async () => {
			try {
				const response = await fetch('/dummyData.json');
				const data: TTopicData = await response.json();
				setTopic(data.topic);
			} catch (error) {
				console.error('Error fetching topic:', error);
			}
		};

		fetchTopic();
	}, []);

	const handleLikeClick = () => {
		setIsLiked(!isLiked);
	};

	const handleSave = () => {
		if (title.trim() === '') return;
		setIsSaveModalVisible(true);
	};

	const handlePost = () => {
		if (title.trim() === '' || text.trim() === '') return;
		setIsPostModalVisible(true);
	};

	const handleModalSave = () => {
		console.log('임시 저장:', { title, text });
		setIsSaveModalVisible(false);
		setIsSaveCompleteModalVisible(true);
	};

	const handleModalPost = () => {
		console.log('게시:', { title, text });
		setIsPostModalVisible(false);
		setIsPostCompleteModalVisible(true);
	};

	const handleModalCancel = () => {
		setIsSaveModalVisible(false);
		setIsPostModalVisible(false);
	};

	const handleModalComplete = () => {
		setIsSaveCompleteModalVisible(false);
		setIsPostCompleteModalVisible(false);
	};

	const isPostDisabled = title.trim() === '' || text.trim() === '';

	return (
		<Container>
			<TopicBox>
				<div>오늘의 주제</div>
				<Topic>{topic}</Topic>
				<LikeContainer onClick={handleLikeClick}>
					{isLiked ? <img src={BlueHeartFill} alt="Liked" /> : <img src={BlueHeart} alt="Not Liked" />}
					<LikeText>이 주제 좋아요</LikeText>
				</LikeContainer>
			</TopicBox>
			<NewTopicBox>
				<Input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value.slice(0, 20))}
					placeholder="제목을 입력하세요 (최대 20자)"
				/>
				<Separator />
				<TextArea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="여기에 자유롭게 텍스트를 입력하세요."
				/>
			</NewTopicBox>
			<ButtonContainer>
				<LightButton text="임시저장" onClick={handleSave} />
				<DarkButton text="게시" onClick={handlePost} disabled={isPostDisabled} />
			</ButtonContainer>
			{isSaveModalVisible && (
				<ModalOverlay>
					<ModalContainer>
						<ModalTitle>상상력 임시저장</ModalTitle>
						<ModalText>게시글을 임시 저장하시겠습니까?</ModalText>
						<ModalTextSmall>(임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수 있습니다.)</ModalTextSmall>
						<ButtonContainer>
							<DarkButton text="임시저장" onClick={handleModalSave} />
							<LightButton text="취소" onClick={handleModalCancel} />
						</ButtonContainer>
					</ModalContainer>
				</ModalOverlay>
			)}
			{isSaveCompleteModalVisible && (
				<ModalOverlay>
					<ModalContainer>
						<ModalTitle>임시저장 완료!</ModalTitle>
						<ModalTextSmall>(임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수 있습니다.)</ModalTextSmall>
						<ButtonContainer>
							<DarkButton text="확인" onClick={handleModalComplete} />
						</ButtonContainer>
					</ModalContainer>
				</ModalOverlay>
			)}
			{isPostModalVisible && (
				<ModalOverlay>
					<ModalContainer>
						<ModalTitle>상상력 게시</ModalTitle>
						<ModalText>상상력을 게시하시겠습니까?</ModalText>
						<ButtonContainer>
							<DarkButton text="게시" onClick={handleModalPost} />
							<LightButton text="취소" onClick={handleModalCancel} />
						</ButtonContainer>
					</ModalContainer>
				</ModalOverlay>
			)}
			{isPostCompleteModalVisible && (
				<ModalOverlay>
					<ModalContainer>
						<ModalTitle>상상력 게시 완료!</ModalTitle>
						<ModalText>N력 +5 상승!</ModalText>
						<ButtonContainer>
							<DarkButton text="확인" onClick={handleModalComplete} />
						</ButtonContainer>
					</ModalContainer>
				</ModalOverlay>
			)}
		</Container>
	);
};

export default SenarioDetailPage;

// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--NS-Background); /* 배경색 변수 사용 */
`;

const TopicBox = styled.div`
  background-color: var(--NS-White); /* 흰색 배경 변수 사용 */
  border-radius: 20px;
  padding: 40px 60px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Topic = styled.div`
  margin-top: 20px;
  font-size: 24px;
  color: var(--NS-Text); /* 텍스트 색상 변수 사용 */
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  margin-left: 110px;
`;

const LikeText = styled.div`
  font-size: 16px;
  color: var(--NS-Text); /* 텍스트 색상 변수 사용 */
  margin-left: 10px;
`;

const NewTopicBox = styled.div`
  background-color: var(--NS-White); /* 흰색 배경 변수 사용 */
  border-radius: 20px;
  padding: 40px 60px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 80%;
  max-width: 800px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--NS-TextArea-Background); /* 테두리를 흰색으로 설정하여 안 보이게 함 */
  margin-bottom: 20px;
  font-size: 16px;
  box-sizing: border-box;
`;

const Separator = styled.hr`
  border: none;
  border-top: 2px solid var(--NS-Separator); /* 구분선 색상 변수 사용 */
  margin: 20px 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--NS-White); /* 테두리를 흰색으로 설정하여 안 보이게 함 */
  margin-bottom: 20px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
  background-color: var(--NS-TextArea-Background); /* 텍스트 영역 배경색 변수 사용 */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px; /* 버튼과 새 박스 사이의 간격 조정 */
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: var(--NS-White);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 400px;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--NS-Text);
`;

const ModalText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: var(--NS-Text);
`;

const ModalTextSmall = styled.p`
  font-size: 12px;
  margin-bottom: 20px;
  color: var(--NS-Text);
`;
