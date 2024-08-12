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

export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; 
`;

export const ProfileCircle = styled.div`
	width: 156px;
	height: 156px;
	background-color: var(--NS-White);
	border-radius: 50%;
	margin-bottom: 10px;
	cursor: pointer;
`;


export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;

export const ProfileNickname = styled.div`
	color: var(--NS-Black);
	font: var(--W1);
	width: 100%; /* 너비를 부모 요소에 맞추어 중앙 정렬 유지 */
	height: 19px;
	margin-top: 6px;
	text-align: center; /* 텍스트를 중앙 정렬 */
`;


export const Header = styled.div`
	color: var(--NS-White);
	margin-bottom: 7px;
	margin-top:48px;
	font: var(--LogoSmall);
`;

export const TopicTitle = styled.div`
	color: var(--NS-White);
	font: var(--H4-1);
	margin-top: 5px;
	margin-bottom: 9px;
	width:608px;
	min-height:38px;
`;

export const LikeContainer = styled.div`
	display: flex;
	align-items: center;
	width:126px;
	height:30px;
	cursor: pointer;
	margin-top: 9px;
`;

export const LikeText = styled.div`
	font: var(--S1);
	color: var(--NS-White);
	margin-left: 5px;
	margin-top: 14px;
	width: 126px;
	height:30px;
`;

export const LikeCount = styled.div`
	margin-left: 5px;
	color: var(--NS-Main1);
	font: var(--S1);
`;

export const PostBox = styled.div`
	background-color: #ffffff;
	border-radius: 40px;
	padding: 20px;
	box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
	background-color: var(--NS-White);
	position: relative;
	width: 1170px;
	height: 443px;
	display: flex;
	flex-direction: column;
	align-items: center; /* 수평 중앙 정렬 */
	text-align: center;
	margin-top: 20px;
`;

export const PostTitle = styled.div`
	font: var(--H3);
	width: 264px;
	min-height: 33px;
	margin-bottom: 29px;
	margin-top: 66px;
	text-align: center;
`;

export const PostContent = styled.div`
	font: var(--T4);
	color: var(--NS-Black);
	width: 1013px;
	min-height: 224px;
	margin-bottom: 91px;
	text-align: center;
`;

export const LikeButton = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 10px;
	right: 20px;
	cursor: pointer;
	margin-bottom: 19px;
	height: 30px;
	margin-right:26px ;
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
	margin-bottom: 20px;/*삭제 모달 창 아직 디자인 구현 안되어서 임시로 만들어 놓았습니다. 추후 수정 예정 */
`;
