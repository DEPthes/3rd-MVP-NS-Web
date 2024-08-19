import { authAPI } from '../customApi';

export const getprofile = async (
	nickname: string,
	handleUnauthorized: () => void,
): Promise<number | undefined> => {
	try {
		const response = await authAPI(handleUnauthorized).get(
			`/api/v1/user/id?nickname=${nickname}`,
		);
		if (response.data.check) {
			return response.data.userId;
		} else {
			console.error('유저 아이디를 가져오는 데 실패했습니다.');
			return undefined;
		}
	} catch (error) {
		console.error('API 호출 중 오류 발생:', error);
		return undefined;
	}
};




