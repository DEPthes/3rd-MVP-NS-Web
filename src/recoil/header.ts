import { atom } from 'recoil';

export const headerState = atom<string>({
  key: 'headerState',
  default: '',
});
