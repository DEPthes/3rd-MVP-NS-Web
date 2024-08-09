export type TReport = {
  id: number;
  title: string; //주제
  length: number; //작성된 글 개수
  image: string; //단어 요약 이미지
  word: string; //사용자가 가장 많이 쓴 단어
  wordLength: number; //단어 노출 수
  longImage: string; //가장 길게 쓴 사람 프로필 사진
  longNickname: string; //가장 길게 쓴 사람 닉네임
  longLength: number; //가장 길게 쓴 사람이 쓴 글자수
  best: TReportBest[];
};

export type TReportBest = {
  postId: number; //글 id
  profileId: number; //프로필 id
  image: string; //프로필
  nickname: string; //닉네임
  subject: string; //주제
  date: string; //발행일
  title: string; //제목
  heart: number; //좋아요 수
  selectLength: number; //선정된 횟수
};
