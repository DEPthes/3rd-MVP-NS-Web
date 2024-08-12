import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 117px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 53px;
  width: 450px;
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);
  background-color: var(--NS-White);
  border-radius: 100px;
`;

export const SearchInput = styled.input`
  width: 90%;
  padding: 18px 28px;
  border: none;
  font: var(--Input);
  color: var(--NS-Black);
  background-color: transparent;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 28px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 22px;
`;

export const Title = styled.div`
  color: var(--NS-White);
  font: var(--H2);
`;

export const SortOptions = styled.div`
  display: flex;
  gap: 12px;
  color: var(--NS-White);
  font: var(--S1);
`;

export const SortOption = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  font: var(--W1);
  color: ${({ isSelected }) => (isSelected ? 'var(--NS-Main1)' : 'inherit')};

  &:hover {
    color: var(--NS-Main1);
  }
  &:active {
    color: var(--NS-Main1);
  }
`;

export const TopicBox = styled.div`
  padding: 31px 50px 23px 46px;
  background-color: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  border-radius: 40px;
  margin-bottom: 20px;
  width: 1170px;
  height: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const TopicTitle = styled.div`
  font: var(--H3);
  color: var(--NS-Black);
`;

export const TopicDate = styled.div`
  font: var(--S1-1);
  color: var(--Gray1);
`;

export const PostCount = styled.div`
  margin-top: 11px;
  font: var(--T4);
  color: var(--NS-Black);
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  color: var(--NS-Main1);
  font: var(--S1);
`;
