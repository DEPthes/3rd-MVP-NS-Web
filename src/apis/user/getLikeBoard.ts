import { authAPI } from '../customApi';
import { TPost } from '@/types/mypost/post';
import { TPagination } from '@/types/pagination';

export const getLikeBoard = async (
  sortBy: string, // 정렬 기준 (date, like 등)
  page: number, // 페이지 번호
  handleUnauthorized: () => void,
): Promise<{ posts: TPost[]; pageInfo: TPagination }> => {
  try {
    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/like/board`,
      {
        params: {
          sortBy, // 'sortBy'로 수정
          page, // 페이지 번호를 API에 전달
        },
      },
    );

    if (response.data?.check) {
      const resList = response.data.information?.resList ?? []; // 응답 데이터에서 게시글 리스트 추출
      console.log('resList:', resList); // 디버깅용 로그

      const posts = resList.map((post: TPost) => ({
        boardId: post.boardId,
        title: post.title,
        createdDate: post.createdDate,
        theme: post.theme,
        published: post.published,
        countLike: post.countLike,
      }));

      const pageInfo = response.data.information.pageInfo;
      console.log('Mapped Posts:', posts); // 디버깅용 로그
      console.log('Page Info:', pageInfo); // 디버깅용 로그

      return { posts, pageInfo };
    } else {
      console.error('Failed to fetch liked board data');
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
    console.error('Failed to fetch liked board data:', error);
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
