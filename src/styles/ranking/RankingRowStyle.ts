import styled from 'styled-components';
import { isMobileOrTablet } from '@/hooks/Media';

export const TableRow = styled.tr`
  width: 100%;
  border-collapse: separate;
`;

export const TableData1 = styled.td`
  width: 20%;

  font: var(--T2);
  text-align: left;
  padding-top: 12px;

  ${isMobileOrTablet} {
    font: var(--T11);
    padding-bottom: 11px;
    line-height: 14px;
    padding-top: 0;
  }
`;

export const TableData2 = styled.td`
  width: 60%;
  font: var(--T2);
  text-align: center;

  ${isMobileOrTablet} {
    font: var(--T11);
    line-height: 14px;
    padding-bottom: 11px;
    padding-top: 0;
  }
`;
export const TableData3 = styled.td`
  width: 20%;
  font: var(--T2);
  text-align: right;

  ${isMobileOrTablet} {
    font: var(--T11);
    padding-bottom: 11px;
    line-height: 14px;
    padding-top: 0;
  }
`;
