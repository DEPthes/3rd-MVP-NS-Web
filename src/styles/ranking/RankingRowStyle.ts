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
  line-height: 40px;

  ${isMobileOrTablet} {
    font: var(--T11);
    padding-bottom: 11px;
    height: 14px;
  }
`;

export const TableData2 = styled.td`
  width: 60%;
  font: var(--T2);
  text-align: center;
  line-height: 40px;

  ${isMobileOrTablet} {
    font: var(--T11);
    height: 14px;
    padding-bottom: 11px;
  }
`;
export const TableData3 = styled.td`
  width: 20%;
  font: var(--T2);
  text-align: right;
  line-height: 40px;

  ${isMobileOrTablet} {
    font: var(--T11);
    padding-bottom: 11px;
    height: 14px;
  }
`;
