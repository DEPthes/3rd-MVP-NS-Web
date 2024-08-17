import { authAPI } from '../customApi';
import { TPost } from '@/types/mypost/post';
import { TPagination } from '@/types/pagination';

export const getBoard = async (
  excludeTemporary: boolean,
  sortType: string,
  pageNum: number, // 페이지 번호 추가
  handleUnauthorized: () => void,
): Promise<{ posts: TPost[]; pageInfo: TPagination }> => {
  try {
    console.log('파라미터:', {
      filterDrafts: excludeTemporary,
      sort: sortType,
      pageNum, // 페이지 번호 포함
    });

    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/board`,
      {
        params: {
          filterDrafts: excludeTemporary,
          sort: sortType,
          page: pageNum, // 페이지 번호를 API에 전달
        },
      },
    );

    console.log('API response:', response.data);

    if (response.data?.check) {
      const posts = response.data.information.resList.map((post: TPost) => ({
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
      console.error('Failed to fetch user board data');
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
    console.error('Failed to fetch user board data:', error);
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
