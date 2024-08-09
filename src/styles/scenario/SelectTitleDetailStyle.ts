import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export const HeaderSection = styled.div`
	display: flex;
	align-items: flex-start;
	width: 1170px;
	margin-bottom: 20px;
	position: relative;
`;

export const ProfileCircle = styled.div`
	width: 120px;
	height: 120px;
	background-color: #ddd;
	border-radius: 50%;
	margin-right: 20px;
	margin-top: -20px;
	cursor: pointer;
`;

export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 20px;
`;

export const ProfileNickname = styled.div`
	font-size: 14px;
	color: var(--NS-Black);
	font-family: Pretendard;
	position: absolute;
	top: 100px;
	left: 36px;
	margin-top: 20px;
`;

export const Header = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: white;
	margin-bottom: 5px;
`;

export const TopicTitle = styled.div`
	color: var(--NS-White);
	font: var(--H4-1);
	margin-top: 5px;
	margin-bottom: 10px;
`;

export const LikeContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 5px;
	cursor: pointer;
`;

export const LikeText = styled.div`
	font: var(--S1);
	color: var(--NS-White);
	margin-left: 5px;
`;

export const LikeCount = styled.div`
	margin-left: 5px;
	color: var(--NS-Main1);
	font: var(--S1);
`;

export const PostBox = styled.div`
	background-color: #f9f9f9;
	border-radius: 10px;
	padding: 20px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	position: relative;
	width: 1170px;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`;

export const PostTitle = styled.div`
	font: var(--H3);
	font-size: 32px;
	margin-bottom: 20px;
`;

export const PostContent = styled.div`
	font: var(--T4);
	color: var(--NS-Black);
	font-size: 18px;
	white-space: pre-wrap;
	margin-bottom: 20px;
`;

export const LikeButton = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 10px;
	right: 20px;
	cursor: pointer;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 10px;
	width: 1170px;
	margin-top: 20px;
`;

export const DeleteModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
`;

export const DeleteModal = styled.div`
	background-color: white;
	padding: 20px;
	border-radius: 10px;
	text-align: center;
`;

export const DeleteModalText = styled.p`
	font-size: 18px;
	color: black;
	margin-bottom: 20px;
`;
