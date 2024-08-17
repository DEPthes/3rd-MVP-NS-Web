import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '@/styles/scenario/OtherPersonPageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';
import { getProfile } from '@/apis/user/getProfile';
import { UserProfileResponse } from '@/types/mytype';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';  // handleUnauthorized 가져오기

const OtherPersonPage: React.FC = () => {
	const { nickname } = useParams<{ nickname: string }>();
	const [profile, setProfile] = useState<UserProfileResponse['information'] | null>(null);
	const [posts, setPosts] = useState<{ id: string; title: string; text: string; likes: number; }[]>([]);
	const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});
	const handleUnauthorized = useHandleUnauthorized();  // handleUnauthorized 정의

	useEffect(() => {
		const fetchProfile = async () => {
			const profileData = await getProfile(handleUnauthorized);  // handleUnauthorized 전달
			if (profileData && profileData.information.nickname === nickname) {
				setProfile(profileData.information);

				// 여기에 게시물 데이터를 받아오는 API 호출을 추가할 수 있습니다.
				// 예를 들어, getPostsByNickname(nickname) 같은 함수를 호출해서 데이터를 받아오는 코드가 추가될 수 있습니다.
				const postsData = [
					{ id: '1', title: 'Post 1', text: 'This is the first post', likes: 5 },
					{ id: '2', title: 'Post 2', text: 'This is the second post', likes: 3 },
					// 추가적인 게시물 데이터를 여기에 추가하세요.
				];
				setPosts(postsData); // posts 상태 업데이트
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
			<S.ProfileCircle style={{ backgroundImage: `url(${profile?.imageUrl})` }} />
			<S.ProfileNickname>{nickname}</S.ProfileNickname>
			{posts.map((post) => (
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

