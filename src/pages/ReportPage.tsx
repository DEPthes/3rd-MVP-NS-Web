import BestItem from '@/components/report/BestItem';
import DateNavigator from '@/components/report/DateNavigator';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import * as S from '@/styles/report/ReportPageStyle';
import { TReport } from '@/types/report';
import { useState } from 'react';

const ReportPage = () => {
  const [reportList, setReportList] = useState<TReport | null>(null);
  const { isMobileOrTablet } = useNSMediaQuery();

  //프로필 클릭 함수
  const onProfileClick = (id: number) => {
    console.log(id);
    //내 글이면 마이페이지(2-1)로 이동
    //아니면 사용자 프로필 페이지(3-6)로 이동
  };

  //게시글 클릭 함수
  const onPostClick = (id: number) => {
    console.log(id);
    //게시글 조회 페이지(3-5)로 이동
  };

  return (
    <S.Container>
      <DateNavigator setReportList={setReportList} />
      <S.SubWrap>
        <h2>주제</h2>
        <h1>{reportList?.title}</h1>
      </S.SubWrap>
      <hr />
      <S.HeadText>작성된 글</S.HeadText>
      <S.TodayText>
        오늘 작성된 글은 총 <span>{reportList?.length}</span>개
      </S.TodayText>
      <hr />
      <S.HeadText>단어 요약</S.HeadText>
      {reportList?.image ? (
        <S.SummaryWrap>
          <img src={reportList.image} alt="" />
          <h4>
            사용자가 가장 많이 쓴 단어는 <span>{reportList.word}</span>
            {!isMobileOrTablet && '입니다.'}
          </h4>
          <h4>
            <span>{reportList.wordLength}</span>번 노출
          </h4>
        </S.SummaryWrap>
      ) : (
        <S.NoneContainer isLast={false}>N 키워드 추출 중</S.NoneContainer>
      )}
      <hr />
      <S.HeadText>가장 길게 글 쓴 사람</S.HeadText>
      <S.LongWrap>
        <div>
          <img src={reportList?.longImage} alt="" />
          <p>{reportList?.longNickname}</p>
        </div>
        <h3>
          총 <span>{reportList?.longLength}</span>자 작성하셨습니다.
        </h3>
      </S.LongWrap>
      <hr />
      <S.HeadText>베스트 게시글</S.HeadText>
      {reportList?.best ? (
        <S.BestWrap>
          {reportList.best.map((data, index) => {
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
        <S.NoneContainer isLast={true}>집계중</S.NoneContainer>
      )}
    </S.Container>
  );
};

export default ReportPage;
