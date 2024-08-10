import { useSetRecoilState } from 'recoil';
import { loginModalState } from '@/recoil/login';

export const useHandleUnauthorized = () => {
  const setLoginModalState = useSetRecoilState(loginModalState);

  const handleUnauthorized = () => {
    setLoginModalState(true);
  };

  return handleUnauthorized;
};
