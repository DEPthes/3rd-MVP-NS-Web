import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/SelectTitleDetailStyle';
import WhiteHeart from '@assets/icons/WhiteHeart.svg';
import WhiteHeartFill from '@assets/icons/WhiteHeartFill.svg';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';
import Main5Heart from '@assets/icons/Main5Heart.svg?react';
import Main5HeartFill from '@assets/icons/Main5HeartFill.svg?react';
import LightButton from '@/components/button/LightButton';
import { TPost } from '@/types';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';

const SelectTitleDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<TPost | null>(null);
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [isBlueHeartLiked, setIsBlueHeartLiked] = useState<boolean>(false);
	const [topicTitle, setTopicTitle] = useState<string>('');
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
	const [isNotAuthor, setIsNotAuthor] = useState<boolean>(false);
	const navigate = useNavigate();

	const { isMobileOrTablet } = useNSMediaQuery(); // 미디어 쿼리 훅 사용

	// 임시: 현재 사용자를 확인하기 위한 변수 (로그인된 사용자 이름)
	const currentUser = "현재 사용자 닉네임"; // 실제 구현때는 로그인 정보를 가져와야 함

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch('/dummyData.json');
				const data = await response.json();
				data.forEach((topic: any) => {
					const foundPost = topic.posts.find((p: TPost) => p.id === id);
					if (foundPost) {
						setPost(foundPost);
						setTopicTitle(topic.title); // 상위 주제의 제목 설정
					}
				});
			} catch (error) {
				console.error('게시글 가져오기 에러:', error);
			}
		};

		fetchPost();
	}, [id]);

	const handleBackClick = () => {
		navigate(-1);
	};

	const handleEditClick = () => {
		if (post?.author === currentUser) {
			// 본인이 작성한 글인 경우 수정 페이지로 이동 (수정 페이지가 있다고 가정)
			navigate(`/edit-post/${post.id}`);
		} else {
			// 본인이 작성한 글이 아닌 경우 시나리오 디테일 페이지로 이동
			navigate(`/scenario-detail/${post?.id}`);
		}
	};

	const handleDeleteClick = () => {
		if (post?.author === currentUser) {
			setIsDeleteModalOpen(true);
		} else {
			setIsNotAuthor(true);
		}
	};

	const handleConfirmDelete = () => {
		// 삭제 로직 추가 아직 안됨
		// 삭제가 완료된 후 TopicDetailPage로 이동하기
		navigate(`/topic/${id}`);
	};

	const handleCancelDelete = () => {
		setIsDeleteModalOpen(false);
	};

	const handleWhiteHeartClick = () => {
		setIsLiked(!isLiked);
	};

	const handleBlueHeartClick = () => {
		setIsBlueHeartLiked(!isBlueHeartLiked);
	};

	const handleProfileClick = () => {
		navigate(`/other-person-page/${post?.author}`); // 타인의 프로필 페이지로 이동하기
	}

	if (!post) {
		return <div>로딩 중...</div>;
	}

	return (
		<S.Container>
			<S.HeaderSection>
				<S.ProfileContainer>
					<S.ProfileCircle onClick={handleProfileClick} />
					<S.ProfileNickname>{post.author}</S.ProfileNickname>
				</S.ProfileContainer>
				<S.ProfileInfo>
					<S.Header>주제</S.Header>
					<S.TopicTitle>{topicTitle}</S.TopicTitle>
					<S.LikeContainer onClick={handleWhiteHeartClick}>
						{isMobileOrTablet ? (
							isLiked ? <Main5HeartFill title="Like" /> : <Main5Heart title="Like" />
						) : (
							<img src={isLiked ? WhiteHeartFill : WhiteHeart} alt="Like" />
						)}
						<S.LikeText>이 주제 좋아요</S.LikeText>
					</S.LikeContainer>

				</S.ProfileInfo>
			</S.HeaderSection>
			<S.PostBox>
				<S.PostTitle>{post.title}</S.PostTitle>
				<S.PostContent>{post.text}</S.PostContent>
				<S.LikeButton onClick={handleBlueHeartClick}>
					<img src={isBlueHeartLiked ? BlueHeartFill : BlueHeart} alt="Like" />
					<S.LikeCount>좋아요</S.LikeCount>
				</S.LikeButton>
			</S.PostBox>
			<S.ButtonContainer>
				{!isMobileOrTablet && (
					<LightButton text="뒤로 가기" onClick={handleBackClick} />
				)}
				<LightButton text="수정하기" onClick={handleEditClick} />
				<LightButton text="삭제하기" onClick={handleDeleteClick} />
			</S.ButtonContainer>
			{isDeleteModalOpen && (
				<S.DeleteModalOverlay>
					<S.DeleteModal>
						<S.DeleteModalText>삭제하시겠습니까?</S.DeleteModalText>
						<S.ButtonContainer>
							<LightButton text="삭제하기" onClick={handleConfirmDelete} />
							<LightButton text="취소하기" onClick={handleCancelDelete} />
						</S.ButtonContainer>
					</S.DeleteModal>
				</S.DeleteModalOverlay>
			)}
			{isNotAuthor && (
				<S.DeleteModalOverlay>
					<S.DeleteModal>
						<S.DeleteModalText>이 게시글을 삭제할 권한이 없습니다.</S.DeleteModalText>
						<S.ButtonContainer>
							<LightButton text="확인" onClick={() => setIsNotAuthor(false)} />
						</S.ButtonContainer>
					</S.DeleteModal>
				</S.DeleteModalOverlay>
			)}
		</S.Container>
	);
};

export default SelectTitleDetail;










