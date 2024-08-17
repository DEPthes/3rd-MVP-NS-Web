import { authAPI } from '../customApi';
import { TTodayThemeResponse } from '@/types/mytype';

export const getToday = async (handleUnauthorized: () => void): Promise<TTodayThemeResponse | undefined> => {
	try {
		const response = await authAPI(handleUnauthorized).get(`/api/v1/theme/today`);
		if (response.data.check) {
			return response.data.information; // information 안의 데이터를 반환한다.
		} else {
			console.error('API 응답이 올바르지 않습니다.');
			return undefined;
		}
	} catch (e) {
		console.log(e);
		return undefined;
	}
};
