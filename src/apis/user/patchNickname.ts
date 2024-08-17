import { authAPI } from '../customApi';

export const patchNickname = async (newNickname: string) => {
  try {
    const response = await authAPI().patch('/api/v1/user/nickname', {
      nickname: newNickname,
    });
    if (response.data?.check) {
      return response.data.information; // 닉네임 변경 성공 시 메시지 반환
    } else {
      throw new Error('닉네임 변경에 실패했습니다.');
    }
  } catch (error: any) {
    if (
      error.response?.status === 500 &&
      error.response?.data?.error === 'Internal Server Error'
    ) {
      // 서버에서 발생한 오류가 닉네임 중복일 때
      throw new Error('이미 사용 중인 닉네임입니다.');
    } else {
      console.error('Failed to change nickname:', error);
      throw error;
    }
  }
};
