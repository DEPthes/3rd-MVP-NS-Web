import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1159px;
  height: 35px;
  margin: 53px 5px 20px 6px;
`;

export const Title = styled.h2`
  font: var(--H2);
  color: var(--NS-White);
  margin-right: auto;
  margin-bottom: 13px;
`;

export const FilterLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 14px 0 2px 0px;
  font: var(--S1-2);

  span {
    margin: 0 12px;
    color: var(--NS-White);
  }
`;

export const FilterLink = styled.a<{ isSelected: boolean }>`
  color: ${({ isSelected }) =>
    isSelected ? 'var(--NS-Main1)' : 'var(--NS-White)'};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--NS-Main1);
  }
`;
