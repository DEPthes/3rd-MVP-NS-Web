import { useSetRecoilState } from 'recoil';
import { loginModalState } from '@/recoil/login';
import { useCallback } from 'react';

export const useHandleUnauthorized = () => {
  const setLoginModalState = useSetRecoilState(loginModalState);

  const handleUnauthorized = useCallback(() => {
    setLoginModalState(true);
  }, [setLoginModalState]);

  return handleUnauthorized;
};
