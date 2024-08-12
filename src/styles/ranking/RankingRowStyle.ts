import styled from 'styled-components';
import { isMobileOrTablet } from '@/hooks/Media';

export const TableRow = styled.tr``;

export const TableData = styled.td`
  font: var(--T2);

  text-align: center;
  line-height: 40px;

  ${isMobileOrTablet} {
    font: var(--T11);
  }
`;
