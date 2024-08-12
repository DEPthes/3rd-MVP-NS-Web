import { TUser } from '../types/ranking/user';

export const UserList: TUser[] = [
  {
    userId: 'user123',
    userNickname: '집에가고싶다',
    profileImg: '/src/assets/icons/BlueHeart.svg',
    totalScore: 490,
    dailyScore: 20,
    weeklyScore: 150,
    monthlyScore: 300,
  },
  {
    userId: 'user456',
    userNickname: '일간1등',
    profileImg: '',
    totalScore: 355,
    dailyScore: 35,
    weeklyScore: 170,
    monthlyScore: 280,
  },
  {
    userId: 'user1',
    userNickname: '주간1등',
    profileImg: '',
    totalScore: 420,
    dailyScore: 25,
    weeklyScore: 180,
    monthlyScore: 260,
  },
];
