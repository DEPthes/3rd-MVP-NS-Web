import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 1170px;
  margin-top: 50px;
  z-index: 1;

  ${isMobile} {
    width: 328px;
    height: auto;
    margin-top: 30px;
    margin-bottom: 60px;
  }

  ${isTablet} {
    width: 728px;
    height: auto;
    margin-top: 26px;
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const Top3Title = styled.h2`
  height: 43px;
  font: var(--H1-1);
  color: var(--NS-White);
  text-align: center;
  margin-bottom: 50px;

  ${isMobileOrTablet} {
    height: 22px;
    margin-bottom: 31px;
    font: var(--BigButton);
  }
`;

export const FilterLinks = styled.div`
  height: 19px;
  z-index: 3;
  margin-top: 54px;
  right: 0px;
  color: var(--NS-White);
  font: var(--S1-2);
  position: absolute;

  ${isMobileOrTablet} {
    margin-top: 301px;
  }
`;

export const Top3Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;

  ${isMobile} {
    width: 319.66px;
    height: 209px;
    margin-bottom: 0px;
  }

  ${isTablet} {
    width: 480px;
    height: 209px;

    margin-left: 124px;
  }
`;

export const PodiumContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
 ${isMobile} {
    width: 100%
    height: 161px;

  }
`;

export const Top3UserProfile = styled.div`
  width: 660px;
  height: 317px;
  display: flex;
  gap: 99px;
  margin-top: 0px;

  ${isMobile} {
    width: 276px;
    height: 146px;
    gap: 37px;
    justify-content: center;
  }

  ${isTablet} {
    width: 399.42px;
    height: 146px;
    justify-content: center;
    gap: 55.56px;
  }
`;

export const Top1 = styled.div`
  display: flex;
  height: 255px;

  ${isMobile} {
    width: 64px;
    height: 125px;
    margin-top: 0;
    max-width: 400px;
  }

  ${isTablet} {
    width: 96.1px;
    height: 125px;
    margin-top: 0;
    margin-bottom: 20px;
    max-width: 400px;
  }
`;

export const Top2 = styled.div`
  margin-top: 62px;
  margin-bottom: 0px;

  ${isMobile} {
    width: 64px;
    height: 125px;
    margin-top: 21px;
  }

  ${isTablet} {
    width: 96.1px;
    height: 125px;
    margin-top: 21px;
  }
`;

export const Podium = styled.img`
  margin-top: -34px;
  width: 729px;
  height: 89px;

  ${isMobileOrTablet} {
    height: 40px;
    margin-top: -16px;
    margin-bottom: 0;
  }

  ${isMobile} {
    width: 100%;
  }

  ${isTablet} {
    width: 480px;
  }
`;

export const SearchContainer = styled.div`
  margin: 65px 0 27px auto;
  display: flex;

  ${isMobile} {
    width: 100%;
    margin-top: 0;
    margin-bottom: 52px;
  }

  ${isTablet} {
    width: 319.66px;
    margin: 0px 204.17px 52px;
    align-items: center;
  }
`;

export const FilterLink = styled.a<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) =>
    $isSelected ? 'var(--NS-Main-Clicked)' : 'var(--NS-White)'};
  text-decoration: none;
  cursor: pointer;
  font: var(--T12);

  &:hover {
    color: var(--NS-Main-Clicked);
  }

  ${isMobileOrTablet} {
    font: var(--S1-6);
  }
`;

export const Separator = styled.span`
  margin: 12px;
  font: var(--T12);

  ${isMobileOrTablet} {
    margin: 10px;
    font: var(--S1-6);
  }
`;

export const RankingContainer = styled.div`
  width: 100%;
  background-color: var(--NS-White);
  display: flex;
  justify-content: center;
  border-radius: 40px;
  padding-top: 60px;
  padding-bottom: 60px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  margin-bottom: 149px;

  ${isMobileOrTablet} {
    width: 100%;
    height: auto;
    padding: 28px 29px 17px;
    border-radius: 20px;
    margin-bottom: 30px;
    margin-top: 20px;
  }
`;

export const RankingTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 920px;

  ${isMobileOrTablet} {
    width: 270px;
  }
`;

export const TableHeader = styled.table`
  width: 100%;
  font: var(--T2);
  color: var(--NS-Main1);
  padding-bottom: 15px;

  ${isMobileOrTablet} {
    height: 100%;
    padding-bottom: 11px;
  }
`;

export const TableRow = styled.tr`
  width: 100%;
  justify-content: space-between;
`;

export const TableHeaderItem1 = styled.td`
  width: 33%;
  text-align: left;

  ${isMobileOrTablet} {
    width: 33%;
    font: var(--T12);

    height: 19px;

    padding: 0;
    text-align: left;
  }
`;

export const TableHeaderItem2 = styled.td`
  width: 33%;
  text-align: center;

  ${isMobileOrTablet} {
    width: 33%;
    font: var(--T12);
    height: 19px;
    padding: 0;
  }
`;

export const TableHeaderItem3 = styled.td`
  width: 33%;
  text-align: right;

  ${isMobileOrTablet} {
    width: 33%;
    font: var(--T12);
    height: 19px;
    padding: 0;
  }
`;

export const TableBody = styled.table`
  width: 919px;

  ${isMobileOrTablet} {
    width: 270px;
  }
`;
