import { authAPI } from '../customApi';
import { TPost } from '@/types/mypost/post';
import { TPagination } from '@/types/pagination';

export const getLikeBoardSearch = async (
  keyword: string,
  sortBy: string, // 정렬 기준 (currentLike, date, like)
  page: number, // 페이지 번호
  handleUnauthorized: () => void,
): Promise<{ posts: TPost[]; pageInfo: TPagination }> => {
  try {
    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/like/board/search`,
      {
        params: {
          keyword,
          sort: sortBy,
          page, // 페이지 번호를 API에 전달
        },
      },
    );

    if (response.data?.check) {
      const boardLikeResList =
        response.data.information?.boardLikeResList ?? []; // nullish 병합 연산자를 사용하여 undefined 방지
      const posts = boardLikeResList.map((post: TPost) => ({
        boardId: post.boardId,
        title: post.title,
        createdDate: post.createdDate,
        theme: post.theme,
        published: post.published,
        countLike: post.countLike,
      }));

      const pageInfo = response.data.information.pageInfo;

      return { posts, pageInfo };
    } else {
      console.error('Failed to fetch liked board search results');
      return {
        posts: [],
        pageInfo: {
          pageNumber: 0,
          pageSize: 0,
          totalElements: 0,
          totalPages: 0,
        },
      };
    }
  } catch (error) {
    console.error('Failed to fetch search results:', error);
    return {
      posts: [],
      pageInfo: {
        pageNumber: 0,
        pageSize: 0,
        totalElements: 0,
        totalPages: 0,
      },
    };
  }
};
