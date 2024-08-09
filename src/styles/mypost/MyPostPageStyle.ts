import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 2rem;
  align-items: center;
  margin-bottom: 10rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: var(--NS-White);
  margin-right: auto;
`;

export const CheckboxContainer = styled.div`
  color: var(--NS-White);
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const CustomCheckbox = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;
  background-image: url('/src/assets/icons/CheckBoxDefault.svg'); /* 체크 해제 */
  background-size: cover;
  cursor: pointer;
  margin-right: 8px;

  &:checked {
    background-image: url('/src/assets/icons/CheckBoxVariant.svg'); /* 체크  */
  }
`;

export const FilterLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font: var(--S1-1);

  span {
    margin: 0 0.5rem;
    color: var(--NS-White);
  }
`;

export const FilterLink = styled.a<{ isSelected: boolean }>`
  margin: 0 0.5rem;
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
