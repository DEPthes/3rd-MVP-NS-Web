import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export const TopicBox = styled.div`
	background-color: var(--NS-White);
	border-radius: 40px;
	padding: 20px;
	text-align: center;
	box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
	width: 1170px;
	margin-top: 96px;
	margin-bottom: 20px;
	height: 251px;
	margin: 0 auto;

	${isMobile} {
		width: 328px;
		height: 138px;
		border-radius: 20px;
	}

	${isTablet} {
		width: 728px;
		height: 138px;
		border-radius: 20px;
	}
`;

export const Header = styled.div`
	color: var(--NS-Main1);
	margin-bottom: 10px;
	font: var(--LogoSmall);

	${isMobileOrTablet} {
		font: var(--Hy1);
		margin-bottom: 2px;
	}
`;

export const TopicHeader = styled.div`
	font: var(--T1-1);
	color: var(--NS-Main1);
	margin-bottom: 10px;

	${isMobileOrTablet} {
		font: var(--W1);
		margin-bottom: 2px;
	}
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
	font: var(--S1-1);

	${isMobileOrTablet} {
		font: var(--P-S2-2);
	}
`;

export const LikeContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	color: var(--NS-Main2);
	font: var(--S1-1);

	${isMobileOrTablet} {
		font: var(--P-S2-2);
	}

	svg {
		width: 24px;
		height: 24px;

		${isTablet} {
			width: 10px;
			height: 10px;
		}

		${isMobile} {
			width: 10px;
			height: 10px;
		}
	}
`;

export const TopicLikeCount = styled.div`
	margin-left: 4px;
	margin-right: 31px;
	color: var(--NS-Main2);
	font: var(--S1-1);

	${isMobileOrTablet} {
		font: var(--P-S2-2);
	}
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

	${isMobileOrTablet} {
		width: 254px;
		height: 38px;
		font: var(--P-S1);
		margin-top: 12px;
		margin-bottom: 20px;
	}
`;

export const ListHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1170px;
	margin-bottom: 20px;

	${isMobileOrTablet} {
		flex-direction: column; /* 세로로 나열 */
		align-items: flex-start; /* 왼쪽 정렬 */
		width: 100%; /* 가로 전체 사용 */
		margin-bottom: 10px; /* 모바일/테블릿에서 아래 간격 조정 */
	}
`;

export const ListTitle = styled.div`
	font: var(--H2);
	color: var(--NS-White);
	width: 110px;
	height: 22px;
	margin-top: 59px;

	${isMobileOrTablet} {
		margin-top: 24px; /* 모바일/테블릿에서 위 간격 제거 */
		margin-bottom: 8px; /* 제목과 정렬 옵션 사이에 간격 추가 */
		font: var(--W1);
	}
`;

export const SortOptions = styled.div`
	display: flex;
	gap: 10px;
	margin-left: auto;
	font: var(--S1);
	width: 122px;
	height: 19px;
	margin-top: 59px;

	${isMobileOrTablet} {
		width: auto;
		height: auto;
		margin-left: 0;
		margin-top: 0;
		align-self: flex-end; /* 오른쪽 정렬 */
	}
`;

export const SortOption = styled.div<{ isSelected: boolean }>`
	font: var(--S1);
	color: ${({ isSelected }) => (isSelected ? 'var(--NS-Main1)' : 'var(--NS-White)')};
	cursor: pointer;
	&:hover {
		color: var(--NS-Main1);
	}
	&:active {
		color: var(--NS-Main1);
	}
	${isMobileOrTablet}{
		font: var(--Hy2);
		margin-bottom: 10px;
	}
`;


export const PostList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 1170px;
	height: 172px;
	margin: 0 auto;

	${isMobileOrTablet} {
		align-items: center; /* 모바일과 테블릿에서 중앙에 배치 */
		width: 100%; /* 전체 너비 사용 */
	}
`;

export const PostBox = styled.div`
	background-color: var(--NS-White);
	border-radius: 40px;
	padding: 20px;
	box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
	position: relative;
	height: 172px;
	width: 1170px;
	gap: 22px;

	${isMobile} {
		width: 320px;
		height: 64px;
		border-radius: 20px;
		margin-bottom: 10px;
	}
	${isTablet} {
		width: 728px;
		height: 64px;
		border-radius: 20px;
		margin-bottom: 10px;
	}
`;

export const PostTitle = styled.div`
	font: var(--H3);
	width: 264px;
	min-height: 33px;
	margin-bottom: 20px;
	margin-top: 36px;
	margin-left: 46px;
	cursor: pointer;
	&:hover {
		color: var(--NS-Main1);
	}

	${isMobileOrTablet} {
		font: var(--P-S1);
		margin-left: 20px;
		margin-top: -3px; /* 위쪽 마진 줄이기 */
		margin-bottom: 10px; /* 아래쪽 마진 줄이기 */
		width: 100%; /* 박스 내부 너비 맞추기 */
	}
`;

export const PostContent = styled.div`
	font: var(--T4);
	color: var(--NS-Black);
	white-space: pre-wrap;
	margin-bottom: 34px;
	margin-top: 13px;
	margin-left: 46px;
	width: 980px;
	min-height: 56px;

	${isMobileOrTablet} {
		font: var(--P-S2-2);
		margin-left: 20px;
		margin-right: 72px;
		margin-top: -20px; 
		margin-bottom: 1px; 
		width: 228px; 
		min-height: 20px;
	}
`;

export const PostInfo = styled.div`
	width: 154px;
	height: 28px;
	color: gray;
	font: var(--W4);
	position: absolute;
	bottom: 10px;
	right: 20px;

	${isMobileOrTablet} {
		display: none;
	}
`;

export const LikeButton = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	position: absolute;
	margin-right: 3px;
	top: 20px;
	right: 20px;
	cursor: pointer;

	img {
		width: 35px;
		height: 35px;

		${isMobileOrTablet} {
			width: 14px;
			height: 14px;
		}
	}
`;

export const PostLikeCount = styled.div`
	color: var(--NS-Main1);
	font: var(--S1);

	${isMobileOrTablet} {
		font: var(--T5-B);
	}
`;

