import { baseAPI } from '../customApi';

export const getNickname = async ({ nickname }: { nickname: string }) => {
  try {
    const response = await baseAPI.get(
      `/auth/check/nickname?nickname=${nickname}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
