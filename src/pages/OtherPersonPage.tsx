import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '@/styles/scenario/OtherPersonPageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';
import { getProfile } from '@/apis/user/getProfile';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import { UserProfileResponse } from '@/types/mytype';

const OtherPersonPage: React.FC = () => {
	const { nickname } = useParams<{ nickname: string }>();
	const [profile, setProfile] = useState<UserProfileResponse['information'] | null>(null);
	const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});
	const handleUnauthorized = useHandleUnauthorized();

	useEffect(() => {
		const fetchProfile = async () => {
			const profileData = await getProfile(handleUnauthorized);
			if (profileData) {
				setProfile(profileData.information);
			}
		};

		if (nickname) {
			fetchProfile();
		}
	}, [nickname, handleUnauthorized]);

	const handleLikeClick = (postId: string) => {
		setLikedPosts((prevLikedPosts) => ({
			...prevLikedPosts,
			[postId]: !prevLikedPosts[postId],
		}));
	};

	return (
		<S.Container>
			{profile && (
				<>
					<S.ProfileCircle style={{ backgroundImage: `url(${profile.imageUrl})` }} />
					<S.ProfileNickname>{profile.nickname}</S.ProfileNickname>
				</>
			)}
			{/* 
        여기서 게시글 데이터를 API로 가져올 수 있습니다.
        현재 게시글 데이터를 가져오는 API가 없으므로 관련된 코드를 추가해야 합니다.
        예시로 아래는 임시 게시글 데이터를 사용한 UI입니다.
      */}
			{[
				{ id: '1', title: 'Sample Post 1', text: 'This is a sample post.', likes: 10 },
				{ id: '2', title: 'Sample Post 2', text: 'Another sample post.', likes: 5 },
			].map((post) => (
				<S.PostBox key={post.id}>
					<S.PostInfo>
						<S.PostTitle>{post.title}</S.PostTitle>
						<S.PostContent>{post.text}</S.PostContent>
					</S.PostInfo>
					<S.LikeContainer onClick={() => handleLikeClick(post.id)}>
						<img src={likedPosts[post.id] ? BlueHeartFill : BlueHeart} alt="Like" />
						<S.LikeCount>{post.likes + (likedPosts[post.id] ? 1 : 0)}</S.LikeCount>
					</S.LikeContainer>
				</S.PostBox>
			))}
		</S.Container>
	);
};

export default OtherPersonPage;
