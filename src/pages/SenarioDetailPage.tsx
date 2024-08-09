import React, { useState, useEffect } from 'react';
import * as S from '@/styles/scenario/SenarioDetailPageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';
import LightButton from '@components/button/LightButton';
import DarkButton from '@components/button/DarkButton';
//import { TTopicData } from '@/types';

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
				const data = await response.json();
				setTopic(data[0].title); // 첫 번째 주제를 설정
			} catch (error) {
				console.error('주제 가져오기 에러:', error);
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

	const handlePost = async () => {
		if (title.trim() === '' || text.trim() === '') return;
		setIsPostModalVisible(true);
	};

	const handleModalSave = () => {
		setIsSaveModalVisible(false);
		setIsSaveCompleteModalVisible(true);
	};

	const handleModalPost = async () => {
		const newTopic = {
			id: new Date().toISOString(),
			title,
			publishDate: new Date().toISOString(),
			likes: 0,
			posts: 1,
			text,
		};

		try {
			const response = await fetch('/dummyData.json');
			const data = await response.json();
			data.push(newTopic);

			await fetch('/dummyData.json', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			setIsPostModalVisible(false);
			setIsPostCompleteModalVisible(true);
		} catch (error) {
			console.error('새 주제 게시 에러:', error);
		}
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
		<S.Container>
			<S.TopicBox>
				<S.TopicHeader>오늘의 주제</S.TopicHeader>
				<S.Topic>{topic}</S.Topic>
				<S.LikeContainer onClick={handleLikeClick}>
					{isLiked ? <img src={BlueHeartFill} alt="Liked" /> : <img src={BlueHeart} alt="Not Liked" />}
					<S.LikeText>이 주제 좋아요</S.LikeText>
				</S.LikeContainer>
			</S.TopicBox>
			<S.NewTopicBox>
				<S.Input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value.slice(0, 20))}
					placeholder="제목을 입력하세요 (최대 20자)"
				/>
				<S.Separator />
				<S.TextArea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="여기에 자유롭게 텍스트를 입력하세요."
				/>
			</S.NewTopicBox>
			<S.ButtonContainer>
				<LightButton text="임시저장" onClick={handleSave} />
				<DarkButton text="게시" onClick={handlePost} disabled={isPostDisabled} />
			</S.ButtonContainer>
			{isSaveModalVisible && (
				<S.ModalOverlay>
					<S.ModalContainer>
						<S.ModalTitle>상상력 임시저장</S.ModalTitle>
						<S.ModalText>게시글을 임시 저장하시겠습니까?</S.ModalText>
						<S.ModalTextSmall>
							(임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수 있습니다.)
						</S.ModalTextSmall>
						<S.ButtonContainer>
							<DarkButton text="임시저장" onClick={handleModalSave} />
							<LightButton text="취소" onClick={handleModalCancel} />
						</S.ButtonContainer>
					</S.ModalContainer>
				</S.ModalOverlay>
			)}
			{isSaveCompleteModalVisible && (
				<S.ModalOverlay>
					<S.ModalContainer>
						<S.ModalTitle>임시저장 완료!</S.ModalTitle>
						<S.ModalTextSmall>
							(임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수 있습니다.)
						</S.ModalTextSmall>
						<S.ButtonContainer>
							<DarkButton text="확인" onClick={handleModalComplete} />
						</S.ButtonContainer>
					</S.ModalContainer>
				</S.ModalOverlay>
			)}
			{isPostModalVisible && (
				<S.ModalOverlay>
					<S.ModalContainer>
						<S.ModalTitle>상상력 게시</S.ModalTitle>
						<S.ModalText>상상력을 게시하시겠습니까?</S.ModalText>
						<S.ButtonContainer>
							<DarkButton text="게시" onClick={handleModalPost} />
							<LightButton text="취소" onClick={handleModalCancel} />
						</S.ButtonContainer>
					</S.ModalContainer>
				</S.ModalOverlay>
			)}
			{isPostCompleteModalVisible && (
				<S.ModalOverlay>
					<S.ModalContainer>
						<S.ModalTitle>상상력 게시 완료!</S.ModalTitle>
						<S.ModalText>N력 +5 상승!</S.ModalText>
						<S.ButtonContainer>
							<DarkButton text="확인" onClick={handleModalComplete} />
						</S.ButtonContainer>
					</S.ModalContainer>
				</S.ModalOverlay>
			)}
		</S.Container>
	);
};

export default SenarioDetailPage;