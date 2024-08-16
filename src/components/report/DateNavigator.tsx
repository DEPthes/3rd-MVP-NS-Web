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
  const [isDisabled, setIsDisabled] = useState(true);

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  const resetTime = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  //이전 날짜 버튼 클릭 함수
  const handlePrevDay = () => {
    const prevDay = new Date(selectedDate);
    prevDay.setDate(selectedDate.getDate() - 1);
    setIsDisabled(false);
    setSelectedDate(prevDay);
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
      } else {
        setIsDisabled(true);
      }
      setSelectedDate(nextDay);
    }
  };

  return (
    <S.Container>
      <PrevBtn
        style={{ cursor: 'pointer' }}
        color="var(--NS-Main1)"
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
