import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export const TopicBox = styled.div`
	background-color: #f9f9f9;
	border-radius: 10px;
	padding: 20px;
	text-align: center;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	width: 1170px;
	margin-bottom: 20px;
	height: 195px;
	margin-left: 43px;
`;

export const Header = styled.div`
	font-family: 'Yeongdeok Snow Crab';
	color: var(--NS-Main1);
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

export const TopicHeader = styled.div`
	font-family: var(--T1-1);
	color: var(--NS-Main1);
	font-size: 28px;
	font-weight: bold;
	margin-bottom: 10px;
`;

export const InfoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	font-size: 14px;
	gap: 10px;
`;

export const PublishDate = styled.div`
	color: var(--NS-Main2);
`;

export const LikeContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const LikeCount = styled.div`
	margin-left: 5px;
	color: var(--NS-Main2);
`;

export const WriteButton = styled.button`
	background-color: var(--NS-Main1);
	color: white;
	border: none;
	border-radius: 10px;
	padding: 10px 20px;
	margin-top: 20px;
	cursor: pointer;
	width: 450px;
	height: 60px;
	transition: background-color 0.3s;

	&:hover {
		background-color: var(--NS-Main1-Clicked);
	}
`;

export const ListHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1170px;
	margin-bottom: 20px;
`;

export const ListTitle = styled.div`
	font-family: var(--H2);
	color: var(--NS-White);
	font-size: 18px;
	font-weight: bold;
`;

export const SortOptions = styled.div`
	display: flex;
	gap: 10px;
	margin-left: auto;
`;

export const SortOption = styled.div`
	font-family: var(--S1);
	color: var(--NS-White);
	font-size: 14px;
	cursor: pointer;
	&:hover {
		color: var(--NS-Main1);
	}
	&:active {
		color: var(--NS-Main1);
	}
`;

export const PostList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 1170px;
`;

export const PostBox = styled.div`
	background-color: #f9f9f9;
	border-radius: 10px;
	padding: 20px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	position: relative;
	height: 127px;
	width: 1170px;
`;

export const PostTitle = styled.div`
	font-family: var(--H3);
	font-size: 25px;
	font-weight: bold;
	margin-bottom: 20px;
	margin-top: 20px;
	cursor: pointer;
	&:hover {
		color: var(--NS-Main1);
	}
`;

export const PostContent = styled.div`
	font-family: var(--T4);
	color: var(--NS-Black);
	font-size: 18px;
	white-space: pre-wrap;
	margin-bottom: 20px;
`;

export const LikeButton = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	position: absolute;
	top: 20px;
	right: 20px;
	cursor: pointer;
`;

export const PostInfo = styled.div`
	font-size: 12px;
	color: #888;
	position: absolute;
	bottom: 10px;
	right: 20px;
`;
