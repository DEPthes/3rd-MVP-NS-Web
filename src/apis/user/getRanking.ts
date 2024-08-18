import { baseAPI } from '../customApi';

export const getRanking = async (
  type: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'TOTAL',
) => {
  try {
    const response = await baseAPI.get(`/api/v1/user/ranking`, {
      params: { type }, // 쿼리 파라미터로 type을 전달
    });
    return response.data;
  } catch (e) {
    console.error(`Failed to fetch ${type} ranking data:`, e);
    return undefined;
  }
};
