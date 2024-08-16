export interface TTodayThemeResponse {
	content: string;
	userId: number | null;
	likedTheme: boolean;
}

export interface TPostDraftResponse {
	check: boolean;
	information: string;
}

export interface TPostDraftRequest {
	boardId?: number;
	title: string;
	content: string;
	themeId: number;
}
export interface TThemeListResponse {
	content: string;
	date: string;
	likeCount: number;
	boardCount: number;
}
export type TLikeState = {
	[key: string]: boolean;
};


// (3-4)에서 API 요청 파라미터 타입 정의
export interface TGetThemeParams {
	themeId: number;
	page: number;
	size: number;
	sortBy: 'date' | 'likeCount';
}

// 게시글 정보 타입 정의
export interface TBoard {
	boardId: number;
	title: string;
	content: string;
	nickname: string;
	date: string;
	likeCount: number;
}

// 주제 상세 조회 응답 타입 정의
export interface TThemeDetailResponse {
	userId: number | null;
	likedTheme: boolean;
	content: string;
	date: string;
	likeCount: number;
	boards: TBoard[];
}
export interface TBoardDetailResponse {
	userId: number | null;
	owner: boolean;
	likedBoard: boolean;
	likedTheme: boolean;
	nickname: string;
	imageUrl: string;
	themeContent: string;
	boardTitle: string;
	boardContent: string;
}

export interface TPostLikeResponse {
	liked: boolean;
}
export interface TBoardLikeResponse {
	liked: boolean;
}





