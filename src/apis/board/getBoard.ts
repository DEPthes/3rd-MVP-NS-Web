import { authAPI } from '../customApi';
import { TBoardDetailResponse } from '@/types/mytype';
//import { useHandleUnauthorized } from '@/utils/handleUnauthorized';

export const getBoard = async (
  boardId: number,
  handleUnauthorized: () => void,
): Promise<TBoardDetailResponse | undefined> => {
  try {
    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/board/${boardId}`,
    );
    if (response.data.check) {
      return response.data.information; // information 안의 데이터를 반환한다.
    } else {
      console.error('API 응답이 올바르지 않습니다.');
      return undefined;
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
