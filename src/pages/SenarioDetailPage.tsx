import React, { useState, useEffect } from 'react';
import * as S from '@/styles/scenario/SenarioDetailPageStyle';
import Main5Heart from '@assets/icons/Main5Heart.svg?react';
import Main5HeartFill from '@assets/icons/Main5HeartFill.svg?react';
import LightButton from '@components/button/LightButton';
import DarkButton from '@components/button/DarkButton';
import BackDrop from '@/components/layout/BackDrop';
import { getToday } from '@/apis/theme/getToday';
import { TTodayThemeResponse, TPostDraftRequest } from '@/types/mytype';
import { postDraft } from '@/apis/board/postDraft';
import { postPublish } from '@/apis/board/postPublish';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';

const SenarioDetailPage: React.FC = () => {
	const [topic, setTopic] = useState<string>('');
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [title, setTitle] = useState<string>('');
	const [text, setText] = useState<string>('');
	const [isSaveModalVisible, setIsSaveModalVisible] = useState<boolean>(false);
	const [isSaveCompleteModalVisible, setIsSaveCompleteModalVisible] =
		useState<boolean>(false);
	const [isPostModalVisible, setIsPostModalVisible] = useState<boolean>(false);
	const [isPostCompleteModalVisible, setIsPostCompleteModalVisible] =
		useState<boolean>(false);

	const handleUnauthorized = useHandleUnauthorized(); // handleUnauthorized 콜백 생성. getToday오류 방지 위해.

	useEffect(() => {
		const fetchTopic = async () => {
			const data: TTodayThemeResponse | undefined = await getToday(handleUnauthorized);
			if (data) {
				setTopic(data.content);
				setIsLiked(data.likedTheme);
			} else {
				console.error('오늘의 주제를 불러오지 못했습니다.');
			}
		};

		fetchTopic();
	}, [handleUnauthorized]);

	const handleLikeClick = () => {
		setIsLiked(!isLiked);
	};

	const handleSave = () => {
		if (title.trim() === '') return;
		setIsSaveModalVisible(true);
	};

	const handleModalSave = async () => {
		// 임시 저장 API 호출
		const draftData: TPostDraftRequest = {
			title,
			content: text,
			themeId: 1, // 예시: 현재 주제 ID를 사용해야 함. 실제 ID로 교체 필요.
		};

		const response = await postDraft(draftData, handleUnauthorized);
		// 임시 저장 완료 모달창
		if (response?.check) {
			setIsSaveCompleteModalVisible(true);
		} else {
			console.error('임시 저장 실패:', response);
		}

		setIsSaveModalVisible(false);
	};

	// 게시 모달창 
	const handlePost = () => {
		if (title.trim() === '' || text.trim() === '') return;
		setIsPostModalVisible(true);
	};

	const handleModalPost = async () => {
		// 게시 API 호출
		const postData: TPostDraftRequest = {
			title,
			content: text,
			themeId: 1, // 예시이므로 실제 주제 ID 사용이 필요
		};

		const response = await postPublish(postData, handleUnauthorized);

		if (response?.check) {
			setIsPostCompleteModalVisible(true);
		} else {
			console.error('게시 실패:', response);
		}

		setIsPostModalVisible(false);
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
					{isLiked ? <Main5HeartFill width={30} /> : <Main5Heart width={30} />}
					<S.LikeText>이 주제 좋아요</S.LikeText>
				</S.LikeContainer>
			</S.TopicBox>
			<S.NewTopicBox>
				<S.Input
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value.slice(0, 20))}
					placeholder="제목을 입력하세요 (최대 20자)"
				/>
				<S.Separator />
				<S.TextArea
					value={text}
					onChange={e => setText(e.target.value)}
					placeholder="여기에 자유롭게 텍스트를 입력하세요."
				/>
			</S.NewTopicBox>
			<S.ButtonContainer>
				<LightButton text="임시저장" onClick={handleSave} />
				<DarkButton
					text="게시"
					onClick={handlePost}
					disabled={isPostDisabled}
				/>
			</S.ButtonContainer>
			{isSaveModalVisible && (
				<BackDrop
					children={
						<S.ModalContainer>
							<S.ModalTitle>상상력 임시저장</S.ModalTitle>
							<S.ModalText2Black>
								게시글을 임시 저장하시겠습니까? <br />
								(임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수 있습니다.)
							</S.ModalText2Black>
							<S.ModalBtn>
								<DarkButton text="임시저장" onClick={handleModalSave} />
								<LightButton text="취소" onClick={handleModalCancel} />
							</S.ModalBtn>
						</S.ModalContainer>
					}
					isOpen={isSaveModalVisible}
				/>
			)}
			{isSaveCompleteModalVisible && (
				<BackDrop
					children={
						<S.ModalContainer>
							<S.ModalTitle>임시저장 완료!</S.ModalTitle>
							<S.ModalTextBlack2>
								(임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수 있습니다.)
							</S.ModalTextBlack2>
							<DarkButton text="확인" onClick={handleModalComplete} />
						</S.ModalContainer>
					}
					isOpen={isSaveCompleteModalVisible}
				/>
			)}
			{isPostModalVisible && (
				<BackDrop
					children={
						<S.ModalContainer>
							<S.ModalTitle>상상력 게시</S.ModalTitle>
							<S.ModalTextBlack>상상력을 게시하시겠습니까?</S.ModalTextBlack>
							<S.ModalBtn>
								<DarkButton text="게시" onClick={handleModalPost} />
								<LightButton text="취소" onClick={handleModalCancel} />
							</S.ModalBtn>
						</S.ModalContainer>
					}
					isOpen={isPostModalVisible}
				/>
			)}
			{isPostCompleteModalVisible && (
				<BackDrop
					children={
						<S.ModalContainer>
							<S.ModalTitle>상상력 게시 완료!</S.ModalTitle>
							<S.ModalTextBlack>N력 +5 상승!</S.ModalTextBlack>
							<DarkButton text="확인" onClick={handleModalComplete} />
						</S.ModalContainer>
					}
					isOpen={isPostCompleteModalVisible}
				/>
			)}
		</S.Container>
	);
};

export default SenarioDetailPage;







