import styled from 'styled-components';
import { isMobileOrTablet } from '@/hooks/Media';

export const TableRow = styled.tr`
  width: 100%;
  border-collapse: separate;
`;

export const TableData1 = styled.td<{ $isCurrentUser: boolean }>`
  width: 20%;
  color: ${({ $isCurrentUser }) =>
    $isCurrentUser ? 'var(--NS-Main2)' : 'var(--NS-Black)'};
  font: ${({ $isCurrentUser }) => ($isCurrentUser ? 'var(--H3)' : 'var(--T2)')};
  text-align: left;
  padding-top: ${({ $isCurrentUser }) => ($isCurrentUser ? '0' : '12px')};
  //ertical-align: ${({ $isCurrentUser }) =>
    $isCurrentUser ? 'top' : 'middle'};
  white-space: pre-wrap;
  vertical-align: middle;

  ${isMobileOrTablet} {
    font: var(--T11);
    padding-bottom: 11px;
    line-height: 14px;
    padding-top: 0;
  }
`;

export const TableData2 = styled.td<{ $isCurrentUser: boolean }>`
  width: 60%;
  font: ${({ $isCurrentUser }) => ($isCurrentUser ? 'var(--H3)' : 'var(--T2)')};
  padding-top: 12px;
  text-align: center;
  vertical-align: middle;

  ${isMobileOrTablet} {
    font: var(--T11);
    line-height: 14px;
    padding-bottom: 11px;
    padding-top: 0;
  }
`;
export const TableData3 = styled.td<{ $isCurrentUser: boolean }>`
  width: 20%;
  font: ${({ $isCurrentUser }) => ($isCurrentUser ? 'var(--H3)' : 'var(--T2)')};
  padding-top: 12px;
  text-align: right;
  vertical-align: middle;

  ${isMobileOrTablet} {
    font: var(--T11);
    padding-bottom: 11px;
    line-height: 14px;
    padding-top: 0;
  }
`;
