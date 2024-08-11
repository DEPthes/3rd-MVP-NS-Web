import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export const TopicBox = styled.div`
	background-color: var(—NS-White);
	background-color: #ffffff;
	border-radius: 40px;
	padding: 20px;
	text-align: center;
	box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
	width: 1170px;
	margin-top: 96p;
	margin-bottom: 20px;
	height: 251px;
	margin: 0 auto; /* 이 부분을 추가하여 중앙에 배치 */
`;

export const Header = styled.div`
	
	color: var(--NS-Main1);
	margin-bottom: 10px;
	font: var(--LogoSmall);
`;

export const TopicHeader = styled.div`
	font: var(--T1-1);
	color: var(--NS-Main1);
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
	font:var(--S1-1);
`;

export const LikeContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	color: var(--NS-Main2);
	font:var(--S1-1);
`;

export const LikeCount = styled.div`
	margin-left: 5px;
	color: var(--NS-Main2);
	font: var(--S1);
`;

export const WriteButton = styled.button`
	background-color: var(--NS-Main1);
	color: white;
	border: none;
	border-radius: 40px;
	padding: 10px 20px;
	margin-top: 20px;
	cursor: pointer;
	width: 450px;
	height: 60px;
	transition: background-color 0.3s;
	font: var(--Input);

	&:hover {
		background-color: var(--NS-Main-Clicked);
	}
`;

export const ListHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1170px;
	margin-bottom: 20px;
	
`;

export const ListTitle = styled.div`
	font: var(--H2);
	color: var(--NS-White);
	width:110px;
	height:22px;
	margin-top: 59px;
`;

export const SortOptions = styled.div`
	display: flex;
	gap: 10px;
	margin-left: auto;
	font: var(--S1);
	width:122px;
	height:19px;
	margin-top: 59px;
`;

export const SortOption = styled.div`
	font: var(--S1);
	color: var(--NS-White);
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
	height: 172px;
	
	margin: 0 auto; /* 이 부분을 추가하여 중앙에 배치 */
`;

export const PostBox = styled.div`
	 background-color: var(—NS-White);
	 background-color: #ffffff;
	border-radius: 40px;
	padding: 20px;
	box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
	position: relative;
	height: 172px;
	width: 1170px;
	gap:22px;
`;

export const PostTitle = styled.div`
	font: var(--H3);
	width:264px;
	min-height: 33px;
	margin-bottom: 20px;
	margin-top: 34px;
	margin-left:46px;
	cursor: pointer;
	&:hover {
		color: var(--NS-Main1);
	}
`;

export const PostContent = styled.div`
	font: var(--T4);
	color: var(--NS-Black);
	white-space: pre-wrap;
	margin-bottom: 34px;
	margin-left:46px;
	width:980px;
	min-height:56px;
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
	width: 154px;
	height:28px;
	color: gray;
	font : var(--W4);
	position: absolute;
	bottom: 10px;
	right: 20px;
`;
