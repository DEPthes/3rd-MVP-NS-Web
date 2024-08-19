import { authAPI } from '../customApi';

export const getThemePast = async (
  themeId: number,
  handleUnauthorized: () => void,
) => {
  try {
    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/theme/${themeId}/past`,
    );
    if (response.data.check) {
      return response.data.information;
    } else {
      console.error('API 응답이 올바르지 않습니다.');
      return undefined;
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
