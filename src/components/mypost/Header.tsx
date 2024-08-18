import React from 'react';
import * as S from '@styles/mypost/HeaderStyle';

// 제네릭 SortType을 사용하여 컴포넌트 정의
type SortOption<T> = {
  label: string;
  value: T;
};

interface HeaderProps<T> {
  title: string;
  sortType: T;
  setSortType: (sortType: T) => void;
  sortOptions: SortOption<T>[];
  checkbox?: React.ReactNode;
}

const Header = <T extends string>({
  title,
  sortType,
  setSortType,
  sortOptions,
  checkbox,
}: HeaderProps<T>) => {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
      {checkbox}
      <S.FilterLinks>
        {sortOptions.map((option, index) => (
          <React.Fragment key={option.value}>
            <S.FilterLink
              href="#"
              $isSelected={sortType === option.value}
              onClick={() => setSortType(option.value)}
            >
              {option.label}
            </S.FilterLink>
            {index < sortOptions.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </S.FilterLinks>
    </S.Header>
  );
};

export default Header;
