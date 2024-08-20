export type TPost = {
  boardId: number; // 게시글 ID (API에서 사용)
  title: string; // 게시글 제목
  createdDate: string; // 발행일자
  theme: string; // 주제명
  published: boolean; // 발행 여부
  countLike: number; // 좋아요 수
  liked: boolean;
};

// 정렬 타입 정의
export type TMyPostSortType = 'date' | 'likes';
