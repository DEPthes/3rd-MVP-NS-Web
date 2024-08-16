import { authAPI } from '../customApi';
import { TThemeListResponse } from '@/types/mytype';

export const getSearch = async (
	keyword: string,
	page: number,
	size: number,
	sortBy: 'date' | 'likeCount' | 'boardCount',
	handleUnauthorized: () => void
): Promise<TThemeListResponse[] | undefined> => {
	try {
		const response = await authAPI(handleUnauthorized).get(`/api/v1/theme/search`, {
			params: { keyword, page, size, sortBy }
		});

		console.log('API 응답:', response.data); // 응답 데이터 확인용 로그

		if (response.data.check) {
			return response.data.information;
		} else {
			console.error('API 응답이 올바르지 않습니다:', response.data);
			return undefined;
		}
	} catch (e) {
		console.error('API 호출 중 오류 발생:', e); // 에러 내용을 상세히 로깅
		return undefined;
	}
};
