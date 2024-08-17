import { authAPI } from '../customApi';
import { TGetThemeParams, TThemeDetailResponse } from '@/types/mytype';

export const getTheme = async (
	{ themeId, page, size, sortBy }: TGetThemeParams,
	handleUnauthorized: () => void
): Promise<TThemeDetailResponse | undefined> => {
	try {
		const response = await authAPI(handleUnauthorized).get(
			`/api/v1/theme/${themeId}?page=${page}&size=${size}&sortBy=${sortBy}`
		);
		if (response.data.check) {
			return response.data.information as TThemeDetailResponse;
		} else {
			console.error('API 응답이 올바르지 않습니다.');
			return undefined;
		}
	} catch (e) {
		console.log('API 호출 오류:', e);
		return undefined;
	}
};

