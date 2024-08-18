import { authAPI } from '../customApi';
import { TTopic } from '@/types/likedtopic/topic';
import { TPagination } from '@/types/pagination';

export const getLikeTheme = async (
  sortBy: string, // 정렬 기준 ('currentLike', 'date', 'like', 'board')
  page: number, // 페이지 번호
  handleUnauthorized: () => void,
): Promise<{ topics: TTopic[]; pageInfo: TPagination }> => {
  try {
    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/like/theme`,
      {
        params: {
          sort: sortBy,
          page, // 페이지 번호를 API에 전달
        },
      },
    );

    if (response.data?.check) {
      const boardLikeResList =
        response.data.information?.boardLikeResList ?? [];
      const topics = boardLikeResList.map((topic: TTopic) => ({
        themeId: topic.themeId,
        theme: topic.theme,
        date: topic.date,
        countLike: topic.countLike,
        countBoard: topic.countBoard, // 게시글 수 필드 수정
      }));

      const pageInfo = response.data.information.pageInfo;

      return { topics, pageInfo };
    } else {
      console.error('Failed to fetch liked themes data');
      return {
        topics: [],
        pageInfo: {
          pageNumber: 0,
          pageSize: 0,
          totalElements: 0,
          totalPages: 0,
        },
      };
    }
  } catch (error) {
    console.error('Failed to fetch liked themes data:', error);
    return {
      topics: [],
      pageInfo: {
        pageNumber: 0,
        pageSize: 0,
        totalElements: 0,
        totalPages: 0,
      },
    };
  }
};
