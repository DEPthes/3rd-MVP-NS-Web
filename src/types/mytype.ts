// 오늘의 주제 API 응답 타입 정의
export interface TTodayThemeResponse {
  content: string;
  userId: number | null;
  likedTheme: boolean;
  themeId: number;
}

// 게시글 임시 저장/게시 API 요청과 응답 타입 정의
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

// 주제 목록의 개별 항목 타입 정의
export interface TTheme {
  themeId: number; // 주제 ID
  content: string;
  date: string;
  likeCount: number;
  likedTheme: boolean;
  boardCount: number;
}

// 주제 목록 조회 API 전체 응답 타입 정의
export interface TThemeListResponse {
  check: boolean;
  information: {
    pageInfo: {
      pageNumber: number;
      pageSize: number;
      totalElements: number;
      totalPages: number;
    };
    themeList: TTheme[]; // resList를 themeList로 수정합니다.
    userId: number;
  };
}

// 좋아요 상태 관리 타입 정의
export type TLikeState = {
  [key: string]: boolean;
};

// 주제 상세 조회 API 요청 파라미터 타입 정의
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
  themeId: number; // 주제 ID 추가
  pageInfo: {
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
  };
  userId: number | null;
  likedTheme: boolean;
  content: string;
  date: string;
  likeCount: number;
  boards: Array<{
    boardId: number;
    title: string;
    content: string;
    nickname: string;
    date: string;
    likeCount: number;
    likedBoard: boolean;
  }>;
}

// 게시글 상세 조회 응답 타입 정의
export interface TBoardDetailResponse {
  boardTitle: string;
  boardContent: string;
  nickname: string;
  imageUrl: string;
  themeId: number;
  likedTheme: boolean;
  likedBoard: boolean;
  owner: boolean;
  themeContent: string;
  published: boolean;
  userId: boolean;
  // 기타 필요한 필드들
}

// 좋아요 API 응답 타입 정의
export interface TPostLikeResponse {
  liked: boolean;
}

export interface TBoardLikeResponse {
  liked: boolean;
}

export interface UserProfileResponse {
  check: boolean;
  information: {
    userId: number;
    nickname: string;
    imageUrl: string;
  };
}
