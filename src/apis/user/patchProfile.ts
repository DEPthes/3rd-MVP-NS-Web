import { authAPI } from '@/apis/customApi';

export const patchProfile = async (
  isDefault: boolean,
  image: File | null,
  handleUnauthorized: () => void,
) => {
  const formData = new FormData();

  formData.append(
    'isDefault',
    new Blob([JSON.stringify(isDefault)], { type: 'application/json' }),
  );

  // 이미지가 있을 경우에만 추가, 없을 경우 빈 Blob 추가
  if (image) {
    formData.append('image', image);
  } else {
    formData.append('image', new Blob([]));
  }

  try {
    const response = await authAPI(handleUnauthorized).patch(
      '/api/v1/user/profile',
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('프로필 업데이트 실패:', error);
    throw error;
  }
};
