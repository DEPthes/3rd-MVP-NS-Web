import styled from 'styled-components';
import CheckBoxDefault from '@/assets/icons/CheckBoxDefault.svg';
import CheckBoxVariant from '@assets/icons/CheckBoxVariant.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1170px;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h2`
  color: var(--NS-White);
  margin-right: auto;
`;

export const CheckboxContainer = styled.div`
  height: 24px;
  margin-top: 11px;
  color: var(--NS-White);
  display: flex;
  align-items: center;
  margin-right: 34px;
  font: var(--S1-3);
`;

export const CustomCheckbox = styled.input`
  width: 24px;
  height: 24px;
  appearance: none;
  background-image: url(${CheckBoxDefault}); /* 체크 해제 */
  background-size: cover;
  cursor: pointer;
  margin-right: 8px;

  &:checked {
    background-image: url(${CheckBoxVariant}); /* 체크  */
  }
`;

export const FilterLinks = styled.div`
  display: flex;
  align-items: center;
  font: var(--S1-);

  span {
    margin: 0 0.5rem;
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

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
