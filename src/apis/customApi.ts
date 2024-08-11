import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const Interceptors = (
  instance: AxiosInstance,
  handleUnauthorized?: () => void,
) => {
  instance.interceptors.request.use(
    config => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error),
  );

  instance.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      //originalRequest가 undefined인 경우를 처리
      if (!originalRequest) {
        return Promise.reject(error);
      }

      //accessToken 만료 처리
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          //리프레시 토큰이 없으면 로그인 모달 실행
          if (handleUnauthorized) {
            handleUnauthorized();
          } else {
            window.location.href = '/login';
          }
          return Promise.reject(error);
        }

        try {
          //refreshToken을 사용하여 새로운 accessToken 발급 + API 수정 필요
          const { data } = await axios.post(`${BASE_URL}/refresh-token`, {
            refreshToken,
          });

          //새로 발급받은 accessToken 저장
          localStorage.setItem('accessToken', data.accessToken);

          //원래 요청에 새로운 accessToken 추가
          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers[
            'Authorization'
          ] = `Bearer ${data.accessToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          //refreshToken도 만료되거나 실패한 경우 로그아웃 처리 후 로그인 모달 실행
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          if (handleUnauthorized) {
            handleUnauthorized();
          } else {
            window.location.href = '/login';
          }
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );
};

const axiosInstance = (auth: boolean, handleUnauthorized?: () => void) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    withCredentials: true,
  });

  if (auth) {
    Interceptors(instance, handleUnauthorized);
  }
  return instance;
};

export const baseAPI = axiosInstance(false); //토큰이 필요없는 경우
export const authAPI = (handleUnauthorized?: () => void) =>
  axiosInstance(true, handleUnauthorized); //토큰이 필요한 경우
