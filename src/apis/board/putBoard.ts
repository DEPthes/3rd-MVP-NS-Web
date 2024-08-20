import { authAPI } from '../customApi';

export const putBoard = async (
  boardId: number,
  title: string,
  content: string,
  handleUnauthorized: () => void,
): Promise<{ check: boolean; information: string } | undefined> => {
  try {
    const response = await authAPI(handleUnauthorized).put(
      `/api/v1/board/${boardId}`,
      {
        title: title,
        content: content,
      },
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
