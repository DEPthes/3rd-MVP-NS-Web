import { authAPI } from '../customApi';
import { TPostDraftRequest } from '@/types/mytype';

export const postPublish = async (
  data: TPostDraftRequest,
  handleUnauthorized: () => void,
): Promise<
  | {
      check: boolean;
      information: { message: string; firstPost: boolean };
    }
  | undefined
> => {
  try {
    const response = await authAPI(handleUnauthorized).post(
      `/api/v1/board/publish`,
      data,
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
