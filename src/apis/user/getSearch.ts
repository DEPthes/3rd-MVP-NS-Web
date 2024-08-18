import { authAPI } from '../customApi';
import { TPost } from '@/types/mypost/post';
import { TPagination } from '@/types/pagination';

export const getSearch = async (
  keyword: string,
  filterDrafts: boolean = false,
  sortBy: string = 'date',
  page: number = 1,
  handleUnauthorized: () => void,
): Promise<{ posts: TPost[]; pageInfo: TPagination }> => {
  try {
    const sortType = sortBy === 'likes' ? 'like' : sortBy;

    console.log('Requesting search with sortBy:', sortType); // 요청 전 sortBy 로그
    console.log('Requesting search with page:', page); // 요청 전 page 로그

    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/board/search`,
      {
        params: {
          keyword,
          filterDrafts,
          sortBy: sortType, // 변환된 정렬 기준 전달
          page,
        },
      },
    );

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
