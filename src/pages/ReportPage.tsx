import BestItem from '@/components/report/BestItem';
import DateNavigator from '@/components/report/DateNavigator';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import * as S from '@/styles/report/ReportPageStyle';
import { TReport, TReportToday } from '@/types/report';
import { useEffect, useState } from 'react';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import { getReport } from '@/apis/report/getReport';
import { useNavigate } from 'react-router-dom';

const ReportPage = () => {
  const navigate = useNavigate();
  const handleUnauthorized = useHandleUnauthorized();
  const [reportList, setReportList] = useState<TReport | TReportToday | null>(
    null,
  );
  const { isMobileOrTablet } = useNSMediaQuery();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const isTReport = (
    report: TReport | TReportToday | null,
  ): report is TReport => {
    return !!report && 'wordCloud' in report;
  };

  const formatDateToString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const handleReport = async () => {
      const formattedDate = formatDateToString(selectedDate);
      const response = await getReport(formattedDate, handleUnauthorized);
      if (response) {
        setReportList(response);
      } else {
        setReportList(null);
      }
    };

    handleReport();
  }, [selectedDate, handleUnauthorized]);

  //프로필 클릭 함수
  const onProfileClick = (isCurrentUser: boolean, userId: number) => {
    if (isCurrentUser) {
      //내 글이면 마이페이지로 이동
      navigate('/mypage');
    } else {
      //아니면 사용자 프로필 페이지로 이동
      navigate(`/profile/${userId}`);
    }
  };

  //게시글 클릭 함수
  const onPostClick = (boardId: number) => {
    console.log(boardId);
    //게시글 조회 페이지로 이동
    navigate(`/scenario/${boardId}`);
  };

  return (
    <S.Container>
      <DateNavigator
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {reportList ? (
        <>
          <S.SubWrap>
            <h2>주제</h2>
            <h1>{reportList?.themeName}</h1>
          </S.SubWrap>
          <hr />
          <S.HeadText>작성된 글</S.HeadText>
          <S.TodayText>
            오늘 작성된 글은 총 <span>{reportList?.writtenTotal}</span>개
          </S.TodayText>
          <hr />
          <S.HeadText>단어 요약</S.HeadText>
          {isTReport(reportList) && reportList?.wordCloud ? (
            <S.SummaryWrap>
              <img src={reportList.wordCloud} alt="" />
              <h4>
                사용자가 가장 많이 쓴 단어는 <span>{reportList.topWord}</span>
                {!isMobileOrTablet && '입니다.'}
              </h4>
              <h4>
                <span>{reportList.count}</span>번 노출
              </h4>
            </S.SummaryWrap>
          ) : (
            <S.NoneContainer $isLast={false}>N 키워드 추출 중</S.NoneContainer>
          )}
          <hr />
          <S.HeadText>가장 길게 글 쓴 사람</S.HeadText>
          {isTReport(reportList) && reportList.longestWriter ? (
            <S.LongWrap>
              <div
                onClick={() =>
                  onProfileClick(
                    reportList.longestWriter.isCurrentUser,
                    reportList.longestWriter.userId,
                  )
                }
              >
                <img src={reportList?.longestWriter.imageUrl} alt="" />
                <p>{reportList?.longestWriter.nickname}</p>
              </div>
              <h3>
                총 <span>{reportList?.longestWriter.length}</span>자
                작성하셨습니다.
              </h3>
            </S.LongWrap>
          ) : (
            <S.NoneContainer $isLast={false}>집계중</S.NoneContainer>
          )}
          <hr />
          <S.HeadText>베스트 게시글</S.HeadText>
          {isTReport(reportList) && reportList?.bestPost ? (
            <S.BestWrap>
              {reportList.bestPost.map((data, index) => {
                return (
                  <BestItem
                    key={index}
                    item={data}
                    onProfileClick={onProfileClick}
                    onPostClick={onPostClick}
                  />
                );
              })}
            </S.BestWrap>
          ) : (
            <S.NoneContainer $isLast={true}>집계중</S.NoneContainer>
          )}
        </>
      ) : (
        <></>
      )}
    </S.Container>
  );
};

export default ReportPage;
