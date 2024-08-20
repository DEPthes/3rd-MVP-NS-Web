export type TReport = {
  selectedDate: number[];
  themeName: string | null; //주제
  writtenTotal: number | null; //작성된 글 개수
  wordCloud: string | null; //단어 요약 이미지
  topWord: string | null; //사용자가 가장 많이 쓴 단어
  count: number | null; //단어 노출 수
  longestWriter: TLongestWriter | null;
  bestPost: TReportBest[] | null;
};

export type TReportToday = {
  selectedDate: number[];
  themeName: string | null; //주제
  writtenTotal: number | null; //작성된 글 개수
  longestWriter: TLongestWriter | null; //가장 길게 쓴 사람
};

export type TLongestWriter = {
  userId: number | null; //가장 길게 쓴 사람 아이디
  isCurrentUser: boolean | null; //가장 길게 쓴 사람 본인 여부
  nickname: string | null; //가장 길게 쓴 사람 닉네임
  imageUrl: string | null; //가장 길게 쓴 사람 프로필 사진
  length: number | null; //가장 길게 쓴 사람이 쓴 글자수
};

export type TReportBest = {
  isCurrentUser: boolean | null; //본인 여부
  userId: number | null; //프로필 id
  nickname: string | null; //닉네임
  imageUrl: string | null; //프로필
  title: string | null; //제목
  likeCount: number | null; //좋아요 수
  bestSelectionCount: number | null; //선정된 횟수
  boardId: number | null; //글 id
  boardCreatedAt: string | null; //발행일
  isLiked: boolean; //좋아요 여부
};
