import { atom } from 'recoil';

export const selectedDateState = atom<Date>({
  key: 'selectedDateState',
  default: new Date(),
});
