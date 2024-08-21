import { SetStateAction, useState } from 'react';
import * as S from '@/styles/report/DateNavigatorStyle';
import PrevBtn from '@/assets/icons/PrevBtn.svg?react';

const DateNavigator = ({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<SetStateAction<Date>>;
}) => {
  const today = new Date();

  const resetTime = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const [isDisabled, setIsDisabled] = useState(
    () => resetTime(today).getTime() === resetTime(selectedDate).getTime(),
  );

  const [isLeftDisabled, setIsLeftDisabled] = useState(
    selectedDate.getTime() === new Date(2024, 8, 13).getTime(),
  );

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  //이전 날짜 버튼 클릭 함수
  const handlePrevDay = () => {
    const selectedDateWithoutTime = resetTime(selectedDate);
    const lastDateWithoutTime = new Date(2024, 7, 13);

    if (selectedDateWithoutTime > lastDateWithoutTime) {
      const prevDay = new Date(selectedDateWithoutTime);
      prevDay.setDate(selectedDateWithoutTime.getDate() - 1);

      if (prevDay > lastDateWithoutTime) {
        setIsLeftDisabled(false);
        setIsDisabled(false);
      } else {
        setIsLeftDisabled(true);
        setIsDisabled(false);
      }
      setSelectedDate(prevDay);
    }
  };

  //다음 날짜 버튼 클릭 함수
  const handleNextDay = () => {
    const selectedDateWithoutTime = resetTime(selectedDate);
    const todayWithoutTime = resetTime(today);
    if (selectedDateWithoutTime < todayWithoutTime) {
      const nextDay = new Date(selectedDateWithoutTime);
      nextDay.setDate(selectedDateWithoutTime.getDate() + 1);

      if (nextDay < todayWithoutTime) {
        setIsDisabled(false);
        setIsLeftDisabled(false);
      } else {
        setIsDisabled(true);
        setIsLeftDisabled(false);
      }
      setSelectedDate(nextDay);
    }
  };

  return (
    <S.Container>
      <PrevBtn
        style={{
          cursor: isLeftDisabled ? 'default' : 'pointer',
        }}
        color={isLeftDisabled ? 'var(--Gray2)' : 'var(--NS-Main1)'}
        onClick={handlePrevDay}
      />
      <h1>{formatDate(selectedDate)}</h1>
      <PrevBtn
        style={{
          rotate: '180deg',
          cursor: isDisabled ? 'default' : 'pointer',
        }}
        color={isDisabled ? 'var(--Gray2)' : 'var(--NS-Main1)'}
        onClick={handleNextDay}
      />
    </S.Container>
  );
};

export default DateNavigator;
