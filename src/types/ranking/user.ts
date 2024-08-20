export type TUser = {
  userId: number;
  nickname: string;
  imageUrl: string;
  point: number;
  isCurrentUser: boolean;
  ranking: number;
};

export type TRankUser = {
  userId: number;
  nickname: string;
  point: number;
  isCurrentUser: boolean;
  ranking: number;
};

export type TSortType = 'total' | 'daily' | 'weekly' | 'monthly';
