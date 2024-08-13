import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 1170px;
  margin-top: 160px;
  margin-bottom: 149px;

  ${isMobileOrTablet} {
    width: 328px;
    height: 475px;
  }

  ${isMobile} {
    margin-top: 60px;
    margin-bottom: 190px;
  }

  ${isTablet} {
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

export const Top3Title = styled.h2`
  height: 43px;
  font: var(--H1-1);
  color: var(--NS-White);

  ${isMobileOrTablet} {
    height: 22px;
    margin-bottom: 26px;
    font: var(--T2-3);
  }
`;

export const FilterLinks = styled.div`
  heigth: 19px;
  z-index: 2;
  margin-top: 34px;
  right: 0px;
  color: var(--NS-White);
  font: var(--S1-2);
  position: absolute;

  ${isMobileOrTablet} {
    margin-top: 290px;
  }
`;

export const Top3Container = styled.div`
  z-index: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${isMobileOrTablet} {
    width: 319.66px;
    height: 161px;
    margin-bottom: 26px;
  }
`;

export const Top3UserProfile = styled.div`
  width: 660px;
  height: 340px;
  display: flex;
  gap: 99px;

  ${isMobileOrTablet} {
    width: 276px;
    height: 137px;
    gap: 37px;
    justify-content: center;
  }
`;

export const Top1 = styled.div`
  margin-top: 24px;
  margin-bottom: 44px;
  display: flex;

  ${isMobileOrTablet} {
    width: 64px;
    height: 111px;
    margin-top: 0;
    margin-bottom: 34px;
    max-width: 400px;
  }
`;

export const Top2 = styled.div`
  margin-top: 102px;
  margin-bottom: -35px;
  ${isMobileOrTablet} {
    width: 64;
    height: 111px;
    margin-top: 26px;
  }
`;

export const Podium = styled.img`
  margin-top: -34px;
  width: 729px;
  height: 89px;

  ${isMobileOrTablet} {
    width: 300%;
    height: 40px;
    margin-top: -16px;
    margin-bottom: 0;
  }
`;

export const SearchContainer = styled.div`
  margin: 65px 0 27px auto;
  display: flex;

  ${isMobileOrTablet} {
    width: 100%;
    margin-top: 26px;
    margin-bottom: 52px;
  }
`;

export const FilterLink = styled.a<{ isSelected: boolean }>`
  color: ${({ isSelected }) =>
    isSelected ? 'var(--NS-Main-Clicked)' : 'var(--NS-White)'};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--NS-Main-Clicked);
  }

  ${isMobileOrTablet} {
    font: var(--S1-5);
  }
`;

export const Separator = styled.span`
  margin: 12px;
  ${isMobileOrTablet} {
    margin: 10px;
  }
`;

export const RankingContainer = styled.div`
  width: 100%;
  background-color: var(--NS-White);
  display: flex;
  flex-deriction: column;
  justify-content: center;
  border-radius: 40px;
  padding-top: 60px;
  padding-bottom: 60px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);

  ${isMobileOrTablet} {
    width: 100%;
    height: 150px;
    padding: 28px 29px;
    border-radius: 20px;
    margin-bottom: 30px;
  }
`;

export const RankingTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${isMobileOrTablet} {
    width: 270px;
    height: 94px;
  }
`;

export const TableHeader = styled.table`
  width: 878px;
  font: var(--T2);
  color: var(--NS-Main1);
  padding-bottom: 44px;

  ${isMobileOrTablet} {
    padding-top: 20px;
    width: 100%;
    height: 100%;
    padding-bottom: 11px;
  }
`;

export const TableRow = styled.tr`
  width: 100%;
`;

export const TableHeaderItem1 = styled.td`
  width: 35px;
  text-align: left;
  padding-right: 343px;
  padding-left: 20px;
  ${isMobileOrTablet} {
    width: 33%;
    font: var(--T12);

    height: 19px;

    padding: 0;
    text-align: left;
  }
`;

export const TableHeaderItem2 = styled.td`
  width: 52px;
  text-align: center;
  padding-right: 326px;
  ${isMobileOrTablet} {
    width: 33%;
    font: var(--T12);
    height: 19px;
    padding: 0;
  }
`;

export const TableHeaderItem3 = styled.td`
  width: 35px;
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
    padding-bottom: 18px;

`;
