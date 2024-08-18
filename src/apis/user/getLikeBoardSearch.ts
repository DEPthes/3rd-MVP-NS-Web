import { authAPI } from '../customApi';
import { TPost } from '@/types/mypost/post';
import { TPagination } from '@/types/pagination';

export const getLikeBoardSearch = async (
  keyword: string, // 검색 키워드
  sortBy: string, // 정렬 기준 (date, like 등)
  page: number, // 페이지 번호
  handleUnauthorized: () => void,
): Promise<{ posts: TPost[]; pageInfo: TPagination }> => {
  try {
    // API 호출
    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/like/board/search`,
      {
        params: {
          keyword, // 검색 키워드
          sort: sortBy, // 정렬 기준
          page, // 페이지 번호
        },
      },
    );

    console.log('Search API response:', response.data); // 응답 데이터 로그

    if (response.data?.check) {
      // 응답 데이터에서 게시글 리스트 추출
      const resList = response.data.information?.resList ?? []; // 수정된 부분

      // 게시글 리스트 매핑
      const posts = resList.map((post: TPost) => ({
        boardId: post.boardId,
        title: post.title,
        createdDate: post.createdDate,
        theme: post.theme,
        published: post.published, // published 필드가 없는 경우는 기본값 처리 필요
        countLike: post.countLike,
      }));

      // 페이지 정보 추출
      const pageInfo = response.data.information.pageInfo;
      console.log('Mapped Posts:', posts); // 매핑된 게시글 로그
      console.log('Page Info:', pageInfo); // 페이지 정보 로그

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
