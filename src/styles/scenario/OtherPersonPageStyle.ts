import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
`;

export const ProfileCircle = styled.div`
	width: 251px;
	height: 251px;
	background-color: var(--NS-White);
	border-radius: 50%;
	margin-bottom: 20px;
`;

export const ProfileNickname = styled.div`
	
	color:var(--NS-White);
	width:83px;
	height:38px;
	margin-top:17px;
	margin-bottom: 58px;
	font:var(--H4);
	justify-content: center; 
	align-items: center; 
	text-align: center;
	white-space: nowrap; /* 텍스트가 한 줄에 나타나도록 설정 */
`;

export const PostBox = styled.div`
	 background-color: #ffffff;
	 background-color: var(—NS-White);
	border-radius: 40px;
	padding: 20px;
	width: 1170px;
	height:172px;
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
`;

export const PostInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 1170px;
	height:172px;
`;

export const PostTitle = styled.div`
	min-width:264px;
	min-height:33px;
	color: var(--NS-Black);
	font: var(--H3);
    margin-top: 36px;
	margin-left: 46px;
	
`;

export const PostContent = styled.div`
	color: var(--NS-Black);
	min-width: 980px;
	min-height: 56px;
	margin-top: 13px;
	margin-left: 46px;
	font: var(--T4);
`;

export const LikeContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	color: var(--NS-Main1);
	font: var(--S1-1);
	flex-direction: column; /* 하트와 LikeCount를 수직으로 정렬 */
	margin-right: 50px;
`;

export const LikeCount = styled.div`
	margin-top: 9px; /* 하트와의 간격을 9px로 설정 */
	color: var(--NS-Main1);
	font: var(--S1);
`;
