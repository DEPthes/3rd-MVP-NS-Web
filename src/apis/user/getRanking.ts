import { baseAPI, authAPI } from '../customApi';

export const getRanking = async (
  type: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'TOTAL',
  isLoggedIn: boolean,
) => {
  try {
    const api = isLoggedIn ? authAPI() : baseAPI; // 로그인 상태에 따라 API 선택
    const response = await api.get(`/api/v1/user/ranking`, {
      params: { type }, // 쿼리 파라미터로 type을 전달
    });
    return response.data;
  } catch (e) {
    console.error(`Failed to fetch ${type} ranking data:`, e);
    return undefined;
  }
};
