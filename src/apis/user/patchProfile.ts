import { authAPI } from '@/apis/customApi';

export const patchProfile = async (isDefault: boolean, image: File | null) => {
  const formData = new FormData();

  formData.append('isDefault', String(isDefault));

  if (image !== null) {
    formData.append('image', image);
  }

  try {
    const response = await authAPI().patch('/api/v1/user/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('프로필 업데이트 실패:', error);
    throw error;
  }
};
