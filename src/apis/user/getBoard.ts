import { authAPI } from '../customApi';
import { TPost } from '@/types/mypost/post';
import { TPagination } from '@/types/pagination';

export const getBoard = async (
  excludeTemporary: boolean,
  sortType: string, // 정렬 기준 ('date', 'likes' 등)
  pageNum: number, // 페이지 번호
  handleUnauthorized: () => void,
): Promise<{ posts: TPost[]; pageInfo: TPagination }> => {
  try {
    const sortBy = sortType === 'likes' ? 'like' : sortType;

    console.log('API 요청 파라미터:', { sortBy, pageNum }); // 여기에 로그 추가

    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/board`,
      {
        params: {
          filterDrafts: excludeTemporary,
          sortBy,
          page: pageNum, // 페이지 번호 전달
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

      const pageInfo: TPagination = {
        pageNumber: response.data.information.pageInfo.pageNumber,
        pageSize: response.data.information.pageInfo.pageSize,
        totalElements: response.data.information.pageInfo.totalElements,
        totalPages: response.data.information.pageInfo.totalPages,
      };

      console.log('페이지 정보:', pageInfo); // 페이지 정보 로그 추가

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
