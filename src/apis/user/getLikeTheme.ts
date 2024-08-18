import { authAPI } from '../customApi';
import { TTopic } from '@/types/likedtopic/topic';
import { TPagination } from '@/types/pagination';

export const getLikeTheme = async (
  sortBy: string, // 정렬 기준 ('currentLike', 'date', 'like', 'board')
  page: number, // 페이지 번호
  handleUnauthorized: () => void,
): Promise<{ topics: TTopic[]; pageInfo: TPagination }> => {
  try {
    // API 호출
    const response = await authAPI(handleUnauthorized).get(
      `/api/v1/user/like/theme`,
      {
        params: {
          sortBy, // 정렬 기준
          page, // 페이지 번호
        },
      },
    );

    console.log('API response:', response.data); // 응답 데이터 로그

    if (response.data?.check) {
      // 응답 데이터에서 주제 리스트 추출
      const resList = response.data.information?.resList ?? []; // 수정된 부분

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
