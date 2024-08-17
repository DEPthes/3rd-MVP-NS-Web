import { authAPI } from '../customApi';
//import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import { UserProfileResponse } from '@/types/mytype';

export const getProfile = async (
	handleUnauthorized: () => void
): Promise<UserProfileResponse | undefined> => {
	try {
		const response = await authAPI(handleUnauthorized).get('/api/v1/user/profile');
		if (response.data.check) {
			return response.data;
		} else {
			console.error('API 응답이 올바르지 않습니다.');
			return undefined;
		}
	} catch (error) {
		console.error('프로필 정보를 가져오는 중 오류가 발생했습니다:', error);
		handleUnauthorized();
		return undefined;
	}
};

