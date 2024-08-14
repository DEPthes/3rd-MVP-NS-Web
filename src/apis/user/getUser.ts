import { authAPI } from '../customApi';
export const getUser = async () => {
  try {
    const response = await authAPI().get('/api/v1/user');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
};
