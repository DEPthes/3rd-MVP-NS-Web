import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '@/styles/scenario/OtherPersonPageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';

const OtherPersonPage: React.FC = () => {
	const { nickname } = useParams<{ nickname: string }>();
	const [posts, setPosts] = useState<{ id: string; title: string; text: string; likes: number; }[]>([]);
	const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});

	useEffect(() => {
		// 예시 데이터 
		const fetchData = async () => {
			try {
				const response = await fetch('/dummyData.json');
				const data = await response.json();
				const otherPersonPosts = data.flatMap((topic: any) => {
					return topic.posts
						.filter((post: any) => post.author === nickname)
						.map((post: any) => ({
							id: post.id,
							title: post.title,
							text: post.text,
							likes: post.likes,
						}));
				});
				setPosts(otherPersonPosts);
			} catch (error) {
				console.error('데이터 가져오기 에러:', error);
			}
		};

		if (nickname) {
			fetchData();
		}
	}, [nickname]);

	const handleLikeClick = (postId: string) => {
		setLikedPosts((prevLikedPosts) => ({
			...prevLikedPosts,
			[postId]: !prevLikedPosts[postId]
		}));
	};

	return (
		<S.Container>
			<S.ProfileCircle />
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