import { authAPI } from '@/apis/customApi';

export const postPassword = async (password: string) => {
  try {
    const response = await authAPI().post('/api/v1/user/check/password', {
      password,
    });
    return response.data;
  } catch (error: any) {
    console.error('비밀번호 확인 실패:', error);
    throw new Error('비밀번호가 일치하지 않습니다.');
  }
};
