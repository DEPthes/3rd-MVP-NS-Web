import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

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
	${isMobileOrTablet}{
		width: 150px;
		height: 150px;
	}
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
	${isMobileOrTablet}{
		font: var(--H2);
		margin-top:12px;
		margin-bottom: 32px;
	}
`;

export const PostBox = styled.div`
	background-color: #ffffff;
	background-color: var(--NS-White);
	border-radius: 40px;
	padding: 20px;
	width: 1170px;
	height: 172px;
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
	${isMobile}{
		width: 328px;
		height: auto; 
		border-radius: 20px;
		margin-bottom: 12px;
		padding: 10px; 
	}
	${isTablet}{
		width: 728px;
		height: auto;
		border-radius: 20px;
		margin-bottom: 12px;
		padding: 15px; 
	}
`;

export const PostInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%; 
	overflow: ellipsis;
	margin-left: 20px;
	${isMobileOrTablet}{
		margin-top: 0;
		margin-left: 20px;
	}
`;

export const PostTitle = styled.div`
	width: 100%;
	color: var(--NS-Black);
	font: var(--H3);
	margin-top: 10px;
	margin-left: 10px;
	${isMobileOrTablet}{
		font: var(--P-S1);
		margin-top: 5px;
		margin-left: 0;
		overflow-wrap: break-word; /* 긴 단어가 박스를 넘어가지 않도록 줄바꿈 처리 */
	}
`;

export const PostContent = styled.div`
	color: var(--NS-Black);
	width: 100%;
	margin-top: 10px;
	margin-left: 10px;
	font: var(--T4);
	${isMobileOrTablet}{
		font: var(--P-T3);
		color: var(--Gray2);
		margin-top: 5px;
		margin-left: 0;
		overflow-wrap: break-word; 
	}
`;

export const LikeContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	color: var(--NS-Main1);
	font: var(--S1-1);
	flex-direction: column; 
	margin-right: 20px;
	width: 50px;
	img {
		width: 35px;
		height: 35px;

		${isMobileOrTablet} {
			width: 14px;  
			height: 14px;
		}
	}
`;

export const LikeCount = styled.div`
	margin-top: 5px; 
	color: var(--NS-Main1);
	font: var(--S1);
	${isMobileOrTablet}{
		font: var(--T5-B);
	}
`;
