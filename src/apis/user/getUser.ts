import { authAPI } from '../customApi';
export const getUser = async (handleUnauthorized: () => void) => {
  try {
    const response = await authAPI(handleUnauthorized).get(`/api/v1/user`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
};
