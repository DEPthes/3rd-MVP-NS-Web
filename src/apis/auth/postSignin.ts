import { baseAPI } from '../customApi';

export const postSignin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const response = await baseAPI.post(`/auth/sign-in`, {
      username: username,
      password: password,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
