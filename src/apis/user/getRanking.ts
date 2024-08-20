import { authAPI } from '../customApi';

export const getRanking = async (
  type: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'TOTAL',
  handleUnauthorized: () => void,
) => {
  try {
    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/ranking`,
      {
        params: { type }, // 쿼리 파라미터로 type을 전달
      },
    );
    return response.data;
  } catch (e) {
    console.error(`Failed to fetch ${type} ranking data:`, e);
    return undefined;
  }
};
