import { authAPI } from '../customApi';

export const postSignout = async (handleUnauthorized: () => void) => {
  try {
    const response = await authAPI(handleUnauthorized).post(`/auth/sign-out`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
