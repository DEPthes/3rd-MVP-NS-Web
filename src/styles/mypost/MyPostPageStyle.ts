import styled from 'styled-components';
import CheckBoxDefault from '@/assets/icons/CheckBoxDefault.svg';
import CheckBoxVariant from '@assets/icons/CheckBoxVariant.svg';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  margin-top: 117px;
  display: flex;
  flex-direction: column;
  width: 1170px;
  align-items: center;

  ${isMobile} {
    margin: 30px 16px 40px 16px;
    width: 328px;
    height: 369px;
  }

  ${isTablet} {
    width: 728px;
    heigth: 369px;
    margin: 20px 36px 89px 36px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;

  ${isMobileOrTablet} {
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export const Title = styled.div`
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
  font: var(--S1);
  margin-left: 533px;

  ${isMobileOrTablet} {
    font: var(--P-S2-2);
    height: 12px;
    margin: 10px 0 0;
  }
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

  ${isMobileOrTablet} {
    width: 11.51px;
    height: 11.51px;
    margin-right: 2px;
  }
`;

export const FilterLinks = styled.div`
  display: flex;
  align-items: center;
  font: var(--S1-);

  span {
    margin: 0 6px;
    color: var(--NS-White);
  }

  ${isMobileOrTablet} {
    font: var(--P-S2-2);
  }
`;

export const FilterLink = styled.a<{ isSelected: boolean }>`
  color: ${({ isSelected }) =>
    isSelected ? 'var(--NS-Main1)' : 'var(--NS-White)'};
  text-decoration: none;
  cursor: pointer;
  margin: 0;

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
