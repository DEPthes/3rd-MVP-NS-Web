import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 149px;

  ${isMobileOrTablet} {
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 1170px;
  margin-top: 40px;

  ${isMobile} {
    width: 328px;
    margin-top: 30px;
  }

  ${isTablet} {
    width: 728px;
    margin-top: 26px;
  }
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
`;

export const Top3Title = styled.h2`
  font: var(--H1-1);
  color: var(--NS-White);
  text-align: center;
  margin-bottom: 50px;

  ${isMobileOrTablet} {
    margin-bottom: 31px;
    font: var(--BigButton);
  }
`;

export const FilterLinks = styled.div`
  margin-top: 34px;
  right: 0px;
  color: var(--NS-White);
  font: var(--S1-2);
  position: absolute;

  ${isMobileOrTablet} {
    margin-top: 308px;
  }
`;

export const PodiumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top3UserProfile = styled.div`
  display: flex;
  gap: 99px;
  margin-top: 0px;

  ${isMobile} {
    gap: 37px;
    justify-content: center;
  }

  ${isTablet} {
    justify-content: center;
    gap: 55.56px;
  }
`;

export const Top1 = styled.div`
  ${isMobile} {
    margin-bottom: 15px;
  }

  ${isTablet} {
    margin-bottom: 15px;
  }
`;

export const Top2 = styled.div`
  margin-top: 50px;

  ${isMobile} {
    margin-top: 25px;
  }

  ${isTablet} {
    margin-top: 25px;
  }
`;

export const Podium = styled.img`
  margin-top: -34px;
  width: 729px;
  height: 89px;

  ${isMobileOrTablet} {
    height: 40px;
    margin-top: -26px;
    margin-bottom: 0;
  }
`;

export const SearchContainer = styled.div`
  margin: 65px 0 27px auto;
  display: flex;

  ${isMobile} {
    width: 100%;
    margin-top: 0;
    margin-bottom: 40px;
  }

  ${isTablet} {
    width: 319.66px;
    margin: 0px 204.17px 40px;
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
  padding: 60px 110px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);

  ${isMobileOrTablet} {
    padding: 29px 28px;
    border-radius: 20px;
  }

  ${isTablet} {
    padding: 29px 200px;
  }
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  width: 100%;
  font: var(--T2);
  color: var(--NS-Main1);

  ${isMobileOrTablet} {
    height: 100%;
  }
`;

export const TableRow = styled.tr`
  width: 100%;
  justify-content: space-between;
`;

export const TableHeaderItem1 = styled.td`
  text-align: left;
  padding-bottom: 28px;

  ${isMobileOrTablet} {
    font: var(--T12);
    padding-bottom: 11px;
  }
`;

export const TableHeaderItem2 = styled.td`
  text-align: center;
  padding-bottom: 28px;

  ${isMobileOrTablet} {
    font: var(--T12);
    padding-bottom: 11px;
  }
`;

export const TableHeaderItem3 = styled.td`
  text-align: right;
  padding-bottom: 28px;

  ${isMobileOrTablet} {
    font: var(--T12);
    padding-bottom: 11px;
  }
`;

export const TableBody = styled.tbody``;
