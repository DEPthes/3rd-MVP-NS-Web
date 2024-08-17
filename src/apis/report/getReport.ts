import { authAPI } from '../customApi';

export const getReport = async (
  selectedDate: string,
  handleUnauthorized: () => void,
) => {
  try {
    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/report/${selectedDate}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
