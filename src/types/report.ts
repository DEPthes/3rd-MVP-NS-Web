export type TReport = {
  selectedDate: number[];
  themeName: string; //주제
  writtenTotal: number; //작성된 글 개수
  wordCloud: string; //단어 요약 이미지
  topWord: string; //사용자가 가장 많이 쓴 단어
  count: number; //단어 노출 수
  longestWriter: TLongestWriter;
  bestPost: TReportBest[];
};

export type TReportToday = {
  selectedDate: number[];
  themeName: string; //주제
  writtenTotal: number; //작성된 글 개수
  longestWriter: null | TLongestWriter; //가장 길게 쓴 사람
};

export type TLongestWriter = {
  userId: number; //가장 길게 쓴 사람 아이디
  isCurrentUser: boolean; //가장 길게 쓴 사람 본인 여부
  nickname: string; //가장 길게 쓴 사람 닉네임
  imageUrl: string; //가장 길게 쓴 사람 프로필 사진
  length: number; //가장 길게 쓴 사람이 쓴 글자수
};

export type TReportBest = {
  isCurrentUser: boolean; //본인 여부
  userId: number; //프로필 id
  nickname: string; //닉네임
  imageUrl: string; //프로필
  title: string; //제목
  likeCount: number; //좋아요 수
  bestSelectionCount: number; //선정된 횟수
  boardId: number; //글 id
  boardCreatedAt: string; //발행일
};
