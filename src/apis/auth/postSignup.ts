import { baseAPI } from '../customApi';

export const postSignup = async ({
  username,
  password,
  checkPassword,
  nickname,
  image,
}: {
  username: string;
  password: string;
  checkPassword: string;
  nickname: string;
  image: File | null;
}) => {
  const formData = new FormData();

  formData.append(
    'signUpReq',
    new Blob(
      [
        JSON.stringify({
          username,
          password,
          checkPassword,
          nickname,
        }),
      ],
      {
        type: 'application/json',
      },
    ),
  );

  formData.append(
    'isDefault',
    new Blob([JSON.stringify(image === null)], {
      type: 'application/json',
    }),
  );

  if (image !== null) {
    formData.append('image', image);
  } else {
    formData.append('image', new Blob([]));
  }

  try {
    const response = await baseAPI.post(`/auth/sign-up`, formData);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
