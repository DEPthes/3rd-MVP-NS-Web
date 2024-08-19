import { authAPI } from '../customApi';
import { TUserProfileResponse } from '@/types/mytype';

export const getProfile = async (
	userId: number,
	handleUnauthorized: () => void,
): Promise<TUserProfileResponse | undefined> => {
	try {
		const response = await authAPI(handleUnauthorized).get(
			`/api/v1/user/profile/${userId}`,
		);
		console.log("API 응답 데이터:", response.data);  // 응답 데이터 확인

		if (response.data.check) {
			return response.data; // 전체 정보를 반환
		} else {
			console.error('유저 프로필을 가져오는 데 실패했습니다.');
			return undefined;
		}
	} catch (error) {
		console.error('API 호출 중 오류 발생:', error);
		return undefined;
	}
};




