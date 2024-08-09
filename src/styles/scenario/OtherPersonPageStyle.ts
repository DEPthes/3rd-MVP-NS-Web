import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export const ProfileCircle = styled.div`
	width: 150px;
	height: 150px;
	background-color: #ddd;
	border-radius: 50%;
	margin-bottom: 20px;
`;

export const ProfileNickname = styled.div`
	font-size: 24px;
	color: white;
	margin-bottom: 20px;
`;

export const PostBox = styled.div`
	background-color: white;
	border-radius: 10px;
	padding: 20px;
	width: 80%;
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

export const PostInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: calc(100% - 80px);
`;

export const PostTitle = styled.div`
	font-size: 18px;
	color: black;
	margin-bottom: 5px;
	color: var(--H3);
	height: 110px;
`;

export const PostContent = styled.div`
	font-size: 14px;
	color: black;
	margin-bottom: 10px;
`;

export const LikeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
`;

export const LikeCount = styled.div`
	font-size: 16px;
	color: black;
	margin-top: 5px;
`;
