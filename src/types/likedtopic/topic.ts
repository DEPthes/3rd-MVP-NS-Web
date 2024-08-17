export type TTopic = {
  themeId: number; // 주제 ID
  theme: string; // 주제명
  date: string; // 주제 발행일
  countLike: number; // 주제 좋아요 수
  countBoard: number; // 주제를 좋아요한 사용자 수
};

export type TToicSortType = 'currentLike' | 'date' | 'like' | 'board';
