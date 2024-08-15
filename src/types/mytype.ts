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


