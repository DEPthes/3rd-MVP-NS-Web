import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1170px;
  margin-top: 114px;
  margin-bottom: 149px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Top3Title = styled.h2`
  width: 96px;
  height: 43px;
  font: var(--H1-1);
  color: var(--NS-White);
`;

export const FilterLinks = styled.div`
  width: 250px;
  heigth: 19px;
  margin-left: auto;
  z-index: 2;
  color: var(--NS-White);
  font: var(--T6);
`;

export const Top3Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top3UserProfile = styled.div`
  width: 660px;
  height: 384px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ;
`;

export const Top1 = styled.div`
  margin-top: 24px;
  margin-bottom: 78px;
  display: flex;
`;

export const Top2 = styled.div`
  margin-top: 102px;
  margin-bottom: 0px;
`;

export const Podium = styled.div`
  margin-top: -34px;
  width: 729px;
  height: 89px;
`;

export const SearchContainer = styled.div`
  margin: 65px 0 27px auto;
  display: flex;
`;

export const FilterLink = styled.a<{ isSelected: boolean }>`
  margin: 0 10px;
  color: ${({ isSelected }) =>
    isSelected ? 'var(--NS-Main-Clicked)' : 'var(--NS-White)'};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--NS-Main-Clicked);
  }
`;

export const Separator = styled.span``;

export const RankingContainer = styled.div`
  width: 100%;
  background-color: var(--NS-White);
  border-radius: 40px;
  padding: 60px 0;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead``;

export const TableRow = styled.tr`
  width: 878px;
  heigth: 28px;
`;

export const TableHeaderItem = styled.th`
  width: 33%;
  font: var(--T2);
  color: var(--NS-Main1);
  padding-bottom: 36px;
`;

export const TableBody = styled.tbody`
  width: 33%;
`;
