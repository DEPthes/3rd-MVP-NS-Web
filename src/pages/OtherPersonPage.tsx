import React, { useState } from 'react';
import * as S from '@/styles/scenario/OtherPersonPageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';

const OtherPersonPage: React.FC = () => {
	const [liked, setLiked] = useState(false);

	const handleLikeClick = () => {
		setLiked(!liked);
	};

	return (
		<S.Container>
			<S.ProfileContainer>
				<S.ProfileCircle
					src="https://ns-s3-image-bucket.s3.amazonaws.com/default.png"
					alt="Profile"
				/>
				<S.ProfileNickname>테스트</S.ProfileNickname>
			</S.ProfileContainer>
			<S.PostBox>
				<S.PostInfo>
					<S.PostTitle>테스트 제목</S.PostTitle>
					<S.PostContent>테스트 내용</S.PostContent>
				</S.PostInfo>
				<S.LikeContainer onClick={handleLikeClick}>
					<img src={liked ? BlueHeartFill : BlueHeart} alt="Like" />
					<S.LikeCount>{liked ? 1 : 0}</S.LikeCount>
				</S.LikeContainer>
			</S.PostBox>
		</S.Container>
	);
};

export default OtherPersonPage;

