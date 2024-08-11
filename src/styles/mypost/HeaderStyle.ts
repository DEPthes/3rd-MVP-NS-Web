import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font: var(--H2);
  color: var(--NS-White);
  margin-right: auto;
`;

export const FilterLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: 34px;
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
