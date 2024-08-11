import { baseAPI } from '../customApi';

export const getUsername = async ({ username }: { username: string }) => {
  try {
    const response = await baseAPI.get(
      `/auth/check/username?username=${username}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
