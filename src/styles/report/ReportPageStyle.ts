import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 144px;

  hr {
    width: 98%;
    border: 1px dashed var(--NS-White);
    margin-bottom: 40px;
  }

  span {
    color: var(--NS-Main1);
  }
`;

export const SubWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  background-color: var(--NS-White);
  margin-top: 62px;
  margin-bottom: 58px;
  padding: 44px;
  width: 1170px;
  min-height: 199px;
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  color: var(--NS-Main1);

  > h2 {
    font: var(--Y1);
    user-select: none;
  }

  > h1 {
    font: var(--N1);
  }
`;

export const HeadText = styled.h2`
  text-align: center;
  user-select: none;
  font: var(--N2);
  color: var(--NS-White);
`;

export const TodayText = styled.h3`
  margin-top: 82px;
  margin-bottom: 111px;
  font: var(--T1);
  color: var(--NS-White);
`;

export const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 18px;
  margin-bottom: 57px;

  > img {
    height: 302px;
    border-radius: 40px;
    box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  }

  > h4 {
    font: var(--N3);
    color: var(--NS-White);
  }
`;

export const LongWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
  margin: 114px 0;

  img {
    width: 156px;
    height: 156px;
    border-radius: 100px;
    object-fit: cover;
  }

  p {
    font: var(--S1);
    color: var(--NS-White);
    text-align: center;
    margin-top: 6px;
  }

  > h3 {
    font: var(--H3);
    color: var(--NS-White);
    margin-bottom: 19px;
  }
`;

export const BestWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 68px;
  margin-bottom: 106px;
`;
