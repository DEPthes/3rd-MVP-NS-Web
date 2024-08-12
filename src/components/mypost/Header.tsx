import React from 'react';
import * as S from '@styles/mypost/HeaderStyle';
import { SortType } from '../../types/mypost/post';

type SortOption = {
  label: string;
  value: SortType;
};

interface HeaderProps {
  title: string;
  sortType: SortType;
  setSortType: (sortType: SortType) => void;
  sortOptions: SortOption[];
  checkbox?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  sortType,
  setSortType,
  sortOptions,
  checkbox,
}) => {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
      {checkbox}
      <S.FilterLinks>
        {sortOptions.map((option, index) => (
          <React.Fragment key={option.value}>
            <S.FilterLink
              href="#"
              isSelected={sortType === option.value}
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
