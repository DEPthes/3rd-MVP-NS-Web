export type TUser = {
  userId: string;
  userNickname: string;
  profileImg: string;
  totalScore: number; // 누적 점수
  dailyScore: number; // 일간 점수
  weeklyScore: number; // 주간 점수
  monthlyScore: number; // 월간 점수
};

export type SortType = 'total' | 'daily' | 'weekly' | 'monthly';
