import { baseAPI } from '../customApi';

export const searchNickname = async (nickname: string) => {
  try {
    const response = await baseAPI.get(`/api/v1/user/nickname`, {
      params: { nickname },
    });
    return response.data;
  } catch (e) {
    console.error('Failed to search nickname:', e);
    return undefined;
  }
};
