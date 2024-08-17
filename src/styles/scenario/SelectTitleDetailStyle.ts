import styled from 'styled-components';
import { isMobileOrTablet } from '@/hooks/Media';

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

	${isMobileOrTablet} {
		flex-direction: column;
		align-items: center;
		width: 320px;
	}
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

	${isMobileOrTablet} {
		width: 100px; 
		height: 100px;
	}
`;

export const ProfileNickname = styled.div`
	color: var(--NS-Black);
	font: var(--W1);
	width: 100%;
	height: 19px;
	margin-top: 6px;
	text-align: center;

	${isMobileOrTablet} {
		font: var(--W1);
		margin-top: 8px;
		margin-bottom: 10px;
		color: var(--NS-White);
	}
`;



export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;

	${isMobileOrTablet} {
		margin-left: 0; 
		text-align: center;
		align-items: center;

		width: 320px;
		height: 92px;
		background-color: var(--NS-White);
		background-color: #ffff;
		box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
		border-radius: 20px;
		flex-direction: column;
		justify-content: center;
		padding: 10px;
		
		
	}
`;

export const Header = styled.div`
	color: var(--NS-White);
	margin-bottom: 5px; 
	margin-top: 40px;  
	font: var(--LogoSmall);

	${isMobileOrTablet} {
		color: var(--NS-Main1);
		margin-top: 16px; 
		margin-bottom: 4px; 
		font: var(--Hy1);
		text-align: center;
		width: 100%;
		overflow-wrap: break-word;
	}
`;

export const TopicTitle = styled.div`
	color: var(--NS-White);
	font: var(--H4-1);
	margin-top: 3px; 
	margin-bottom: 5px;  
	width: 608px;
	min-height: 38px;

	${isMobileOrTablet} {
		font: var(--W1);
		color: var(--NS-Main1);
		width: 100%;
		overflow-wrap: break-word;
		text-align: center;
		margin-top: 2px;  /* 모바일에서 위 여백 줄이기 */
		margin-bottom: 2px;  /* 모바일에서 아래 여백 줄이기 */
	}
`;

export const LikeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 126px;
	height: 30px;
	cursor: pointer;
	margin-top: 7px;

	svg {
		width: 30px;
		height: 30px;

		${isMobileOrTablet} {
			width: 16px;
			height: 16px;
		}
	}
	${isMobileOrTablet} {
		margin-top: -20px; 
	}
`;
export const LikeText = styled.div`
	font: var(--S1);
	color: var(--NS-White);
	margin-left: 5px;
	display: flex;
	align-items: center;
	height: 30px;

	${isMobileOrTablet} {
		font: var(--P-S3);
		color: var(--NS-Main5);
		margin-left: 5px;
	}
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
	align-items: center;
	text-align: center;
	margin-top: 20px;

	${isMobileOrTablet} {
		width: 320px; 
		height: 148px;
		padding: 21px;
		border-radius: 20px;
		margin-top: 10px;
	}
`;

export const PostTitle = styled.div`
	font: var(--H3);
	width: 264px;
	min-height: 33px;
	margin-bottom: 29px;
	margin-top: 66px;
	text-align: center;

	${isMobileOrTablet} {
		width: 100%; 
		margin-top: 10px;
		margin-bottom: 10px;
		font:var(--W1);
	}
`;

export const PostContent = styled.div`
	font: var(--T4);
	color: var(--NS-Black);
	max-width: 1013px;
	min-height: 224px;
	margin-bottom: 91px;
	text-align: center;
	

	${isMobileOrTablet} {
		width: 278px;
		min-height: 51px;
		margin-bottom: 10px;
		font: var(--Hy4);
	}
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
	margin-right: 26px;

	${isMobileOrTablet} {
		position: static; 
		margin-bottom: 20;
		margin-top: -11px; /* 피그처럼 11로하면 박스를 벗어남..? */
		justify-content: center; 
		width: 43px;
		height: 16px;
		margin-right: 117.5px;
		margin-left: 117.5px;
	}

	img {
		width: 30px;  
		height: 30px;

		${isMobileOrTablet} {
			width: 16px;  
			height: 16px;
		}
	}
`;

export const LikeCount = styled.div`
	margin-left: 5px;
	color: var(--NS-Main1);
	font: var(--S1);

	${isMobileOrTablet} {
		font: var(--T5-B);
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 10px;
	width: 1170px;
	margin-top: 20px;

	${isMobileOrTablet} {
		flex-direction: row;
		align-items: center;
		width: 320px;
		height: 30px;
		margin-top: 10px;
		justify-content: center;
	}
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
