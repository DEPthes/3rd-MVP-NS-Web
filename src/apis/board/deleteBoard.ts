// src/apis/board/deleteBoard.ts
import { authAPI } from '../customApi';

export const deleteBoard = async (boardId: number, handleUnauthorized: () => void): Promise<boolean> => {
	try {
		const response = await authAPI(handleUnauthorized).delete(`/api/v1/board/${boardId}`);
		if (response.data.check) {
			return true;
		} else {
			console.error('게시글 삭제 실패:', response.data.information);
			return false;
		}
	} catch (e) {
		console.error('API 호출 중 오류 발생:', e);
		return false;
	}
};

