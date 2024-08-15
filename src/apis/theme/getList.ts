import { authAPI } from '../customApi';
import { TThemeListResponse } from '@/types/mytype';

export const getList = async (
	page: number,
	size: number,
	sortBy: 'date' | 'likeCount' | 'boardCount',
	handleUnauthorized: () => void
): Promise<TThemeListResponse[] | undefined> => {
	try {
		const response = await authAPI(handleUnauthorized).get(`/api/v1/theme/list`, {
			params: { page, size, sortBy }
		});

		console.log('API 응답:', response.data); // 응답 데이터 확인용 

		if (response.data.check) {
			return response.data.information;
		} else {
			console.error('API 응답이 올바르지 않습니다:', response.data);
			return undefined;
		}
	} catch (e) {
		console.error('API 호출 중 오류 발생:', e); // 에러 내용을 상세히 확인용임
		return undefined;
	}
};

