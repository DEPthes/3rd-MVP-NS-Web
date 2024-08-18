import { authAPI } from '../customApi';

export const postBoardLike = async (
  boardId: number,
  handleUnauthorized: () => void,
): Promise<boolean | undefined> => {
  try {
    const response = await authAPI(handleUnauthorized).post(
      `/api/v1/board/${boardId}/like`,
    );
    if (response.data.check) {
      return response.data.information.liked;
    } else {
      console.error('좋아요 처리 실패:', response.data);
      return undefined;
    }
  } catch (e) {
    console.error('API 호출 중 오류 발생:', e);
    return undefined;
  }
};
