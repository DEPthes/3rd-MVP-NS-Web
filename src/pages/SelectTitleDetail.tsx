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
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import { getBoard } from '@/apis/board/getBoard';
import { deleteBoard } from '@/apis/board/deleteBoard';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import { TBoardDetailResponse } from '@/types/mytype';

const SelectTitleDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<TBoardDetailResponse | null>(null);
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [isBlueHeartLiked, setIsBlueHeartLiked] = useState<boolean>(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
	const [isNotAuthor, setIsNotAuthor] = useState<boolean>(false);
	const navigate = useNavigate();

	const { isMobileOrTablet } = useNSMediaQuery();
	const handleUnauthorized = useHandleUnauthorized();

	useEffect(() => {
		const fetchPost = async () => {
			if (id) {
				const response = await getBoard(parseInt(id), handleUnauthorized);
				if (response) {
					setPost(response); // API에서 받은 데이터를 설정
					setIsLiked(response.likedTheme); // 주제 좋아요 상태 설정
					setIsBlueHeartLiked(response.likedBoard); // 게시글 좋아요 상태 설정
				} else {
					console.error('게시글을 불러오지 못했습니다.');
				}
			}
		};

		fetchPost();
	}, [id, handleUnauthorized]);

	const handleBackClick = () => {
		navigate(-1);
	};

	const handleEditClick = () => {
		if (post?.owner) {
			navigate(`/edit-post/${id}`);
		} else {
			navigate(`/scenario-detail/${id}`);
		}
	};

	const handleDeleteClick = () => {
		if (post?.owner) {
			setIsDeleteModalOpen(true);
		} else {
			setIsNotAuthor(true);
		}
	};

	const handleConfirmDelete = async () => {
		if (id) {
			const deleteSuccess = await deleteBoard(parseInt(id), handleUnauthorized);
			if (deleteSuccess) {
				alert('게시글이 삭제되었습니다.');
				navigate(`/topic/${id}`);
			} else {
				alert('게시글 삭제에 실패했습니다.');
			}
		}
		setIsDeleteModalOpen(false);
	};

	const handleCancelDelete = () => {
		setIsDeleteModalOpen(false);
	};

	const handleWhiteHeartClick = async () => {
		try {
			// 주제에 대한 좋아요 API 호출 코드 추가
			await toggleThemeLike(id, !isLiked, handleUnauthorized);
			setIsLiked(!isLiked);
		} catch (error) {
			console.error('좋아요 실패:', error);
		}
	};

	const handleBlueHeartClick = async () => {
		try {
			// 게시글에 대한 좋아요 API 호출 코드 추가
			await togglePostLike(id, !isBlueHeartLiked, handleUnauthorized);
			setIsBlueHeartLiked(!isBlueHeartLiked);
		} catch (error) {
			console.error('좋아요 실패:', error);
		}
	};

	const handleProfileClick = () => {
		navigate(`/other-person-page/${post?.nickname}`); // 타인의 프로필 페이지로 이동하기
	};

	if (!post) {
		return <div>로딩 중...</div>;
	}

	return (
		<S.Container>
			<S.HeaderSection>
				<S.ProfileContainer>
					<S.ProfileCircle
						onClick={handleProfileClick}
						style={{ backgroundImage: `url(${post.imageUrl})` }} // 프로필 이미지 설정
					/>
					<S.ProfileNickname>{post.nickname}</S.ProfileNickname> {/* 작성자 닉네임 */}
				</S.ProfileContainer>
				<S.ProfileInfo>
					<S.Header>주제</S.Header>
					<S.TopicTitle>{post.themeContent}</S.TopicTitle> {/* 주제 제목 */}
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
				<S.PostTitle>{post.boardTitle}</S.PostTitle> {/* 게시글 제목 */}
				<S.PostContent>{post.boardContent}</S.PostContent> {/* 게시글 내용 */}
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










