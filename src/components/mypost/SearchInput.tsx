import React, { useState, useEffect } from 'react';
import SearchIcon from '@/assets/icons/Search.svg';
import * as S from '@/styles/mypost/SearchInputStyle';

type SearchInputProps<T> = {
  items: T[];
  onSearchResults: (results: T[]) => void;
  filterFunction: (item: T, query: string) => boolean;
};

const SearchInput = <T,>({
  items,
  onSearchResults,
  filterFunction,
}: SearchInputProps<T>) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length >= 2) {
      const filteredItems = items.filter(item => filterFunction(item, query));
      onSearchResults(filteredItems);
    } else {
      onSearchResults(items);
    }
  }, [query, items, onSearchResults, filterFunction]);

  return (
    <S.SearchContainer>
      <S.Input
        type="text"
        placeholder="검색할 키워드를 입력하세요"
        value={query}
        onChange={handleInputChange}
      />
      <S.Icon src={SearchIcon} alt="search" />
    </S.SearchContainer>
  );
};

export default SearchInput;
