import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '@/styles/scenario/OtherPersonPageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';
import { getProfile } from '@/apis/user/getProfile';
import { boardLike } from '@/apis/board/boardLike';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import { TUserProfileResponse } from '@/types/mytype';

const OtherPersonPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [profile, setProfile] = useState<TUserProfileResponse['information'] | null>(null);
	const [likedBoards, setLikedBoards] = useState<{ [key: number]: boolean }>({});
	const handleUnauthorized = useHandleUnauthorized();

	useEffect(() => {
		const fetchProfile = async () => {
			if (id) {
				// id가 숫자로 변환될 수 있는지 확인
				if (!isNaN(Number(id))) {
					const userId = parseInt(id, 10);  // id를 number로 변환
					console.log("userId:", userId);  // userId 값 확인

					if (!isNaN(userId)) {
						const response = await getProfile(userId, handleUnauthorized);
						if (response) {
							setProfile(response.information);


							const initialLikedBoards = response.information.boardListResList.reduce(
								(acc, board) => {
									acc[board.boardId] = board.isLiked;
									return acc;
								},
								{} as { [key: number]: boolean }
							);
							setLikedBoards(initialLikedBoards);
						} else {
							console.error('프로필을 불러오지 못했습니다.');
						}
					} else {
						console.error('userId가 유효하지 않습니다.');
					}
				} else {
					console.error('URL에서 받아온 id가 숫자 형식이 아닙니다:', id);
				}
			} else {
				console.error('id가 없습니다.');
			}
		};

		fetchProfile();
	}, [id, handleUnauthorized]);

	const handleLikeClick = async (boardId: number) => {
		if (!profile || !id) return;

		try {
			const response = await boardLike(boardId, handleUnauthorized);
			if (response) {
				setLikedBoards(prevLikedBoards => ({
					...prevLikedBoards,
					[boardId]: !prevLikedBoards[boardId],
				}));
			} else {
				console.error('게시글 좋아요 실패');
			}
		} catch (error) {
			console.error('게시글 좋아요 요청 중 오류 발생:', error);
		}
	};

	return (
		<S.Container>
			{profile ? (
				<>
					<S.ProfileContainer>
						<S.ProfileCircle
							src={profile.imageUrl}
							alt="Profile"
						/>
						<S.ProfileNickname>{profile.nickname}</S.ProfileNickname>
					</S.ProfileContainer>
					{profile.boardListResList.map((board) => (
						<S.PostBox key={board.boardId}>
							<S.PostInfo>
								<S.PostTitle>{board.title}</S.PostTitle>
								<S.PostContent>{board.content}</S.PostContent>
							</S.PostInfo>
							<S.LikeContainer onClick={() => handleLikeClick(board.boardId)}>
								<img src={likedBoards[board.boardId] ? BlueHeartFill : BlueHeart} alt="Like" />
								<S.LikeCount>{likedBoards[board.boardId] ? board.likeCount + 1 : board.likeCount}</S.LikeCount>
							</S.LikeContainer>
						</S.PostBox>
					))}
				</>
			) : (
				<p>Loading profile...</p>
			)}
		</S.Container>
	);
};

export default OtherPersonPage;





