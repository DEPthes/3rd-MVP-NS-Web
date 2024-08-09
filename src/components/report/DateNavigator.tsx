import { SetStateAction, useEffect, useState } from 'react';
import * as S from '@/styles/report/DateNavigatorStyle';
import PrevBtn from '@/assets/icons/PrevBtn.svg?react';
import { TReport } from '@/types/report';
import SummaryImage from '@/assets/dummy/SummaryImage.png';

const dummyList = {
  id: 1,
  title: '비행기를 탔는데 누군가와 자꾸 눈이 마주친다면?',
  length: 15,
  image: SummaryImage,
  word: '두기',
  wordLength: 107,
  longImage: SummaryImage,
  longNickname: '두기두밥두기두밥',
  longLength: 782,
  best: [
    {
      postId: 1,
      profileId: 1,
      image: SummaryImage,
      nickname: '강두기',
      subject: '비행기를 탔는데 누군가와 자꾸 눈이 마주친다면?',
      date: '2024. 07. 30',
      title: '눈 마주친 사람에게 다가가서',
      heart: 10,
      selectLength: 5,
    },
    {
      postId: 2,
      profileId: 2,
      image: SummaryImage,
      nickname: '정두기',
      subject: '비행기를 탔는데 누군가와 자꾸 눈이 마주친다면?',
      date: '2024. 07. 30',
      title: '윙크를 날려버려~',
      heart: 13,
      selectLength: 10,
    },
    {
      postId: 3,
      profileId: 3,
      image: SummaryImage,
      nickname: '두기두밥두기두밥',
      subject: '비행기를 탔는데 누군가와 자꾸 눈이 마주친다면?',
      date: '2024. 07. 30',
      title: '운명일지도...',
      heart: 3,
      selectLength: 100,
    },
  ],
};

const DateNavigator = ({
  setReportList,
}: {
  setReportList: React.Dispatch<SetStateAction<TReport | null>>;
}) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    //날짜에 맞는 N 보고서 불러오는 API 추가
    setReportList(dummyList);
  }, [selectedDate, setReportList]);

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
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
    if (formatDate(selectedDate) < formatDate(today)) {
      const nextDay = new Date(selectedDate);
      nextDay.setDate(selectedDate.getDate() + 1);

      if (formatDate(nextDay) < formatDate(today)) {
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
