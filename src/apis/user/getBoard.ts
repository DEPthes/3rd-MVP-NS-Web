import { authAPI } from '../customApi';
import { TPost } from '@/types/mypost/post';
import { TPagination } from '@/types/pagination';

export const getBoard = async (
  excludeTemporary: boolean,
  sortType: string, // 정렬 기준
  pageNum: number, // 페이지 번호
  handleUnauthorized: () => void,
): Promise<{ posts: TPost[]; pageInfo: TPagination }> => {
  try {
    const sortBy = sortType === 'likes' ? 'like' : sortType;

    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/board`,
      {
        params: {
          filterDrafts: excludeTemporary,
          sortBy,
          page: pageNum,
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
        liked: post.liked,
      }));

      const pageInfo: TPagination = {
        pageNumber: response.data.information.pageInfo.pageNumber,
        pageSize: response.data.information.pageInfo.pageSize,
        totalElements: response.data.information.pageInfo.totalElements,
        totalPages: response.data.information.pageInfo.totalPages,
      };

      return { posts, pageInfo };
    } else {
      console.error('게시판 데이터 불러오기 실패');
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
    console.error('게시판 데이터 불러오기 중 오류 발생:', error);
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
