import { authAPI } from '../customApi';
import { TTopic } from '@/types/likedtopic/topic';
import { TPagination } from '@/types/pagination';

export const getLikeThemeSearch = async (
  keyword: string, // 검색어
  sortBy: string, // 정렬 기준 ('currentLike', 'date', 'like', 'board')
  page: number, // 페이지 번호
  handleUnauthorized: () => void,
): Promise<{ topics: TTopic[]; pageInfo: TPagination }> => {
  try {
    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/like/theme/search`,
      {
        params: {
          keyword, // 검색어
          sortBy, // 정렬 기준
          page, // 페이지 번호를 API에 전달
        },
      },
    );

    if (response.data?.check) {
      // 응답 데이터에서 주제 리스트 추출
      const resList = response.data.information?.resList ?? []; // 올바른 필드 이름 사용

      // 주제 리스트 매핑
      const topics = resList.map((topic: TTopic) => ({
        themeId: topic.themeId,
        theme: topic.theme,
        date: topic.date,
        countLike: topic.countLike,
        countBoard: topic.countBoard, // 게시글 수 필드
      }));

      const pageInfo = response.data.information.pageInfo;
      console.log('Mapped Topics:', topics); // 매핑된 주제 로그
      console.log('Page Info:', pageInfo); // 페이지 정보 로그

      return { topics, pageInfo };
    } else {
      console.error('Failed to fetch liked themes search results');
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
    console.error('Failed to fetch liked themes search results:', error);
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
