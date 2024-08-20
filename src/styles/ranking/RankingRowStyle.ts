import styled from 'styled-components';
import { isMobileOrTablet } from '@/hooks/Media';

export const TableRow = styled.tr`
  width: 100%;
  border-collapse: separate;
`;

export const TableData1 = styled.td<{ $isCurrentUser: boolean }>`
  width: 20%;
  height: ${({ $isCurrentUser }) => ($isCurrentUser ? '54px' : '28px')};
  color: var(--NS-Black);
  font: ${({ $isCurrentUser }) => ($isCurrentUser ? 'var(--V9)' : 'var(--T2)')};
  text-align: left;
  padding-top: ${({ $isCurrentUser }) => ($isCurrentUser ? '0px' : '12px')};
  padding-bottom: ${({ $isCurrentUser }) => ($isCurrentUser ? '15px' : '0px')};
  white-space: pre-wrap;
  vertical-align: middle;
  ${isMobileOrTablet} {
    font: ${({ $isCurrentUser }) =>
      $isCurrentUser ? 'var(--V10)' : 'var(--T11)'};
    height: ${({ $isCurrentUser }) => ($isCurrentUser ? '40px' : '14px')};

    padding-bottom: 11px;
    line-height: 14px;
    padding-top: 0;
  }
`;

export const TableData2 = styled.td<{ $isCurrentUser: boolean }>`
  width: 60%;
  font: ${({ $isCurrentUser }) =>
    $isCurrentUser ? 'var(--T4-1)' : 'var(--T2)'};
  padding-top: 12px;
  text-align: center;
  vertical-align: middle;

  ${isMobileOrTablet} {
    font: ${({ $isCurrentUser }) =>
      $isCurrentUser ? 'var(--V11)' : ' var(--T11)'};
    height: ${({ $isCurrentUser }) => ($isCurrentUser ? '40px' : '14px')};

    line-height: 14px;
    padding-bottom: 11px;
    padding-top: 0;
  }
`;
export const TableData3 = styled.td<{ $isCurrentUser: boolean }>`
  width: 20%;
  font: ${({ $isCurrentUser }) =>
    $isCurrentUser ? 'var(--T4-1)' : 'var(--T2)'};
  padding-top: 12px;
  text-align: right;
  vertical-align: middle;

  ${isMobileOrTablet} {
    font: ${({ $isCurrentUser }) =>
      $isCurrentUser ? 'var(--V11)' : ' var(--T11)'};
    height: ${({ $isCurrentUser }) => ($isCurrentUser ? '40px' : '14px')};

    padding-bottom: 11px;
    line-height: 14px;
    padding-top: 0;
  }
`;
