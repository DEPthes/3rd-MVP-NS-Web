import { authAPI } from '../customApi';
import { TDraftResponse, TPostDraftRequest } from '@/types/mytype';

export const postDraft = async (
  data: TPostDraftRequest,
  handleUnauthorized: () => void,
): Promise<TDraftResponse | undefined> => {
  try {
    const response = await authAPI(handleUnauthorized).post(
      `/api/v1/board/draft`,
      data,
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
